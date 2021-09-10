class UserSerializer < ActiveModel::Serializer
  attributes :id, :password_digest, :username, :weight
end
