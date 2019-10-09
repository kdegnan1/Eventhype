# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Event.destroy_all 

demouser = User.create!(email: 'katherine', password: 'password', fname: 'kat', lname:"degnan")

def event 
    {
        title: "Dillon Francis", 
        location: "Great Hall - Avant Garder", 
        description: "A man of many talents, Dillon Francis is best known for his work pioneering and popularizing moombahton, a hybrid of Dutch house and reggaeton. He's an entertainer at heart, recently expanding his horizons to include acting and video production, with a keen sense for the dance floor, always ready with the perfect track to keep the party going.", 
        event_type: "Concert", 
        price: "$39.99 - $59.99", 
        organizer: "Avant Gardner", 
        start_date: "10/12/2019", 
        start_time: "10:00pm", 
        end_date: "10/13/2019", 
        end_time: "04:00am", 
    }
end

def event 
    {
        title: "", 
        location: "", 
        description: "", 
        event_type: "Concert", 
        price: "$39.99 - $59.99", 
        organizer: "Avant Gardner", 
        start_date: "10/12/2019", 
        start_time: "10:00pm", 
        end_date: "10/13/2019", 
        end_time: "04:00am", 

    }
end  

Rave = Event.create!()

