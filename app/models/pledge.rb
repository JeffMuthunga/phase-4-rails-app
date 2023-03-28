class Pledge < ApplicationRecord
    #validations
    validates :pledge_amount, presence: true, numericality: {greater_than: 0}

    #associations
    belongs_to :user
    belongs_to :campaign  
end
