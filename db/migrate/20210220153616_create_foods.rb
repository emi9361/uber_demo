class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.references :restaurant, null: false, foreign_key: true   # foreign_key: true　= Foods:line_foodsが1:1となっているのをrestaurant.idでまとめる
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
