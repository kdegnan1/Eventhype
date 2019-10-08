class AddUpdated < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :price, :string
  end
end
