class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string :station_name, null: false
      t.string :postal_code 
      t.string :address
      t.decimal :longitude, null: false
      t.decimal :latitude, null: false
      t.timestamps null: false
    end
  end
end
