import { MessageService } from '$lib/database';
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const load = async () => {
	try {
		const messages = await MessageService.getMessages(20);
		return {
			messages
		};
	} catch (error) {
		console.error('Error fetching messages:', error);
		return {
			messages: [],
			error: 'Failed to fetch messages'
		};
	}
};

export const actions: Actions = {
	addMessage: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		const location = data.get('location') as string;
		const website = data.get('website') as string;

		if (!name?.trim() || !message?.trim()) {
			return fail(400, { error: 'Name and message are required' });
		}

		if (name.length > 100) {
			return fail(400, { error: 'Name must be 100 characters or less' });
		}

		if (message.length > 500) {
			return fail(400, { error: 'Message must be 500 characters or less' });
		}

		const insertData = {
			name: name.trim(),
			message: message.trim(),
			email: email?.trim() || undefined,
			location: location?.trim() || undefined,
			website: website?.trim() || undefined
		};

		try {
			await MessageService.createMessage(insertData);
			return { success: true };
		} catch (error) {
			console.error('Error creating message:', error);
			return fail(500, { error: 'Failed to create message' });
		}
	}
};
