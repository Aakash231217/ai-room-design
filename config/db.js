import { createClient } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const client = createClient(process.env.DATABASE_URL);
export const db = drizzle(client);
