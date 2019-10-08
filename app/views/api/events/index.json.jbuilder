json.events do 
    @events.each do |event|
        json.set! event.id do 
                json.extract! event, :id, :title, :description, :event_type, :category, :price, :location, :start_date, :start_time, :end_date, :end_time, :image_url
                json.photoUrl url_for(event.photo) 

        end
    end
end