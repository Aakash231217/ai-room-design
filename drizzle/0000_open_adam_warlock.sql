CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"imageUrl" varchar NOT NULL,
	"credits" integer DEFAULT 3
);
