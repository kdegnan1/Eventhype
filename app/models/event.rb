class Event < ApplicationRecord 
    validates :creator_id, :title, :location, :event_type, presence: true
    
    belongs_to :creator, 
    foreign_key: :creator_id, 
    class_name: :User

    has_many :event_registrations, 
    foreign_key: :event_id, 
    class_name: :EventRegistration 

    has_many :users, 
    through: :event_registrations

    has_many :event_likes, 
    foreign_key: :event_id, 
    class_name: :EventLike 

    has_many :liked_users, 
    through: :event_likes 

    has_one_attached :photo


end