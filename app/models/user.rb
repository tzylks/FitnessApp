class User < ApplicationRecord
    has_secure_password
    has_many :user_exercises 
    has_one :user_goals 

    validates :username, presence: true, uniqueness: true
    
end
