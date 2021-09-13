class CreateUserGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :user_goals do |t|
      t.string :target_physique
      t.integer :target_weight
      t.integer :target_bmi
      t.boolean :tone_sculpt, default: false 
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
