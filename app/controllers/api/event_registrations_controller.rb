class Api::EventRegistrationsController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @event = Event.find(params[:event_id]) 
        if !@event.user_ids.include?(current_user.id)
            @event_registration = EventRegistration.create(user_id: current_user.id, event_id: @event.id) 
                @event = Event.find(params[:event_id]) 
                render 'api/events/show'
        else 
            render 'api/events/show'
        end
    end

    def destroy 
        @event_registration = EventRegistration.find_by(event_id: params[:event_id], user_id: current_user.id)
        @event = Event.find(params[:event_id]) 
        @event_registration.destroy 
        render 'api/events/show'
    end 



end