class Removetables < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category
    remove_column :events, :image_url
  end
end
