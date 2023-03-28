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
end
