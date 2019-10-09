json.event do 
    json.extract! @event, :id, :title, :description, :event_type, :category, :price, :location, :start_date, :start_time, :end_date, :end_time, :image_url
    if @event.photo.attached?
        json.photoUrl url_for(@event.photo) 
    end
end