class Todayworkout < ApplicationRecord
  belongs_to :user

  validates :activity, uniqueness: {scope: :user}
end
