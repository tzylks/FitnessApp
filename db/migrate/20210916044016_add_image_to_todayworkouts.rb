class AddImageToTodayworkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :todayworkouts, :image, :string
  end
end
