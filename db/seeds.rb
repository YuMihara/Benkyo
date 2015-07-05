# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# coding: utf-8
require "csv"

CSV.foreach('db/station_data150414.csv') do |row|
  Station.create(:station_name => row[0], :postal_code => row[1], :address => row[2], 
               :longitude => row[3], :latitude => row[4])
end