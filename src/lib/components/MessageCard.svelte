<script lang="ts">
	import type { GuestbookMessage } from '$lib/database';

	interface Props {
		message: GuestbookMessage;
	}

	let { message }: Props = $props();

	function formatDate(date: Date) {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	function getInitials(name: string) {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	}
</script>

<div
	class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
>
	<div class="flex items-start space-x-4">
		<div class="flex-shrink-0">
			<div
				class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg"
			>
				{getInitials(message.name)}
			</div>
		</div>

		<div class="flex-1 min-w-0">
			<div class="flex items-center justify-between mb-2">
				<div class="flex items-center space-x-2">
					<h3 class="text-lg font-semibold text-gray-900">{message.name}</h3>
					{#if message.location}
						<span
							class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
						>
							📍 {message.location}
						</span>
					{/if}
				</div>
				<time class="text-sm text-gray-500" datetime={message.createdAt.toISOString()}>
					{formatDate(message.createdAt)}
				</time>
			</div>

			<p class="text-gray-700 leading-relaxed mb-3">{message.message}</p>

			<div class="flex items-center space-x-4 text-sm">
				{#if message.email}
					<a
						href="mailto:{message.email}"
						class="text-blue-600 hover:text-blue-800 transition-colors"
					>
						✉️ Email
					</a>
				{/if}
				{#if message.website}
					<a
						href={message.website.startsWith('http')
							? message.website
							: `https://${message.website}`}
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-600 hover:text-blue-800 transition-colors"
					>
						🌐 Website
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
