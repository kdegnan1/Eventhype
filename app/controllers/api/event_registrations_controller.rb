class Api::EventRegistrationsController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @event = Event.find(params[:event_id]) 
        debugger
        if !@event.user_ids.include?(current_user.id)
            @event_registration = EventRegistration.create(user_id: current_user.id, event_id: @event.id) 
            render 'api/events/show'
        else 
            # @event_registration.update(event_id: params[:event_id]) 
        # debugger

        # if @event_registration.save 
            # @event = @event_registration.event 
            render 'api/events/show'
        end
    end

    def destroy 
        event_registration = EventRegistration.find(params[:id]) 
        @event = Event.find(params[:event_id]) 
        event_registration.destroy 
        render 'api/events/show'
    end 



end