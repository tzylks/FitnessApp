class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :activity, :muscle_group
  has_one :exercise
  has_one :user
end
