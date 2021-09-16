class Todayworkout < ApplicationRecord
  belongs_to :user

  validates :activity, uniqueness: {scope: :user}
  validates :activity, presence: true
end
