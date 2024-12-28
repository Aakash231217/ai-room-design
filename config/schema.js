import { varchar, serial, integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  imageUrl: varchar('imageUrl'), // Removed .notNull()
  credits: integer('credits').default(3),
});