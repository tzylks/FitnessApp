class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :activity
      t.string :muscle_group

      t.timestamps
    end
  end
end
