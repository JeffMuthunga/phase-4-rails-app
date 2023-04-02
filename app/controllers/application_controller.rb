class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_error



# private functions
private
def render_not_found_error
    render json: {error: "#{controller_name.classify} not found"}, status: 404
end

def render_invalid_error invalid
    render json: {errors: invalid.record.errors.full_messages}, status: 422
end
def authorize
    @current_user = User.find_by(id: session[:user_id] )  
    render json: {error: ["Not authorized"]}, status: :unauthorized unless @current_user
end
end
