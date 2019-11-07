class Api::EventsController < ApplicationController 

    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        # debugger
        @event = current_user.events.new(event_params) 
        if @event.save 
            render :show 
        else 
            render json: @event.errors.full_messages, status: 401
        end
    end

    def update
        # debugger
        @event = Event.find(params[:id])
        if @event.update(event_params) 
            render :show 
        else 
            render json: @event.errors.full_messages, status: 401 
        end
    end

    def destroy 
        event = Event.find(params[:id])
        if event.destroy 
            render json: event.id 
        else
            render json: @event.errors.full_messages, status: 401
        end 
    end

    def index 
        @events = Event.all 
        # debugger 
        render :index
    end

    def show
        @event = Event.find(params[:id]) 
        if @event
            render :show 
        else 
            render json: @event.errors.full_messages, status: 404
        end
    end
    

    private 

    def event_params
        params.require(:event).permit(:title, :location, :description, :event_type, :price, :start_date, :start_time, :end_date, :end_time, :organizer, :photo)
    end
end