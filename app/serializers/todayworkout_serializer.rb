class TodayworkoutSerializer < ActiveModel::Serializer
  attributes :id, :activity, :muscle_group, :reps, :sets, :image
  has_one :user
end
