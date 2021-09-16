# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.create(username: 'JohnDoe', password: 'password')

    Exercise.create(activity: "Bicep Curl", muscle_group: "Biceps", image:"https://64.media.tumblr.com/aba64c68d9d27592539dfcc01007ca79/8eb008d6cb133a9c-03/s500x750/836a3df45af0fe3389a918be33b94c94707ecbb4.gifv")
    Exercise.create(activity: "Lat Pull", muscle_group: "Latisssimus Dorsis", image:"https://media.giphy.com/media/X8Qvc37RKFtvBGQ4gC/giphy.gif?cid=790b76116990145132bd51a98a244b3cd2eed9283bda7b29&rid=giphy.gif&ct=g")
    Exercise.create(activity: "Lateral Raise", muscle_group: "Delts", image:"https://media.giphy.com/media/CdVoi9ZRijuxnawKeE/giphy.gif?cid=790b76119b3a0c4dc6e3d87b4a6ce1e9bc8df54a3433576d&rid=giphy.gif&ct=g")
    Exercise.create(activity: "Bent-Over Rows", muscle_group: "Latisssimus Dorsis", image:"https://c.tenor.com/42OiXMfRRM8AAAAC/pumping-iron-arnold-schwarzenegger.gif")
    Exercise.create(activity: "Tai Chi", muscle_group: "Cardio", image:"https://media3.giphy.com/media/v22JfwLFi6nNS/giphy.gif?cid=ecf05e472ywbmgqudip6l9k34rzyjr5tf35nbqy68mfs8uoc&rid=giphy.gif&ct=g")
    Exercise.create(activity: "Bench Press", muscle_group: "Upper Pectoral", image:"https://c.tenor.com/rYk8LxogeKQAAAAC/pumping-iron-arnold-schwarzenegger.gif")
    Exercise.create(activity: "Squats", muscle_group: "Thigh", image:"https://c.tenor.com/S_DL1I17n1sAAAAC/pumping-iron-arnold-schwarzenegger.gif")
    Exercise.create(activity: "Deadlift", muscle_group: "Thigh", image:"https://64.media.tumblr.com/6e7a25f2ece55f40381cff2f7e858ae4/95974f2bd5853729-f8/s500x750/ba4755bc4862393287594aa478936a2e8474fe48.gifv")
    Exercise.create(activity: "Shoulder Press", muscle_group: "Delts", image:"https://media.giphy.com/media/xIcHeirtPlp15mPtyY/giphy.gif?cid=790b7611ae92bc2e5e2048f6a9896b7194fe80ed1561ca18&rid=giphy.gif&ct=g")
    Exercise.create(activity: "Jump Rope", muscle_group: "Cardio", image:"https://media.giphy.com/media/d2ZfqZY5eSCR0rza/giphy.gif?cid=ecf05e47pwv1kwowotb8a29ezp1syvjesrc76qtenbl8zynz&rid=giphy.gif&ct=g")
    Exercise.create(activity: "Leg Raises", muscle_group: "Core", image:"https://i.gifer.com/V1J4.gif")
    Exercise.create(activity: "Pistol Squat", muscle_group: "Thigh", image:"https://media2.giphy.com/media/AxVvjW2yFcA8yjmdiM/giphy.gif?cid=ecf05e47dui87mxah7fdgdp2gr7ampoxsf4ohn485hyeq07n&rid=giphy.gif&ct=g")

    

    # Exercise.create(activity: "Russian Twist", muscle_group: "Abdominal", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
    # Exercise.create(activity: "Flutter-Kick", muscle_group: "Abdominal", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
    # Exercise.create(activity: "Turkish Get-up", muscle_group: "WHOLE GOD DAMN BODY", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
    # Exercise.create(activity: "Calf-raise", muscle_group: "Calf", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
    # Exercise.create(activity: "Kickback", muscle_group: "Glutes", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
    # Exercise.create(activity: "Sumo Squat", muscle_group: "Thigh", image:"https://st3.depositphotos.com/1005676/32910/i/1600/depositphotos_329104634-stock-photo-human-body-anatomy-of-a.jpg")
   
    puts "Seeded ya bitch"

