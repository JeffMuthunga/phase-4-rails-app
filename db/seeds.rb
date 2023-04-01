
require 'faker'

images = [
"https://images.pexels.com/photos/36785/soldier-military-uniform-american.jpg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/6995244/pexels-photo-6995244.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/13995877/pexels-photo-13995877.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/6590915/pexels-photo-6590915.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/87772/soldiers-military-usa-weapons-87772.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/4427545/pexels-photo-4427545.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/7731402/pexels-photo-7731402.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/9987798/pexels-photo-9987798.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/5493208/pexels-photo-5493208.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/9451386/pexels-photo-9451386.jpeg?auto=compress&cs=tinysrgb&w=1600",
"https://images.pexels.com/photos/7345449/pexels-photo-7345449.jpeg?auto=compress&cs=tinysrgb&w=1600"
]

category = ["Global Warming/Environment", "Animals", "Education", "Health", "Musicians/Artists", "Small Business"]
puts "seeding..................."

# Create 10 users
10.times do
    User.create(
        username: Faker::Internet.unique.username,
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password(min_length: 8)
    )
  end
  
  # Create 10 campaigns
10.times do
    Campaign.create(
        title: Faker::Lorem.sentence(word_count: 3),
        description: "In the past, mainstream media has often played into several stereotypes when portraying South Asian characters and culture. Hungama strives to dismantle decades of these storylines and celebrate South Asian culture, while also finding a bridge between a cultural and Western identity.",
        category: category.sample,
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        image_url: images.sample,
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now),
    )
  end




# Create 10 reviews
10.times do
    Review.create(
    comment: Faker::Lorem.sentence(word_count: 10),
    user_id: Faker::Number.between(from: 1, to: 10),
    campaign_id: Faker::Number.between(from: 1, to: 10),
    rating: Faker::Number.between(from: 1, to: 5)
    )
end


# Create 10 pledges
10.times do
  Pledge.create(
    pledge_amount: Faker::Number.decimal(l_digits: 4, r_digits: 2),
    user_id: Faker::Number.between(from: 1, to: 10),
    campaign_id: Faker::Number.between(from: 1, to: 10)
  )
end


puts "Done seeding..................."

