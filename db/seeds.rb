# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# coding: utf-8
Station.create(:station_name => '函館', :postal_code => '040-0063', :address => '北海道函館市若松町１２-１３', 
               :longitude => '140.726413', :latitude => '41.773709')
