# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 
Event.destroy_all 

demouser = User.create!(email: 'katherine', password: 'password', fname: 'kat', lname:"degnan")
Katherine = User.create!(email: 'kat@gmail.com', password: 'password1', fname: 'katherine', lname: "degnan")
Sabrina = User.create!(email: 'sab@gmail.com', password: 'password2', fname: 'sabrina', lname: "degnan")
Sean = User.create!(email: 'sean@gmail.com', password: 'password3', fname: 'sean', lname: "gilroy")
Brian = User.create!(email: 'brian@gmail.com', password: 'password4', fname: 'brian', lname: "martinez")



def event1
    {
        creator_id: Katherine.id,
        title: "Dillon Francis", 
        location: "Great Hall - Avant Garder, Brooklyn NY", 
        description: "A man of many talents, Dillon Francis is best known for his work pioneering and popularizing moombahton, a hybrid of Dutch house and reggaeton. He's an entertainer at heart, recently expanding his horizons to include acting and video production, with a keen sense for the dance floor, always ready with the perfect track to keep the party going.", 
        event_type: "Concert", 
        price: "$39.99 - $59.99", 
        organizer: "Avant Gardner", 
        start_date: "Sat, Oct 12", 
        start_time: "10:00pm", 
        end_date: "Sun, Oct 13", 
        end_time: "04:00am", 
    }
end

Rave = Event.create!(event1()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "Dillon.jpg")) , filename: 'Dillon.jpg')
# file = EzDownload.open('https://eventhype-dev.s3.us-east-2.amazonaws.com/Dillon.jpg')
# Rave.photo.attach(io: file, filename: 'Dillon.jpg')
# 


def event2
    {
        creator_id: Sabrina.id,
        title: "Rooftop Party", 
        location: "Sky Room, New York NY", 
        description: "Doors open at 10pm
FOR BOTTLE SERVICE, B'DAY PARTY OR ANY EVENTS email US events@bestnycnightlife.com
21 and over with proper ID /FINAL ENTRENCE IS UPTO THE DOORMAN Discretion
LADIES FREE / GENTS FREE B4 11:00PM $20 after ONLY ON BESTNYCNIGHTLIFE LIST
Must Show ticket or say BESTNYCNIGHTLIFE LIST TO GET IN
STRICT DRESS CODE POLICY: -Gentlemen: Shoes, Button down shirts, and jeans are acceptable. No baggy attire, Sneakers, Boots, or Hats are allowed. -Ladies: Heels & classy ", 
        event_type: "Nightlife", 
        price: "Free", 
        organizer: "ICLUBNYC", 
        start_date: "Sat, Oct 22", 
        start_time: "10:00pm", 
        end_date: "Sun, Oct 23", 
        end_time: "04:00am", 

    }
end  

Rooftop = Event.create!(event2()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "rooftop.jpg")) , filename: 'rooftop.jpg')


def event3 
    {
        creator_id: Sean.id,
        title: "OktoberFest NYC", 
        location: "Watermark, New York NY", 
        description: "We are excited to bring an extended Oktoberfest celebration to New York City!
Authentic German beer will be flowing, complimented by traditional Oktoberfest food and fun for the entire family.
There are lots of reasons to love Oktoberfest… the lederhosen, the beer, the pretzels, the stein holding contests…
If you’re not traveling to Munich this year, experience Oktoberfest in New York!
Over 6 weekends, you can experience everything that makes Oktoberfest great – authentic German beer, brats and giant pretzels, Oktoberfest decorations and fun games for the entire family.
And be sure to start your workout now for our epic stein holding contests.
Enjoy the festivities at our 3,500 square foot venue which features amazing views of the Brooklyn and Williamsburg bridges and Brooklyn skyline.", 
        event_type: "Festival", 
        price: "Free", 
        organizer: "PARTYPPL", 
        start_date: "Sat, Oct 12", 
        start_time: "12:00pm", 
        end_date: "Sun, Oct 13", 
        end_time: "12:00am", 

    }
end  

Oktober = Event.create!(event3()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "oktoberfest.jpg")) , filename: 'oktoberfest.jpg')


def event4 
    {
        creator_id: Brian.id,
        title: "Artisinal Sweet Treats Baazar", 
        location: "Grand Baazar NYC, New York NY", 
        description: "For national Dessert Month come discover the City's best artisanal sweet-makers, all in one place! You’ll find everything from experimental donuts, handmade macaroons, creatively flavored peanut-butter cups, small-batch fudge with unique flavors, freshly baked cookies and cupcakes, and the most mouthwatering truffles and chocolates you've ever had. Everything will be to die for!", 
        event_type: "Food", 
        price: "Free", 
        organizer: "Grand Baazar NYC", 
        start_date: "Fri, Oct 20", 
        start_time: "01:00pm", 
        end_date: "Fri, Oct 20", 
        end_time: "06:00pm", 

    }
end  

Sweets = Event.create!(event4()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "sweets.jpg")) , filename: 'sweets.jpg')



def event5 
    {
        creator_id: Katherine.id,
        title: "Above & Beyond NYE 2020", 
        location: "New York Expo Center, The Bronx NY", 
        description: "There is no place on the planet as exciting to spend NYE as New York City. On Tuesday, December 31, titans of the electronic music genre ABOVE & BEYOND will ring in 2020 with a special headline show at an incredible cavernous location in the Bronx--the 60,000 sq foot New York Expo Center.

Presented by Above & Beyond’s most trusted label for quality music Anjunabeats and New York nightlife impresario DEG Presents (formerly RPM Presents), Jono, Tony and Paavo return to one of their favorite cities for the biggest party of the year.

Above & Beyond have crystallized something that lay at the heart of everything they’ve achieved over their 17 years together. From developing that groundbreaking radio show to touring the world’s best clubs and most illustrious venues; from establishing a thriving, multi-artist label to building a peerless catalogue of artist albums; from creating iconic dance anthems to curating soulful acoustic rerubs, one thing stands out. That is: Above & Beyond have carved out a unique space in music and culture, one that reaches far beyond their electronic roots. In so doing, Jono, Paavo and Tony have created something special: a common ground where all sorts of people and ideas can come together. Celebration, kinship, community – it’s the A&B way.

More information:

www.bigweeknyc.com

VIP INQUIRES PLEASE EMAIL VIP@DEGPRESENTS.COM

NO REFUNDS - Event is rain or shine", 
        event_type: "Concert", 
        price: "$79 - $169", 
        organizer: "DEG Presents", 
        start_date: "Tue, Dec 31st", 
        start_time: "09:00pm", 
        end_date: "Wed, Jan 1st", 
        end_time: "04:00am", 

    }
end  

Above = Event.create!(event5()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "Above.jpg")) , filename: 'Above.jpg')


def event6 
    {
        creator_id: Brian.id,
        title: "Wölffer Estate Annual Harvest Party 2019", 
        location: "Wölffer Estate Vineyard, Long Island NY", 
        description: "Join us for a joyous afternoon celebrating our annual grape harvest, taking place on Saturday, October 12, 2019, from 12:00pm - 4:30pm on the expansive lawn at the Estate. Laugh and play with family and friends as we celebrate the hard work of Harvest season while enjoying the untouched beauty of our Sagaponack vineyard in October.

Dance with us to live music, enjoy a bountiful and refreshed menu with dishes by Palo Santo, Rolling in the Dough, and Fresh Flavors, sip Wölffer wines and ciders, partake in barrel-rolling, grape-stomping, a wine-making relay race, pony rides, a petting zoo, hay rides, and more! We are adding more games and activities for both kids and adults this year -- it's fun for the whole family!

Again this year, we've partnered Lyft to encourage responsible transportation choices pre- and post-event! New users can download the Lyft app and use code WOLFFER for $5 off thier first four rides while existing users can unlock 25% off their ride to and from the event by using code WOLFFER2019.", 
        event_type: "Food", 
        price: "$0 - $154", 
        organizer: "Wölffer Estate Vineyard", 
        start_date: "Sat, Oct 12", 
        start_time: "12:00pm", 
        end_date: "Sat, Oct 12", 
        end_time: "04:00pm", 

    }
end  

Wine = Event.create!(event6()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "wolfer.jpg")) , filename: 'wolfer.jpg')


def event7 
    {
        creator_id: Sean.id,
        title: "HALLOWEEN MASSACRE - A BKLYN HALLOWEEN PARTY", 
        location: "Brooklyn Baazar, Brooklyn NY", 
        description: "One Party...
Three Rooms of Music...

HALLOWEEN MASSACRE
Friday October 25 at Brooklyn Bazaar. 10pm. 18+.

The Black Parade (In the laboratory)
Emo & Pop Punk w/DJs Jet, Swabby & Nekosiren

Nevermind (in the crypt)
'90s Alt w/DJs Annabel Evil, Kitty, Amazon A

Feel Good (in the dungeon)
Indie Electronic w/DJs Flying Horse & Alex English

Halloween Costume Contest with Cash Prizes
Halloween Decorations, Candy, Giveaways & More

Very limited amount of earlybird tickets available", 
        event_type: "Concert", 
        price: "$8 - $20", 
        organizer: "VampireFreaks", 
        start_date: "Fri, Oct 25", 
        start_time: "10:00pm", 
        end_date: "Sat, Oct 26", 
        end_time: "04:00am", 

    }
end  

Halloween = Event.create!(event7()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "halloween.jpg")) , filename: 'halloween.jpg')


def event8 
    {
        creator_id: Sabrina.id,
        title: "Alison Wonderland - Wonderland Warehouse Project", 
        location: "Great Hall - Avant Gardner, Brooklyn NY", 
        description: "After taking the Electric Zoo mainstage to a spiritual level on its final night this past Labor Day Weekend, Alison Wonderland officially returns this winter for her 'Wonderland Warehouse Project' on December 7th at Avant Gardner.", 
        event_type: "Concert", 
        price: "$29 – $79", 
        organizer: "Avant Gardner", 
        start_date: "Sat, Dec 7", 
        start_time: "10:00pm", 
        end_date: "Sun, Dec 8th", 
        end_time: "04:00am", 

    }
end  

Alice = Event.create!(event8()).photo.attach(io: File.open(Rails.root.join("app", "assets", "images", "Alice.jpg")) , filename: 'Alice.jpg')


# def event9 
#     {
#         title: "", 
#         location: "", 
#         description: "", 
#         event_type: "", 
#         price: "", 
#         organizer: "", 
#         start_date: "", 
#         start_time: "", 
#         end_date: "", 
#         end_time: "", 

#     }
# end  



