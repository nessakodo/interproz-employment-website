Rails.application.routes.draw do
  resources :candidates
  resources :jobs
  resources :interviews
  resources :sessions, only: [:create]
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

end
