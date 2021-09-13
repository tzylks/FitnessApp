class UserExercise < ApplicationRecord
  belongs_to :exercise
  belongs_to :user

  validates :id, uniqueness: true
end
