class ReviewsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    def index 
        @campaign = Campaign.find(params[:campaign_id])
        @reviews = @campaign.reviews
        render json: @reviews
    end

    def show 
        render json: find_review
    end 

    def create
        user = User.find(session[:user_id])
        review = user.reviews.create!(review_params)
        render json: review, status: :ok
    end 

    def update 
        review = find_review
        review.update!(review_params)
        render json: review, status: :ok
    end 

    def destroy
        review = find_review
        review.destroy
        head :no_content 
    end 

    private 

    def find_review
        # Review.find(params[:id])
        Review.find_by(id: params[:id])
    end 

    def review_params
        params.permit(:comment, :campaign_id, :rating)
    end
end
