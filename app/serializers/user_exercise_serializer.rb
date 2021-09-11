class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :activity, :muscle_group, :user_id, :exercise_id
  # has_one :exercise
  # has_one :user

end
