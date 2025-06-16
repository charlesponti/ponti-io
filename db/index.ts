import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "node:path";
import { covidData } from "./schema";

let _db: ReturnType<typeof drizzle> | null = null;
let _sqlite: Database.Database | null = null;

function initializeDb() {
	if (_db) return _db;

	const dbPath = path.join(process.cwd(), "/data/covid.db");
	_sqlite = new Database(dbPath);
	_db = drizzle(_sqlite, { schema: { covidData } });
	return _db;
}

// Getter that initializes the database connection lazily
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
	get(target, prop) {
		const dbInstance = initializeDb();
		return (dbInstance as any)[prop];
	},
});

export { covidData } from "./schema";
