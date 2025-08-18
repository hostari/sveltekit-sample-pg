import { json } from '@sveltejs/kit';
import { MessageService } from '$lib/database';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit')) || 20;

	try {
		const messages = await MessageService.getMessages(limit);
		return json({ messages });
	} catch (error) {
		console.error('Error fetching messages:', error);
		return json({ error: 'Failed to fetch messages' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, message, location, website } = await request.json();

	if (!name?.trim() || !message?.trim()) {
		return json({ error: 'Name and message are required' }, { status: 400 });
	}

	if (name.length > 100) {
		return json({ error: 'Name must be 100 characters or less' }, { status: 400 });
	}

	if (message.length > 500) {
		return json({ error: 'Message must be 500 characters or less' }, { status: 400 });
	}

	const insertData = {
		name: name.trim(),
		message: message.trim(),
		email: email?.trim() || undefined,
		location: location?.trim() || undefined,
		website: website?.trim() || undefined
	};

	try {
		const newMessage = await MessageService.createMessage(insertData);
		return json({ message: newMessage }, { status: 201 });
	} catch (error) {
		console.error('Error creating message:', error);
		return json({ error: 'Failed to create message' }, { status: 500 });
	}
};
