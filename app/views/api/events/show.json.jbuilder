
json.event do 
    json.extract! @event, :id, :title,:creator_id, :description, :event_type,:price, :location, :start_date, :start_time, :end_date, :end_time, :organizer
    json.attendees @event.user_ids 
    json.likers @event.liked_user_ids


    if @event.photo.attached?
        json.photoUrl url_for(@event.photo) 
    end
end 