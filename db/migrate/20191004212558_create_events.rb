class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :creator_id, null: false 
      t.string :title, null: false 
      t.string :location, null: false
      t.string :description
      t.string :category, null: false
      t.string :event_type, null: false 
      t.integer :price
      t.integer :start_date
      t.integer :start_time
      t.integer :end_date 
      t.integer :end_time
      t.string :image_url
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :events, :creator_id
  end
end
