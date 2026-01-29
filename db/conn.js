// Import libraries
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Setup/configure dotenv
dotenv.config();

// Get Connection string
const connnectionStr = process.env.MONGO_URI || "";

// Setup Mongo client
const client = new MongoClient(connnectionStr);

let conn;

try {
  conn = await client.connect();

  console.log("MongoDB Connected...");
} catch (err) {
  console.error(err);
  process.exit(1); // IF we cant connect to DB this will close our server. 1 - indicates we closed with error
}

// Choose our database
let db = conn.db('test_db');

//Export out loaded db module
export default db;