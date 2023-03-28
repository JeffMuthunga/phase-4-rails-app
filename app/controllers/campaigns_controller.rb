class CampaignsController < ApplicationController
    def index 
        render json: Campaign.all
    end

    def show 
        render json: find_campaign 
    end 

    def create
        campaign = Campaign.create!(campaign_params)
        render json: campaign, status: :created
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
end
