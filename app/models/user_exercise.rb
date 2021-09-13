class UserExercise < ApplicationRecord
  belongs_to :exercise
  belongs_to :user

  validates :name, uniqueness: true
end
