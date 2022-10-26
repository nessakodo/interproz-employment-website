Rails.application.routes.draw do
  resources :candidates
  resources :jobs
  resources :interviews
  resources :sessions
  resources :profile_photos
  resources :applied_jobs

   # Authenication Routes
   post '/signup', to: 'candidates#create'
   post "/login", to: "sessions#create"
   delete "/logout", to: "sessions#destroy"
   get "/logged_in", to: "sessions#logged_in"

  # Post image 
  post '/profile_photos', to: 'profile_photos#create'

  # Candidate photo fetch
  get "current_candidate_photos", to: "profile_photos#current_candidate_photos"

  # Remove application route
  delete "/remove", to: "jobs#remove"


end
