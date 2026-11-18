const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
	.then(() => {
		console.log("connected to DB!!");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
	await Listing.deleteMany({});
	initData.data = initData.data.map((obj) => ({
		...obj,
		owner: "6ae47066632935461a9b0b7d",
	}));
	await Listing.insertMany(initData.data);
	console.log("data was initialized");
};

initDB();

// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const path = require("path");
// require("dotenv").config({
// 	path: path.join(__dirname, "../.env"),
// });

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const MONGO_URL = process.env.ATLASDB_URL;
// const MAP_TOKEN = process.env.MAP_TOKEN;

// async function initDB() {
// 	try {
// 		await mongoose.connect(MONGO_URL);
// 		console.log("Connected to MongoDB Atlas!");

// 		if (!MAP_TOKEN) {
// 			throw new Error("MAP_TOKEN is missing in .env");
// 		}

// 		let inserted = 0;
// 		let skipped = 0;

// 		for (const obj of initData.data) {
// 			// Avoid duplicate listings
// 			const existing = await Listing.findOne({
// 				title: obj.title,
// 				location: obj.location,
// 			});

// 			if (existing) {
// 				console.log("Already exists:", obj.title);
// 				skipped++;
// 				continue;
// 			}

// 			// Get actual coordinates from Mapbox
// 			const query = encodeURIComponent(`${obj.location}, ${obj.country}`);

// 			const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&access_token=${MAP_TOKEN}`;

// 			const response = await fetch(url);
// 			const result = await response.json();

// 			if (!response.ok || !result.features.length) {
// 				console.log("Location not found:", obj.location);
// 				skipped++;
// 				continue;
// 			}

// 			const geometry = result.features[0].geometry;

// 			await Listing.create({
// 				...obj,
// 				owner: "6ae47066632935461a9b0b7d",
// 				geometry,
// 			});

// 			console.log("Inserted:", obj.title);
// 			inserted++;
// 		}

// 		console.log("Import completed!");
// 		console.log("Inserted:", inserted);
// 		console.log("Skipped:", skipped);
// 		console.log("Total listings in Atlas:", await Listing.countDocuments());
// 	} catch (err) {
// 		console.error("Initialization error:", err);
// 	} finally {
// 		await mongoose.connection.close();
// 	}
// }

// initDB();