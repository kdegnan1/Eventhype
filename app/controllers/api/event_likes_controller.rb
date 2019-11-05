class Api::EventLikesController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        # debugger
        @event = Event.find(params[:event_id])
        if !@event.liked_users.map(&:id).include?(current_user.id) 
            @event_like = EventLike.create(user_id: current_user.id, event_id: @event.id)
            @event = Event.find(params[:event_id]) 
            render 'api/events/show' 
        else 
            render 'api/events/show' 
        end
    end

    # def show 
    #     render :show 
    # end

    def destroy 
        # debugger
        @event_like = EventLike.find_by(event_id: params[:event_id], user_id: current_user.id)
        @event = Event.find(params[:event_id]) 
        @event_like.destroy 
        render 'api/events/show' 
    end

end