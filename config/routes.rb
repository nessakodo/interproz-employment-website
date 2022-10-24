Rails.application.routes.draw do
  resources :candidates
  resources :jobs
  resources :interviews
  resources :sessions

   # Authenication Routes
   post '/signup', to: 'candidates#create'
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"
   get "/logged_in", to: "sessions#logged_in"


     # route to test your configuration
  get '/hello', to: 'application#hello_world'
 
end
