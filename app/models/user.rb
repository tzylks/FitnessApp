class User < ApplicationRecord
    has_secure_password
    has_many :user_exercises 
    has_many :user_goals 
    has_many :todayworkouts
    

    validates :username, presence: true, uniqueness: true
    
end
