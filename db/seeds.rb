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
    site_id: Site.find_by(short_name: row['parent_site']).id
  )
  ChartRow.create!(parent_type: 'building', parent_id: new_building.id, height: '20vh', row_number: 1)
  ChartRow.create!(parent_type: 'building', parent_id: new_building.id, height: '40vh', row_number: 2)
  ChartRow.create!(parent_type: 'building', parent_id: new_building.id, height: '40vh', row_number: 3)
  ChartRow.create!(parent_type: 'building', parent_id: new_building.id, height: '40vh', row_number: 4)
  ChartRow.create!(parent_type: 'building', parent_id: new_building.id, height: '40vh', row_number: 5)
  p new_building.name
end

charts_table = CSV.parse(File.read("db/charts_seed.csv"), headers: true)

charts_table.each do |row|
  new_chart = Chart.create!(
    parent_id: Building.find_by(short_name: row['short_name']).id,
    parent_type: 'building',
    title: row["title"],
    points: row['points'],
    row: row['row'],
    width: row['width'],
    position: row['position'],
    plot_type: row['plot_type'],
    plot_options: row['plot_options']
  )
  p new_chart.title
end

puts "SEED COMPLETE"
