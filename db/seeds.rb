# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Group.create(location: "boston", title: "cool gusy meet up", description: "only cool poeple allowed", game: "coolest game", start_date: "11/11/11", end_date: "11/11/12", donated_amount: 5)
Charity.create(name: "life",url: "www.life.com",description: "life")
Sponser.create(group_id:1, charity_id:1)
