if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const Listing = require("./models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const geocodingClient = mbxGeocoding({
	accessToken: process.env.MAP_TOKEN,
});

async function updateListings() {
	await mongoose.connect(MONGO_URL);
	console.log("Database connected!");

	const listings = await Listing.find({
		$or: [
			{ "geometry.type": { $exists: false } },
			{ "geometry.coordinates": { $exists: false } },
		],
	});

	console.log("Old listings found:", listings.length);

	for (let listing of listings) {
		try {
			const response = await geocodingClient
				.forwardGeocode({
					query: `${listing.location}, ${listing.country}`,
					limit: 1,
				})
				.send();

			if (!response.body.features.length) {
				console.log("Location not found:", listing.location);
				continue;
			}

			listing.geometry = response.body.features[0].geometry;

			await listing.save();

			console.log("Updated:", listing.title);
		} catch (err) {
			console.log("Error:", listing.title, err.message);
		}
	}

	await mongoose.connection.close();
	console.log("All done!");
}

updateListings().catch(console.error);
