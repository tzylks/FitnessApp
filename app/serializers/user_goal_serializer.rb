class UserGoalSerializer < ActiveModel::Serializer
  attributes :id, :target_physique, :target_weight, :target_bmi, :tone_sculpt
  has_one :user
end
