class Event < ApplicationRecord 
    validates :creator_id, :title, :location, :event_type, presence: true
    
    belongs_to :creator, 
    foreign_key: :creator_id, 
    class_name: :User

    has_one_attached :photo


end