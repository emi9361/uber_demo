3.times do |n|
  restaurant = Restaurant.new(
    name: "testレストラン_＃{n}",
    fee: 100,
    time_required: 10,
  )
end

  12.times do |m|

    # buildを使うと既存のrestaurantと紐付けされているfoodから紐付けされる
    restaurant.foods.build(
      name: "フード名_#{m}",
      price: 500,
      description: "フード_#{m}の説明文です。"
    )

    restaurant.save!
  end
