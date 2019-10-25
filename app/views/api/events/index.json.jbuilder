
    @events.each do |event|
        json.set! event.id do 
                json.extract! event, :id, :title, :description, :event_type, :category, :price, :location, :start_date, :start_time, :end_date, :end_time, :image_url, :organizer
                json.attendees event.user_ids 
                json.photoUrl url_for(event.photo) 

        end
    end
