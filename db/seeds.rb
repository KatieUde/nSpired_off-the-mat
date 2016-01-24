# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

## RAKE Tasks mini-breakdown
  # db:migrate runs (single) migrations that have not run yet.

  # db:create creates the database

  # db:drop deletes the database
  # db:schema:load creates tables and columns within the (existing) database following schema.rb

  # db:setup does db:create, db:schema:load, db:seed

  # db:reset does db:drop, db:setup
