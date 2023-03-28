class PledgesController < ApplicationController
    def index 
        render json: Pledge.all
    end

    def show 
        render json: find_pledge
    end 

    def create
        pledge = Pledge.create!(pledge_params )
        render json: pledge, status: :created
    end 
end
