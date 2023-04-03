require 'faker'

puts "seeding..................."

# Create 10 users
30.times do
    User.create(
        username: Faker::Internet.unique.username,
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password(min_length: 8)
    )
  end
  
  # Create campaigns
  Campaign.create([ 
    {
      "title": "Renewable Energy for a Better Future",
      "description": "Help us promote the transition to renewable energy with this crowdfunding project. We plan to support renewable energy research and development, advocate for policies that promote renewable energy, and raise awareness about the benefits of clean energy. Your contribution can help promote a cleaner, healthier, and more sustainable future for all.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Clean Water for Communities in Need",
      "description": "This crowdfunding project seeks to provide clean and safe drinking water to communities in need. We plan to install water filtration systems in remote and underserved areas, providing access to clean water and improving health outcomes. Join us in our mission to make a difference.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Urban Greening for Healthier Cities",
      "description": "Our project is aimed at increasing green spaces in urban areas to improve air quality, reduce urban heat islands, and promote mental health and wellbeing. Your support will help us plant trees, shrubs, and other greenery in public spaces, parks, and community gardens in urban areas.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.pexels.com/photos/4946711/pexels-photo-4946711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Planting Trees for a Greener Future",
      "description": "Help us plant more trees and combat deforestation with this crowdfunding project. We aim to plant thousands of trees in areas devastated by wildfires, logging, and other environmental factors. Your contribution can make a significant impact in restoring our planet's ecosystems.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Building Sustainable Housing for Low-Income Families",
      "description": "This crowdfunding project seeks to build sustainable and affordable housing for low-income families. Our design includes eco-friendly materials and renewable energy sources to reduce carbon footprint and promote energy efficiency. With your help, we can provide safe and healthy homes for those in need.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Recycling Plastic Waste into Useful Products",
      "description": "Join us in our mission to reduce plastic waste and pollution with this crowdfunding project. We plan to collect plastic waste and turn them into useful products, such as furniture, toys, and building materials. Let's turn trash into treasure and make a positive impact on the environment.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.pexels.com/photos/4941852/pexels-photo-4941852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Plastic-Free Oceans",
      "description": "Our project is focused on reducing plastic waste in our oceans. We are working with local communities to raise awareness about the negative impact of plastic on marine life and ecosystems. Your contribution will help us organize beach cleanups, provide education about sustainable alternatives to plastic, and advocate for policies that reduce plastic pollution.",
      "category": "Global Warming/Environment",
      "image_url": "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Rescue and Rehabilitation for Stray Animals",
      "description": "Our project is aimed at providing rescue and rehabilitation services to stray animals, including dogs, cats, and other domestic animals. We are working with local animal shelters and rescue organizations to provide food, shelter, and medical care to these animals. Your support will help us rescue and rehabilitate more animals in need.",
      "category": "Animals",
      "image_url": "https://plus.unsplash.com/premium_photo-1663127442778-3b635cc838d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Protecting Endangered Species",
      "description": "This crowdfunding project supports the rescue and rehabilitation of endangered wildlife species. We aim to provide medical care, food, and shelter to animals that have been injured or orphaned. Your contribution can help us give these animals a second chance at life.",
      "category": "Animals",
      "image_url": "https://images.pexels.com/photos/584181/pexels-photo-584181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Protecting Marine Life and Oceans",
      "description": "THelp us protect marine life and oceans with this crowdfunding project. We plan to raise awareness and fund initiatives that address issues such as overfishing, pollution, and climate change. Let's work together to preserve our oceans and the creatures that call it home.",
      "category": "Animals",
      "image_url": "https://images.pexels.com/photos/5967799/pexels-photo-5967799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Animal Sanctuaries",
      "description": "Help us support animal sanctuaries with this crowdfunding project. We plan to provide resources for animal care, support education programs, and raise awareness of the importance of ethical and compassionate treatment of animals. Your contribution can make a difference in the lives of animals in captivity and give them the care they need.",
      "image_url": "https://images.pexels.com/photos/4329917/pexels-photo-4329917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Empowering Girls Through Education",
      "description": "This crowdfunding project aims to empower girls in underserved communities through education. We plan to provide scholarships, mentorship, and resources to help girls achieve their full potential. With your support, we can break the cycle of poverty and give girls the tools to succeed.",
      "category": "Education",
      "image_url": "https://images.pexels.com/photos/14071907/pexels-photo-14071907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting STEM Education for Kids",
      "description": "Join us in our mission to support STEM education for kids with this crowdfunding project. We plan to provide hands-on learning experiences, workshops, and resources to encourage kids to pursue careers in science, technology, engineering, and mathematics. Let's inspire the next generation of innovators.",
      "category": "Education",
      "image_url": "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Building Libraries for Underserved Communities",
      "description": "Help us improve literacy rates and access to education with this crowdfunding project. We plan to build libraries in underserved communities, providing access to books, resources, and learning opportunities. Your contribution can make a difference in the lives of countless children and families.",
      "category": "Education",
      "image_url": "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Providing Education for Children with Disabilities",
      "description": "This crowdfunding project seeks to provide education and support for children with disabilities. We plan to build schools, hire specialized teachers, and provide resources to help children with disabilities reach their full potential. Join us in our mission to create a more inclusive and equitable world.",
      "category": "Education",
      "image_url": "https://plus.unsplash.com/premium_photo-1663099231979-8783a39dfad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Education in Refugee Camps",
      "description": "Join us in our mission to provide education and hope for refugees with this crowdfunding project. We plan to build schools, provide resources, and support teacher training programs in refugee camps. Your contribution can make a difference in the lives of those who have been displaced by conflict and violence.",
      "category": "Education",
      "image_url": "https://images.pexels.com/photos/4959227/pexels-photo-4959227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Mental Health Support for All",
      "description": "Join us in our mission to provide mental health support for all with this crowdfunding project. We plan to support mental health clinics, provide resources for therapy and counseling, and raise awareness of the importance of mental health. Your contribution can make a difference in the lives of those struggling with mental health issues.",
      "category": "Health",
      "image_url": "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Accessible Healthcare for Underserved Communities",
      "description": "Help us provide accessible healthcare for underserved communities with this crowdfunding project. We plan to build clinics, provide medical care, and support education and outreach programs to ensure that everyone has access to quality healthcare. Your contribution can make a difference in the lives of those who need it most.",
      "category": "Health",
      "image_url": "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Fighting Childhood Cancer",
      "description": "This crowdfunding project seeks to fight childhood cancer by supporting research efforts, providing resources for medical care, and supporting families affected by childhood cancer. Join us in our mission to create a world where no child has to suffer from cancer.",
      "category": "Health",
      "image_url": "https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Addiction Recovery",
      "description": "Join us in our mission to support addiction recovery with this crowdfunding project. We plan to provide resources for treatment, support group programs, and raise awareness of the importance of addiction recovery. Your contribution can make a difference in the lives of those struggling with addiction.",
      "category": "Health",
      "image_url": "https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Local Farmers",
      "description": "Help us support local farmers with this crowdfunding project. We plan to provide resources for sustainable farming practices, support farmers' markets, and raise awareness of the importance of buying local produce. Your contribution can make a difference in the lives of small farmers and their communities.",
      "category": "Small Business",
      "image_url": "https://images.pexels.com/photos/13673585/pexels-photo-13673585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Creating Sustainable Products",
      "description": "This crowdfunding project seeks to create sustainable products by supporting small businesses that prioritize sustainability in their production processes. We plan to raise awareness of the importance of ethical and sustainable consumption and support small businesses that prioritize the environment. Join us in our mission to create a more sustainable future for all.",
      "category": "Small Business",
      "image_url": "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Women-Owned Businesses",
      "description": "Help us support women-owned businesses with this crowdfunding project. We plan to provide resources for business development, mentorship, and support for women entrepreneurs. Your contribution can make a difference in the lives of women entrepreneurs and help promote gender equality in the business world.",
      "category": "Small Business",
      "image_url": "https://images.unsplash.com/photo-1675034743339-0b0747047727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Promoting Sustainable Tourism",
      "description": "Join us in our mission to promote sustainable tourism with this crowdfunding project. We plan to support eco-friendly hotels, tour operators that prioritize sustainability, and raise awareness of the importance of responsible tourism. Your contribution can make a difference in the lives of communities that depend on tourism and help protect the environment.",
      "category": "Small Business",
      "image_url": "https://images.pexels.com/photos/247447/pexels-photo-247447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
      "title": "Supporting Local Artisans",
      "description": "Help us support local artisans with this crowdfunding project. We plan to provide resources for art fairs, galleries, and support for artisans to develop their skills and products. Your contribution can make a difference in the lives of small artisans and their communities, preserving traditional crafts and supporting cultural heritage.",
      "category": "Small Business",
      "image_url": "https://i0.wp.com/www.byawoman.com/wp-content/uploads/2019/08/IMG_7669.jpg?resize=845%2C550",
      current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
      goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
      start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
    },
    {
        "title": "Kinoti Recording an Album",
        "description": "This crowdfunding project seeks to fund the recording and production of an album by an up-and-coming artist. We plan to support the Kinoti's creative vision and help bring their music to a wider audience. Join us in supporting the arts and promoting new talent.",
        "category": "Musicians/Artists",
        "image_url": "https://images.pexels.com/photos/8412278/pexels-photo-8412278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
      },
      {
        "title": "Artist Residency Program",
        "description": "Help us support artists by funding an artist residency program with this crowdfunding project. We plan to provide resources for artists to develop their skills, promote creative collaboration, and support cultural exchange. Your contribution can make a difference in the lives of artists and help foster artistic innovation.",
        "category": "Musicians/Artists",
        "image_url": "https://artincontext.org/wp-content/uploads/2022/09/Artist-Residencies-848x530.jpg",
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
      },
      {
        "title": "Supporting Independent Filmmakers",
        "description": "Help us support independent filmmakers with this crowdfunding project. We plan to provide resources for production, distribution, and promotion of independent films, supporting creative expression and diversity in the film industry. Your contribution can make a difference in the lives of filmmakers and help promote independent cinema.",
        "category": "Musicians/Artists",
        "image_url": "https://images.pexels.com/photos/3101497/pexels-photo-3101497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
      },
      {
        "title": "Art for Social Change",
        "description": "Join us in our mission to promote social change through art with this crowdfunding project. We plan to support artists who use their talents to raise awareness of social issues, support art exhibits and performances, and help create a more just and equitable society. Your contribution can make a difference in the lives of artists and help promote social justice.",
        "category": "Musicians/Artists",
        "image_url": "https://artsphere.org/wp-content/uploads/2021/03/priscilla-gyamfi-qnZrSLhmiL0-unsplash-scaled.jpg",
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
      },
      {
        "title": "Bringing Art to Public Spaces",
        "description": "This crowdfunding project seeks to bring art to public spaces by supporting public art projects, street art festivals, and community art projects. We plan to support artists and communities to come together to create vibrant public spaces that inspire creativity and promote community engagement. Join us in our mission to bring art to everyone.",
        "category": "Musicians/Artists",
        "image_url": "https://uploads-ssl.webflow.com/5ac370c1f1502ec1a8610623/6092d1c58160dc310cb55182_Street-Artists-nl-office-murals.jpg",
        current_amount: Faker::Number.decimal(l_digits: 4, r_digits: 1),
        goal_amount: Faker::Number.decimal(l_digits: 5, r_digits: 2),
        start_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        end_date: Faker::Date.between(from: 2.months.from_now, to: 1.year.from_now)
      }
])




# Create 10 reviews
70.times do
    Review.create!(
    comment: Faker::Lorem.sentence(word_count: 10),
    user_id: rand(1..30),
    campaign_id: rand(1..30),
    rating: rand(1..5)
    )
end


# Create 10 pledges
100.times do
  Pledge.create!(
    pledge_amount: rand(1..10000),
    user_id: rand(1...30),
    campaign_id: rand(1...30)
  )
end


puts "Done seeding..................."

