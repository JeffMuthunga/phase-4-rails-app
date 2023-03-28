class CampaignsController < ApplicationController
    def index 
        render json: Campaign.all
    end

    def show 
        render json: find_campaign 
    end 
end
