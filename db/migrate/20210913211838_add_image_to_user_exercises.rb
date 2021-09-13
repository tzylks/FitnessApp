class AddImageToUserExercises < ActiveRecord::Migration[6.1]
  def change
    add_column :user_exercises, :image, :string
  end
end
