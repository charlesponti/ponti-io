import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
	NEXT_PUBLIC_SHOW_LOGGER: z.string().optional(),
});

export const env = envSchema.parse(process.env);
