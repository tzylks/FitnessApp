class AddImageToExercise < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :image, :string
  end
end
