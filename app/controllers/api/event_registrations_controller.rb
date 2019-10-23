class Api::EventRegistrationsController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        # debugger
        @event = Event.find(params[:event_id]) 
        # debugger
        @event_registration = EventRegistration.create(user_id: current_user.id, event_id: @event.id) 
        # @event_registration.update(event_id: params[:event_id]) 
        # debugger
        if @event_registration.save 
            # @event = @event_registration.event 
            render 'api/events/show'
        end
    end

    def destroy 
        event_registration = EventRegistration.find_by(event_id: params[:event_id], user_id: current_user.id)
        @event = event_registration.event 
        event_registration.destroy 
        render 'api/events/show'
    end 



end