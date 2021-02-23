class Food < ApplicationRecord
  belongs_to :restaurant
  belongs_to :order, optional: true #nillを許可する
  has_one :line_food
end
