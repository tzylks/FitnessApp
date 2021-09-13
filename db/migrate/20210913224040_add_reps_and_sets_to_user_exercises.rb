class AddRepsAndSetsToUserExercises < ActiveRecord::Migration[6.1]
  def change
    add_column :user_exercises, :sets, :integer
    add_column :user_exercises, :reps, :integer
  end
end
