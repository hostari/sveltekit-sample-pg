import { pgTable, serial, varchar, text, timestamp, index } from 'drizzle-orm/pg-core';

export const guestbookMessages = pgTable(
	'guestbook_messages',
	{
		id: serial('id').primaryKey(),
		name: varchar('name', { length: 100 }).notNull(),
		email: varchar('email', { length: 255 }),
		message: text('message').notNull(),
		location: varchar('location', { length: 255 }),
		website: varchar('website', { length: 255 }),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => ({
		createdAtIdx: index('idx_guestbook_messages_created_at').on(table.createdAt.desc())
	})
);

export type GuestbookMessage = typeof guestbookMessages.$inferSelect;
export type MessageInsert = typeof guestbookMessages.$inferInsert;
