import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DATABASE_URL } from '$env/static/private';
import { guestbookMessages } from './schema';
import { desc } from 'drizzle-orm';
import type { GuestbookMessage, MessageInsert } from './schema';

const pool = new Pool({
	connectionString: DATABASE_URL,
	ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export const db = drizzle(pool);

export { type GuestbookMessage, type MessageInsert };

export class MessageService {
	static async getMessages(limit: number = 20): Promise<GuestbookMessage[]> {
		return await db
			.select()
			.from(guestbookMessages)
			.orderBy(desc(guestbookMessages.createdAt))
			.limit(limit);
	}

	static async createMessage(data: MessageInsert): Promise<GuestbookMessage> {
		const result = await db.insert(guestbookMessages).values(data).returning();
		return result[0];
	}
}
