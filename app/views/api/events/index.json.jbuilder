
    @events.each do |event|
        json.set! event.id do 
                json.extract! event, :id, :title, :description, :event_type, :price, :location, :start_date, :start_time, :end_date, :end_time, :organizer
                json.attendees event.user_ids 
                json.likers event.liked_user_ids
                # debugger
                json.photoUrl url_for(event.photo) 
        end
    end
