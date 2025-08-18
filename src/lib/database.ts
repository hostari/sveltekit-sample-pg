import { Pool } from 'pg';
import { DATABASE_URL } from '$env/static/private';

const pool = new Pool({
	connectionString: DATABASE_URL,
	ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export const db = pool;

export interface GuestbookMessage {
	id: number;
	name: string;
	email?: string;
	message: string;
	location?: string;
	website?: string;
	created_at: string;
}

export interface MessageInsert {
	name: string;
	email?: string;
	message: string;
	location?: string;
	website?: string;
}

export class MessageService {
	static async getMessages(limit: number = 20): Promise<GuestbookMessage[]> {
		const client = await pool.connect();
		try {
			const result = await client.query(
				'SELECT * FROM guestbook_messages ORDER BY created_at DESC LIMIT $1',
				[limit]
			);
			return result.rows;
		} finally {
			client.release();
		}
	}

	static async createMessage(data: MessageInsert): Promise<GuestbookMessage> {
		const client = await pool.connect();
		try {
			const result = await client.query(
				`INSERT INTO guestbook_messages (name, email, message, location, website) 
				 VALUES ($1, $2, $3, $4, $5) 
				 RETURNING *`,
				[data.name, data.email, data.message, data.location, data.website]
			);
			return result.rows[0];
		} finally {
			client.release();
		}
	}
}