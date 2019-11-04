class Api::EventLikesController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @event = Event.find(params[:event_id]) 
        @event_like = EventLike.create(user_id: current_user.id, event_id: @event.id)
        render 'api/events/show' 
    end

    def destroy 
        @event_like = EventLike.find_by(event_id: params[:event_id], current_user.id)
        @event = Event.find(params[:event_id]) 
        @event_like.:destroy 
        render 'api/events/show' 
    end

end