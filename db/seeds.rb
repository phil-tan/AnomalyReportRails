# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'
require 'open-uri'
require 'csv'

puts "CLEANING DATABASE"
Site.destroy_all
Building.destroy_all
User.destroy_all
Chart.destroy_all

puts "CREATING DATA"

user_1 = User.create!(
  email: "lewagon@email.com",
  password: "password",
  password_confirmation: "password",
)

user_2 = User.create!(
  email: "bob@email.com",
  password: "password",
  password_confirmation: "password",
)

user_3 = User.create!(
  email: "phil@email.com",
  password: "password",
  password_confirmation: "password",
)

sites_table = CSV.parse(File.read("db/sites_seed.csv"), headers: true)

sites_table.each do |row|
  new_site = Site.create!(
    name: row["name"],
    short_name: row['short_name'],
    # image: row['image_url']
  )
  p "#{new_site.name} created!"
end
p Site.all

buildings_table = CSV.parse(File.read("db/buildings_seed.csv"), headers: true)

buildings_table.each do |row|
  new_building = Building.create!(
    name: row["name"],
    short_name: row['short_name'],
    # image: row['image_url'],
    site_id: Site.find_by(name: row['parent_site']).id
  )
  p new_building.name
end

c1 = Chart.create!(parent_id: 8, row: 1, parent_type: 'building', title: 'Chilled Water', points: "B75 Chemistry CHW")
c2 = Chart.create!(parent_id:8, row:2, parent_type:'building', title:'Steam', points:"B75 Chemistry STM")
c3 = Chart.create!(parent_id:2, row:3, parent_type:'building', title:'Chilled Water', points:'B47 Genomics CHW')
c4 = Chart.create!(parent_id:3, row:4, parent_type:'building', title:'Steam', points:'B161 Elipse Dorm STM')
c5 = Chart.create!(parent_id:4, row: 1, parent_type:'building', title:'Chilled Water', points:'B27 Computer Science CHW')
c6 = Chart.create!(parent_id:5, row: 1, parent_type:'building', title:'Steam', points:'B130 Jadwin Physics STM')


puts "SEED COMPLETE"
