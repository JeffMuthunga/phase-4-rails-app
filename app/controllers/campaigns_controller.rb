class CampaignsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        render json: Campaign.all
    end

    def show 
        render json: find_campaign,include:["users","users.reviews"]
    end 

    def create
        campaign = Campaign.create!(campaign_params)
        if campaign.valid?
            render json: { "success": "saved successfully!"}
            render json: campaign, status: :created
        else
            render json: campaign.errors.messages
        end
    end 

    def update 
        campaign = find_campaign
        campaign.update!(campaign_params)
        render json: campaign, status: :ok
    end 

    def destroy
        campaign = find_campaign
        campaign.destroy
        head :no_content 
    end 

    private 

    def find_campaign
        Campaign.find_by(id: params[:id])
    end 

    def campaign_params
        params.permit(:title, :description, :category, :goal_amount, :start_date, :end_date, :user_id)
    end

end
