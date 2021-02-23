class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.references :food, null: false, foreign_key: true # foreign_key: true　= Foods:line_foodsが1:1となっているのをrestaurant.idでまとめる
      t.references :restaurant, null: false, foreign_key: true  # foreign_key: true　= Foods:line_foodsが1:1となっているのをrestaurant.idでまとめる
      t.references :order, foreign_key: true # foreign_key: true　= Foods:line_foodsが1:1となっているのをrestaurant.idでまとめる
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
