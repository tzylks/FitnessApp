class CreateUserExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :user_exercises do |t|
      t.belongs_to :exercise, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :activity
      t.string :muscle_group

      t.timestamps
    end
  end
end
