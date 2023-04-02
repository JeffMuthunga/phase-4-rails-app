class User < ActiveRecord::Base
    has_many :questions
    has_secure_password
    has_many :reviews
    has_many :pledges

    validates :username, presence: true,length: { minimum: 4 },  uniqueness: true
    validates :email, presence: true,  uniqueness: true
    # validates_format_of :password, with: /\A(?=.*[A-Z])(?=.*\d).{8,}\z/, message: "must be at least 8 characters long and include one uppercase letter and one digit"
    # validates :password_confirmation, presence: true
end