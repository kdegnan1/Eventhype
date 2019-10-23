class Api::EventRegistrationController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        debugger
        @event_registration = EventRegistration.new(event_reg_params) 
        @event_registration.update(event_id: params[:event_id]) 
        if @event_registration.save 
            @event = @event_registration.event 
            render 'api/events/show'
        end
    end

    def destroy 
        event_registration = EventRegistration.find_by(event_id: params[:event_id], user_id: current_user.id)
        @event = event_registration.event 
        event_registration.destroy 
        render 'api/events/show'
    end 

    private 

    def event_reg_params 
        params.require(:event_registration).permit(:event_id, :user_id)
    end 

end