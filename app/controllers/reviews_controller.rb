class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        render json: Review.all
    end

    def show 
        render json: find_review
    end 

    def create
        review = Review.create!(review_params)

        if review.valid?
            render json: { "success": "saved successfully!"}
            render json: review, status: :created
        else
            render json: review.errors.messages
        end
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
        params.permit(:comment, :user_id, :campaign_id, :rating)
    end
end
