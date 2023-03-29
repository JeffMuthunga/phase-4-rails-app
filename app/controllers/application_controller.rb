class ApplicationController < ActionController::API
    wrap_parameters format: []

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_message
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    private 
    def render_not_found_message
        render json: {error: "#{controller_name.classify} not found"}, status: :not_found
    end
end
