json.extract! user, :email, :id, :fname, :lname 
json.registered user.registered_event_ids
# json.liked user.liked_events_ids 
# json.liked user.liked_event_ids 