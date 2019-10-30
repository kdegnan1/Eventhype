class Addtypetocolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :start_date, :string
    add_column :events, :start_date, :date
    remove_column :events, :end_date, :string
    add_column :events, :end_date, :date
    remove_column :events, :start_time, :string
    add_column :events, :start_time, :time
    remove_column :events, :end_time, :string
    add_column :events, :end_time, :time
  end
end
