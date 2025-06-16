import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "node:path";
import { covidData } from "./schema";

const dbPath = path.join(process.cwd(), "_data/covid.db");
const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema: { covidData } });

export { covidData } from "./schema";
