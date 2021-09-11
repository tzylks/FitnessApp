class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :weight
  has_many :user_exercises
end
