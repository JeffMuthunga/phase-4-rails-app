Rails.application.routes.draw do
  resources :reviews
  resources :pledges
  
  resources :campaigns do
    resources :reviews

  end
  resources :users
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"


  
end
