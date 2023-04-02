class UserController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

   def index 
       users = User.all
       render json: users
   end

   def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: 201
        else
            rendor json: {errors: "User invalid"}, status: 422
        end
    end
   def show
     user = User.find(session[:user_id]) 
     if user
        render json: {loggedin: true, user: user}, status: :ok
     else
        render json: {loggedin: false, error: "User not found"}, status: 401
     end      
   end

   private

   def user_params
        params.permit(:email, :username, :password, :password_confirmation,)
   end

end