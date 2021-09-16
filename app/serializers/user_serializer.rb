class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :weight, :name, :age, :height, :location, :profile_image
  has_many :user_exercises
  
end
