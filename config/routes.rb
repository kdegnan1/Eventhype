Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :show] 
    resource :session, only: [:create, :destroy]

    get '/users/find_user', to: 'users#find_user'
    
    resources :events, except: [:new] do 
      resources :event_registrations, only: [:create]
    end
    
    delete '/events/:event_id/event_registrations', to: 'event_registrations#destroy' 

  end

end
