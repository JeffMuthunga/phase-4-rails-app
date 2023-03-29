class Campaign < ApplicationRecord
    #validations 
    CATEGORIES = ['Education', 'IT', 'Hospitality', 'Farming', 'Advertising', 'Manufacturing', 'Healthcare', 'Legal']

    validates :title, presence: true
    validates :description, presence: true, length: {maximum: 500}
    validates :goal_amount, presence: true, numericality: {greater_than:0}
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :category, inclusion: {
    in: CATEGORIES,
    message: "must be one of: #{CATEGORIES.join(', ')}"
  } 
    #associations 
    belongs_to :user
    has_many :reviews, through: :user
    has_many :pledges 
end
