<script lang="ts">
	import { Header, MessageCard, MessageForm } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Header
	title="📖 Digital Guestbook"
	subtitle="Share your thoughts and connect with visitors from around the world"
/>

<div class="container mx-auto px-4 py-12">
	<MessageForm />

	{#if data.error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
			<strong>Error:</strong>
			{data.error}
			<p class="text-sm mt-2">
				Make sure to set up your Supabase project and create the 'guestbook_messages' table.
			</p>
		</div>
	{:else if data.messages.length === 0}
		<div class="text-center py-12">
			<div class="text-6xl mb-4">📝</div>
			<h3 class="text-2xl font-semibold text-gray-800 mb-2">Be the first to sign!</h3>
			<p class="text-gray-600 max-w-md mx-auto">
				Start the conversation by leaving the very first message in our guestbook. Others will
				follow your lead!
			</p>
		</div>
	{:else}
		<div class="mb-8">
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-2xl font-bold text-gray-800">
					💬 Messages ({data.messages.length})
				</h2>
				<div class="text-sm text-gray-500">Showing latest messages</div>
			</div>

			<div class="space-y-6">
				{#each data.messages as message (message.id)}
					<MessageCard {message} />
				{/each}
			</div>
		</div>
	{/if}

	<div class="text-center mt-12 py-8 border-t border-gray-200">
		<h3 class="text-lg font-semibold text-gray-800 mb-2">✨ Built with SvelteKit</h3>
		<p class="text-gray-600">
			This guestbook demonstrates modern web development with SvelteKit, TypeScript, Tailwind CSS,
			and Supabase.
		</p>
	</div>
</div>
