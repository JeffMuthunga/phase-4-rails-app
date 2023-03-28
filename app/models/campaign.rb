class Campaign < ApplicationRecord
    #added associations 

    belongs_to :user
    has_many :reviews, through: :user
    has_many :pledges 
end
