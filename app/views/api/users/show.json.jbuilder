json.user do 
    json.extract! @user, :email, :id, :fname, :lname 
    json.registered @user.registered_event_ids
    json.liked @user.liked_event_ids 
end

json.events do 
     @user.registered_events.each do |event|
        json.set! event.id do 
                json.extract! event, :id, :title, :description, :event_type, :price, :location, :start_date, :start_time, :end_date, :end_time, :organizer
                json.attendees event.user_ids 
                json.likers event.liked_user_ids
                json.photoUrl url_for(event.photo) 
        end 
    end 

    @user.liked_events.each do |event| 
        json.set! event.id do
                json.extract! event, :id, :title, :description, :event_type, :price, :location, :start_date, :start_time, :end_date, :end_time, :organizer
                json.attendees event.user_ids 
                json.likers event.liked_user_ids
                json.photoUrl url_for(event.photo) 
        end
    end
end 