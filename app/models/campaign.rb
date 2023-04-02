class Campaign < ApplicationRecord
    #validations 
    validates :title, presence: true
    validates :description, presence: true
    validates :goal_amount, presence: true, numericality: {greater_than:0}
    validates :start_date, presence: true
    validates :image_url, presence: true
    validates :end_date, presence: true
    validates :category, presence: true

    #associations 
    has_many :reviews
    has_many :pledges 
    has_many :users, through: :pledges


    #custom methods

    def self.projects_funded
        self.count
        end
    
        def self.amount_raised
            sum(:current_amount)
        end
        
        def self.total_pledges_amount
            sum(:pledges.length)
        end
end
