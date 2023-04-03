class CampaignsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :destroy, :show]

    def index 
        render json: Campaign.all
    end

    def show 
        render json: find_campaign,include:["users","users.reviews"]
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
    
    def custom_methods
        
        @projects_funded = Campaign.projects_funded
        @total_goal_amount = Campaign.amount_raised
        @total_pledges_amount = Campaign.total_pledges_amount

        render json: {
          projects_funded: @projects_funded,
          total_goal_amount: @total_goal_amount,
          total_pledges_amount: @total_pledges_amount
        }
      end


    private 

    def find_campaign
        Campaign.find_by(id: params[:id])
    end 

    def campaign_params
        params.permit(:title, :description, :category, :image_url, :current_amount, :goal_amount, :start_date, :end_date)
    end

end
