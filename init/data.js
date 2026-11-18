const sampleListings = [
	{
		title: "Luxury Beach Villa in Goa",
		description:
			"Enjoy stunning ocean views, a private pool, and a relaxing tropical atmosphere in this beautiful beachside villa.",
		image: {
			filename: "listingimage",
			url: "https://plus.unsplash.com/premium_photo-1792519189202-39fa34a2542a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 5500,
		location: "Goa",
		country: "India",
	},
	{
		title: "Cozy Mountain Cabin in Manali",
		description:
			"Escape to a peaceful wooden cabin surrounded by snow-capped mountains, pine forests, and fresh mountain air.",
		image: {
			filename: "listingimage",
			url: "https://i.pinimg.com/736x/e5/6e/89/e56e8968bd68b54b3120a012fed9ba87.jpg",
		},
		price: 2800,
		location: "Manali, Himachal Pradesh",
		country: "India",
	},
	{
		title: "Royal Heritage Stay in Jaipur",
		description:
			"Experience traditional Rajasthani architecture, elegant interiors, and warm hospitality in a charming heritage property.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
		},
		price: 6200,
		location: "Jaipur, Rajasthan",
		country: "India",
	},
	{
		title: "Lakeview Cottage in Nainital",
		description:
			"Wake up to beautiful lake views and enjoy a comfortable stay surrounded by green hills and peaceful scenery.",
		image: {
			filename: "listingimage",
			url: "https://plus.unsplash.com/premium_photo-1792005747165-4013aef2dbd4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 3500,
		location: "Nainital, Uttarakhand",
		country: "India",
	},
	{
		title: "Garden Retreat in Ooty",
		description:
			"Relax in a charming cottage with a beautiful garden, misty hills, and a refreshing atmosphere away from city life.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1790059631122-7614b81c5085?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 3000,
		location: "Ooty, Tamil Nadu",
		country: "India",
	},
	{
		title: "Modern City Apartment in Mumbai",
		description:
			"Stay in a stylish apartment with modern amenities and convenient access to popular attractions, cafes, and shopping areas.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
		},
		price: 4500,
		location: "Mumbai, Maharashtra",
		country: "India",
	},
	{
		title: "Backwater Houseboat Escape",
		description:
			"Discover the beauty of Kerala's backwaters from a comfortable houseboat with scenic views and a peaceful setting.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
		},
		price: 5000,
		location: "Alappuzha, Kerala",
		country: "India",
	},
	{
		title: "Desert Camp Under the Stars",
		description:
			"Enjoy a memorable desert getaway with traditional decor, golden sand dunes, and beautiful starry night skies.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
		},
		price: 4000,
		location: "Jaisalmer, Rajasthan",
		country: "India",
	},
	{
		title: "Peaceful Forest Lodge",
		description:
			"Unwind in a nature-inspired lodge surrounded by tall trees, scenic walking trails, and the soothing sounds of the forest.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
		},
		price: 3200,
		location: "Coorg, Karnataka",
		country: "India",
	},
	{
		title: "Luxury Lakeside Resort",
		description:
			"Enjoy a relaxing lakeside holiday with comfortable rooms, mountain scenery, and beautiful sunset views over the water.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
		},
		price: 5800,
		location: "Udaipur, Rajasthan",
		country: "India",
	},
	{
		title: "Seaside Retreat in Alibaug",
		description:
			"Enjoy a relaxing coastal escape with bright rooms, a breezy patio, and space to unwind after exploring nearby beaches.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
		},
		price: 3400,
		location: "Alibaug, Maharashtra",
		country: "India",
	},
	{
		title: "Boutique Resort in Jaisalmer",
		description:
			"Discover Rajasthan's desert landscapes from a comfortable retreat with inviting outdoor spaces and peaceful evenings.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
		},
		price: 4600,
		location: "Jaisalmer, Rajasthan",
		country: "India",
	},
	{
		title: "Forest Hideaway in Wayanad",
		description:
			"Take a refreshing break surrounded by lush greenery. Enjoy quiet mornings, nature walks, and cozy evenings at this welcoming hideaway.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
		},
		price: 2900,
		location: "Wayanad, Kerala",
		country: "India",
	},
	{
		title: "Poolside Holiday Stay in Mahabalipuram",
		description:
			"Relax beside the pool and spend your days discovering coastal scenery, historic monuments, and local seafood restaurants.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
		},
		price: 5200,
		location: "Mahabalipuram, Tamil Nadu",
		country: "India",
	},
	{
		title: "Woodland Cabin in Kodaikanal",
		description:
			"Unwind in a rustic cabin tucked among trees. Enjoy the cool hill-station weather and a comfortable base for scenic walks.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=80",
		},
		price: 2700,
		location: "Kodaikanal, Tamil Nadu",
		country: "India",
	},
	{
		title: "Elegant Holiday Villa in Lonavala",
		description:
			"Gather with friends or family in a spacious villa with comfortable interiors and outdoor areas for leisurely afternoons.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=80",
		},
		price: 7400,
		location: "Lonavala, Maharashtra",
		country: "India",
	},
	{
		title: "Countryside Lodge in Sakleshpur",
		description:
			"Escape busy city life at a cozy countryside lodge. Explore green surroundings and relax with a warm drink after a day outdoors.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=80",
		},
		price: 2300,
		location: "Sakleshpur, Karnataka",
		country: "India",
	},
	{
		title: "Comfortable City Suite in Hyderabad",
		description:
			"Settle into an inviting suite with a comfortable bed and stylish interiors. Explore the city's food scene and historic neighborhoods.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
		},
		price: 3600,
		location: "Hyderabad, Telangana",
		country: "India",
	},
	{
		title: "Relaxing Boutique Stay in Mysuru",
		description:
			"Enjoy a restful stay in a thoughtfully furnished room. Spend your days discovering palaces, gardens, and traditional markets.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
		},
		price: 2500,
		location: "Mysuru, Karnataka",
		country: "India",
	},
	{
		title: "Modern Business Stay in Pune",
		description:
			"Recharge in a comfortable room after a day of work or sightseeing. A convenient choice for solo travelers and couples.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
		},
		price: 3100,
		location: "Pune, Maharashtra",
		country: "India",
	},
	{
		title: "Cozy Urban Escape in Ahmedabad",
		description:
			"Enjoy welcoming interiors and a restful atmosphere while exploring Ahmedabad's architecture, lively markets, and local cuisine.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
		},
		price: 2800,
		location: "Ahmedabad, Gujarat",
		country: "India",
	},
	{
		title: "Peaceful Holiday Suite in Kochi",
		description:
			"Relax in a spacious suite after exploring waterfront streets and heritage neighborhoods. Ideal for a leisurely city break.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
		},
		price: 3300,
		location: "Kochi, Kerala",
		country: "India",
	},
	{
		title: "Stylish Apartment in Indore",
		description:
			"Make yourself at home in a modern apartment with a welcoming living area. Discover local shopping streets and Indore's famous food markets.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
		},
		price: 2100,
		location: "Indore, Madhya Pradesh",
		country: "India",
	},
	{
		title: "Bright Family Apartment in Chandigarh",
		description:
			"Enjoy a comfortable family getaway with airy interiors and room to relax. Explore landscaped gardens and the city's distinctive architecture.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
		},
		price: 3900,
		location: "Chandigarh",
		country: "India",
	},
	{
		title: "Elegant City Retreat in Lucknow",
		description:
			"Stay in a stylish retreat with inviting interiors and comfortable furnishings. Discover historic landmarks and traditional Awadhi cuisine.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
		},
		price: 3200,
		location: "Lucknow, Uttar Pradesh",
		country: "India",
	},
	{
		title: "Cozy Beachfront Cottage",
		description:
			"Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1500,
		location: "Malibu",
		country: "United States",
	},
	{
		title: "Modern Loft in Downtown",
		description:
			"Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "New York City",
		country: "United States",
	},
	{
		title: "Mountain Retreat",
		description:
			"Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1000,
		location: "Aspen",
		country: "United States",
	},
	{
		title: "Historic Villa in Tuscany",
		description:
			"Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2500,
		location: "Florence",
		country: "Italy",
	},
	{
		title: "Secluded Treehouse Getaway",
		description:
			"Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 800,
		location: "Portland",
		country: "United States",
	},
	{
		title: "Beachfront Paradise",
		description:
			"Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 2000,
		location: "Cancun",
		country: "Mexico",
	},
	{
		title: "Rustic Cabin by the Lake",
		description:
			"Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 900,
		location: "Lake Tahoe",
		country: "United States",
	},
	{
		title: "Luxury Penthouse with City Views",
		description:
			"Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 3500,
		location: "Los Angeles",
		country: "United States",
	},
	{
		title: "Ski-In/Ski-Out Chalet",
		description:
			"Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 3000,
		location: "Verbier",
		country: "Switzerland",
	},
	{
		title: "Safari Lodge in the Serengeti",
		description:
			"Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 4000,
		location: "Serengeti National Park",
		country: "Tanzania",
	},
	{
		title: "Historic Canal House",
		description:
			"Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Amsterdam",
		country: "Netherlands",
	},
	{
		title: "Private Island Retreat",
		description:
			"Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 10000,
		location: "Fiji",
		country: "Fiji",
	},
	{
		title: "Charming Cottage in the Cotswolds",
		description:
			"Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "Cotswolds",
		country: "United Kingdom",
	},
	{
		title: "Historic Brownstone in Boston",
		description:
			"Step back in time in this elegant historic brownstone located in the heart of Boston.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2200,
		location: "Boston",
		country: "United States",
	},
	{
		title: "Beachfront Bungalow in Bali",
		description:
			"Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Bali",
		country: "Indonesia",
	},
	{
		title: "Mountain View Cabin in Banff",
		description:
			"Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1500,
		location: "Banff",
		country: "Canada",
	},
	{
		title: "Art Deco Apartment in Miami",
		description:
			"Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
		image: {
			filename: "listingimage",
			url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1600,
		location: "Miami",
		country: "United States",
	},
	{
		title: "Tropical Villa in Phuket",
		description:
			"Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 3000,
		location: "Phuket",
		country: "Thailand",
	},
	{
		title: "Historic Castle in Scotland",
		description:
			"Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 4000,
		location: "Scottish Highlands",
		country: "United Kingdom",
	},
	{
		title: "Desert Oasis in Dubai",
		description:
			"Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 5000,
		location: "Dubai",
		country: "United Arab Emirates",
	},
	{
		title: "Rustic Log Cabin in Montana",
		description:
			"Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1100,
		location: "Montana",
		country: "United States",
	},
	{
		title: "Beachfront Villa in Greece",
		description:
			"Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 2500,
		location: "Mykonos",
		country: "Greece",
	},
	{
		title: "Eco-Friendly Treehouse Retreat",
		description:
			"Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 750,
		location: "Costa Rica",
		country: "Costa Rica",
	},
	{
		title: "Historic Cottage in Charleston",
		description:
			"Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 1600,
		location: "Charleston",
		country: "United States",
	},
	{
		title: "Modern Apartment in Tokyo",
		description:
			"Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		price: 2000,
		location: "Tokyo",
		country: "Japan",
	},
	{
		title: "Lakefront Cabin in New Hampshire",
		description:
			"Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1200,
		location: "New Hampshire",
		country: "United States",
	},
	{
		title: "Luxury Villa in the Maldives",
		description:
			"Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 6000,
		location: "Maldives",
		country: "Maldives",
	},
	{
		title: "Ski Chalet in Aspen",
		description:
			"Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
		},

		price: 4000,
		location: "Aspen",
		country: "United States",
	},
	{
		title: "Secluded Beach House in Costa Rica",
		description:
			"Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		price: 1800,
		location: "Costa Rica",
		country: "Costa Rica",
	},
	{
		title: "Peaceful Lakeside Cottage in Udaipur",
		description:
			"Wake up to peaceful lake views in this charming cottage. Relax on the terrace and explore Udaipur's historic palaces and colorful markets.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
		},
		price: 3500,
		location: "Udaipur, Rajasthan",
		country: "India",
	},
	{
		title: "Cozy Mountain Cabin in Manali",
		description:
			"Enjoy a cozy wooden cabin surrounded by pine trees and mountain scenery. Spend your evenings relaxing after exploring nearby trails.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 2800,
		location: "Manali, Himachal Pradesh",
		country: "India",
	},
	{
		title: "Tropical Pool Villa in Goa",
		description:
			"Unwind in a spacious villa with a private pool and tropical garden. Enjoy lazy afternoons outdoors and explore Goa's lively coastal neighborhoods.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
		},
		price: 6500,
		location: "Anjuna, Goa",
		country: "India",
	},
	{
		title: "Tea Garden Retreat in Munnar",
		description:
			"Escape to a quiet hillside retreat overlooking green tea plantations. Enjoy misty mornings, fresh mountain air, and leisurely walks through the countryside.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
		},
		price: 3200,
		location: "Munnar, Kerala",
		country: "India",
	},
	{
		title: "Heritage Courtyard Stay in Jaipur",
		description:
			"Experience a welcoming heritage-style stay with a peaceful courtyard and traditional decor. Discover Jaipur's forts, bazaars, and local food.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
		},
		price: 4200,
		location: "Jaipur, Rajasthan",
		country: "India",
	},
	{
		title: "Hillside Cottage in Ooty",
		description:
			"Take a refreshing break in a comfortable cottage surrounded by rolling hills. Sip tea in the garden and enjoy the cool weather of the Nilgiris.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
		},
		price: 2600,
		location: "Ooty, Tamil Nadu",
		country: "India",
	},
	{
		title: "Riverside Hideaway in Rishikesh",
		description:
			"Slow down at a peaceful retreat near the river. Start your morning with yoga and spend the day exploring riverside paths and local cafes.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
		},
		price: 2400,
		location: "Rishikesh, Uttarakhand",
		country: "India",
	},
	{
		title: "Coffee Estate Cottage in Coorg",
		description:
			"Stay in a cozy cottage surrounded by greenery and coffee plantations. Enjoy quiet mornings on the veranda and scenic walks around the estate.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
		},
		price: 3800,
		location: "Madikeri, Karnataka",
		country: "India",
	},
	{
		title: "Garden Bungalow in Pondicherry",
		description:
			"Relax in a bright bungalow with a leafy courtyard and comfortable reading corners. Explore charming streets, seaside promenades, and neighborhood bakeries.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
		},
		price: 3100,
		location: "Pondicherry",
		country: "India",
	},
	{
		title: "Mountain View Homestay in Gangtok",
		description:
			"Enjoy a welcoming hillside homestay with beautiful mountain views. Relax on the balcony and discover local markets and regional cuisine.",
		image: {
			filename: "listingimage",
			url: "https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 2200,
		location: "Gangtok, Sikkim",
		country: "India",
	},
	{
		title: "Private Pool Retreat in Bali",
		description:
			"Recharge in a tropical villa with a private pool and open-air lounging space. Spend your days exploring rice terraces and nearby artisan villages.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
		},
		price: 7800,
		location: "Ubud, Bali",
		country: "Indonesia",
	},
	{
		title: "Stylish City Apartment in Paris",
		description:
			"Settle into a bright apartment with comfortable furnishings and a cozy dining area. Explore neighborhood cafes, museums, and picturesque streets.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
		},
		price: 12500,
		location: "Paris",
		country: "France",
	},
	{
		title: "Alpine Chalet in Switzerland",
		description:
			"Enjoy a relaxing mountain escape in a charming chalet. Admire the alpine scenery and return to a warm living space after a day outdoors.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1514970746-d4a465d514d0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 16500,
		location: "Grindelwald",
		country: "Switzerland",
	},
	{
		title: "Modern Studio in Tokyo",
		description:
			"Make yourself at home in a compact studio with a practical kitchenette and comfortable sleeping space. Discover Tokyo's restaurants and vibrant neighborhoods.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
		},
		price: 8200,
		location: "Tokyo",
		country: "Japan",
	},
	{
		title: "Coastal Villa in Phuket",
		description:
			"Enjoy a relaxing tropical getaway in a spacious villa with outdoor seating. Spend your days discovering beaches and sampling local Thai dishes.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
		},
		price: 7200,
		location: "Phuket",
		country: "Thailand",
	},
	{
		title: "Contemporary Apartment in Dubai",
		description:
			"Stay in a modern apartment with an airy living room and stylish interiors. Explore the city's shopping districts, restaurants, and waterfront attractions.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
		},
		price: 10500,
		location: "Dubai",
		country: "United Arab Emirates",
	},
	{
		title: "Countryside Cottage in Tuscany",
		description:
			"Enjoy a quiet countryside stay among rolling hills and charming villages. Prepare leisurely meals and relax in an inviting outdoor seating area.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
		},
		price: 9800,
		location: "Tuscany",
		country: "Italy",
	},
	{
		title: "Forest Cabin near Vancouver",
		description:
			"Disconnect from the rush in a welcoming cabin surrounded by trees. Enjoy forest walks, quiet evenings, and a comfortable space to recharge.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
		},
		price: 8900,
		location: "North Vancouver, British Columbia",
		country: "Canada",
	},
	{
		title: "Sunny Apartment in Barcelona",
		description:
			"Stay in a cheerful apartment with a bright living area and cozy bedrooms. Explore lively streets, local markets, and the city's distinctive architecture.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
		},
		price: 9200,
		location: "Barcelona",
		country: "Spain",
	},
	{
		title: "Scenic Holiday Home in Queenstown",
		description:
			"Enjoy a comfortable holiday home surrounded by dramatic mountain scenery. Relax with a warm drink after a day of lakeside walks and outdoor adventures.",
		image: {
			filename: "listingimage",
			url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
		},
		price: 11200,
		location: "Queenstown",
		country: "New Zealand",
	},
];

module.exports = { data: sampleListings };
