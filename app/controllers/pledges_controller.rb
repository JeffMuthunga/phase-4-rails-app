class PledgesController < ApplicationController
    def index 
        render json: Pledge.all
    end
end
