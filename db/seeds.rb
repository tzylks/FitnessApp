# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.create(username: 'JohnDoe', password: 'password')

    Exercise.create(activity: "Bicep Curl", muscle_group: "Biceps")
    Exercise.create(activity: "Hammer Curl", muscle_group: "Biceps")
    Exercise.create(activity: "Lat Pull", muscle_group: "Latisssimus Dorsis")
    Exercise.create(activity: "Crunches", muscle_group: "Abdominal")
    Exercise.create(activity: "Planks", muscle_group: "Abdominal")
    Exercise.create(activity: "Bent-Over Rows", muscle_group: "Latisssimus Dorsis")
    Exercise.create(activity: "Squats", muscle_group: "Thigh")
    Exercise.create(activity: "Deadlift", muscle_group: "Thigh")
    Exercise.create(activity: "Incline Bench Press", muscle_group: "Upper Pectoral")
    Exercise.create(activity: "Decline Bench Press", muscle_group: "Lower Pectoral")
    Exercise.create(activity: "Tricep Extention", muscle_group: "Triceps")
    Exercise.create(activity: "Tricep Pulldowns", muscle_group: "Triceps")
    Exercise.create(activity: "Russian Twist", muscle_group: "Abdominal")
    Exercise.create(activity: "Flutter-Kick", muscle_group: "Abdominal")
    Exercise.create(activity: "Shoulder Press", muscle_group: "Delts")
    Exercise.create(activity: "Turkish Get-up", muscle_group: "WHOLE GOD DAMN BODY")
    Exercise.create(activity: "Calf-raise", muscle_group: "Calf")
    Exercise.create(activity: "Kickback", muscle_group: "Glutes")
    Exercise.create(activity: "Sumo Squat", muscle_group: "Thigh")
    Exercise.create(activity: "Pistol Squat", muscle_group: "Thigh")
    puts "Seeded ya bitch"

