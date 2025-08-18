<script lang="ts">
	import { enhance } from '$app/forms';

	let isSubmitting = $state(false);
	let formData = $state({
		name: '',
		email: '',
		message: '',
		location: '',
		website: ''
	});

	function resetForm() {
		formData = {
			name: '',
			email: '',
			message: '',
			location: '',
			website: ''
		};
	}
</script>

<div class="bg-white rounded-lg shadow-lg p-6 mb-8">
	<div class="text-center mb-6">
		<h2 class="text-2xl font-bold text-gray-800 mb-2">✍️ Sign the Guestbook</h2>
		<p class="text-gray-600">Leave a message and let others know you were here!</p>
	</div>

	<form
		method="POST"
		action="?/addMessage"
		use:enhance={() => {
			isSubmitting = true;
			return async ({ update, result }) => {
				await update();
				isSubmitting = false;
				if (result.type === 'success') {
					resetForm();
				}
			};
		}}
		class="space-y-4"
	>
		<div class="grid md:grid-cols-2 gap-4">
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700 mb-1">
					Name <span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					bind:value={formData.name}
					required
					maxlength="100"
					placeholder="Your name"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700 mb-1">
					Email <span class="text-gray-400">(optional)</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					bind:value={formData.email}
					maxlength="255"
					placeholder="your@email.com"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
		</div>

		<div class="grid md:grid-cols-2 gap-4">
			<div>
				<label for="location" class="block text-sm font-medium text-gray-700 mb-1">
					Location <span class="text-gray-400">(optional)</span>
				</label>
				<input
					type="text"
					id="location"
					name="location"
					bind:value={formData.location}
					maxlength="100"
					placeholder="City, Country"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
			<div>
				<label for="website" class="block text-sm font-medium text-gray-700 mb-1">
					Website <span class="text-gray-400">(optional)</span>
				</label>
				<input
					type="url"
					id="website"
					name="website"
					bind:value={formData.website}
					maxlength="255"
					placeholder="https://yourwebsite.com"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-gray-700 mb-1">
				Message <span class="text-red-500">*</span>
			</label>
			<textarea
				id="message"
				name="message"
				bind:value={formData.message}
				required
				maxlength="500"
				rows="4"
				placeholder="Share your thoughts, say hello, or leave a note for other visitors..."
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
			></textarea>
			<div class="text-right text-sm text-gray-500 mt-1">
				{formData.message.length}/500 characters
			</div>
		</div>

		<div class="flex justify-center">
			<button
				type="submit"
				disabled={isSubmitting || !formData.name.trim() || !formData.message.trim()}
				class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
			>
				{isSubmitting ? '📝 Adding your message...' : '✨ Sign the Guestbook'}
			</button>
		</div>
	</form>
</div>
