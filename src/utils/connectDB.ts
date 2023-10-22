import { MongoClient } from "mongodb";
import config from "@/config.ts";

const dbUri = config.dbUri;
const dbName = Deno.env.get("MONGO_INITDB_DATABASE") as string;

const client = await mongoConnect();
console.log("🚀 Connected to MongoDB Successfully");

export const db = client.db(dbName);

async function mongoConnect() {
  try {
    const client = await MongoClient.connect(dbUri);
    return client;
  } catch (err) {
    console.log("💥 Unable to connect to database.", err);
    Deno.exit(1);
  }
}
