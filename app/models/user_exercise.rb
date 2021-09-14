class UserExercise < ApplicationRecord
  belongs_to :exercise
  belongs_to :user

  validates :activity, uniqueness: {scope: :user}
end
