class TodayworkoutSerializer < ActiveModel::Serializer
  attributes :id, :activity, :muscle_group, :reps, :sets
  has_one :user
end
