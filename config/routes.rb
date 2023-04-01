Rails.application.routes.draw do
  resources :reviews
  resources :pledges
  
  resources :campaigns do
    resources :reviews

  end


  get "/user", to: "user#index"
  post "/signup", to: "user#create"  
  get "/loggedin", to: "user#show"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/custom_methods", to: "campaigns#custom_methods"
  
end
