Rails.application.routes.draw do
  resources :reviews
  resources :pledges
  
  resources :campaigns do
    resources :reviews

  end
  get "/user", to: "user#index"
  post "/signup", to: "user#create"  
  get "/loggedin", to: "user#loggedin"

  post "/login", to: "session#login"
  delete "/logout", to: "session#logout"
  get "/login", to: "session#login"


  get "/campaign", to: "campaigns#index"
  post "/campaign", to: "campaigns#create"


  
end
