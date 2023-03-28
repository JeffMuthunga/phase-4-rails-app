class PledgesController < ApplicationController
    def index 
        render json: Pledge.all
    end

    def show 
        render json: find_pledge
    end 
end
