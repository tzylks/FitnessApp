class CreateTodayworkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :todayworkouts do |t|
      t.string :activity
      t.string :muscle_group
      t.string :reps
      t.string :sets
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
