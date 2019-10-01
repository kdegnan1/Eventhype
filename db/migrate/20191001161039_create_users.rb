class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false 
      t.string :session_token, null: false 
      t.string :email, null: false, unique: true
      t.string :fname, null: false 
      t.string :lname, null: false 
      t.string :image_url
    end
  end
end
