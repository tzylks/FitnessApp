# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_16_044016) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "activity"
    t.string "muscle_group"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

  create_table "todayworkouts", force: :cascade do |t|
    t.string "activity"
    t.string "muscle_group"
    t.string "reps"
    t.string "sets"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["user_id"], name: "index_todayworkouts_on_user_id"
  end

  create_table "user_exercises", force: :cascade do |t|
    t.bigint "exercise_id", null: false
    t.bigint "user_id", null: false
    t.string "activity"
    t.string "muscle_group"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sets"
    t.integer "reps"
    t.string "image"
    t.index ["exercise_id"], name: "index_user_exercises_on_exercise_id"
    t.index ["user_id"], name: "index_user_exercises_on_user_id"
  end

  create_table "user_goals", force: :cascade do |t|
    t.string "target_physique"
    t.integer "target_weight"
    t.integer "target_bmi"
    t.boolean "tone_sculpt", default: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_user_goals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest"
    t.string "username"
    t.integer "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "age"
    t.integer "height"
    t.string "location"
    t.string "name"
    t.string "profile_image"
  end

  add_foreign_key "todayworkouts", "users"
  add_foreign_key "user_exercises", "exercises"
  add_foreign_key "user_exercises", "users"
  add_foreign_key "user_goals", "users"
end
