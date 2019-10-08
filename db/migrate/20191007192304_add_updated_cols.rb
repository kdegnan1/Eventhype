class AddUpdatedCols < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category 
    add_column :events, :category, :string
    change_column :events, :start_date, :string
    change_column :events, :start_time, :string
    change_column :events, :end_date, :string
    change_column :events, :end_time, :string
  end
end
