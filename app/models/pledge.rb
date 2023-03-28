class Pledge < ApplicationRecord
    #associations
    belongs_to :user
    belongs_to :campaign  
end
