<script lang="ts">
	import { page } from '$app/stores';

	interface NavItem {
		href: string;
		label: string;
	}

	const navItems: NavItem[] = [
		{ href: '/', label: 'Guestbook' },
		{ href: '/about', label: 'About' }
	];
</script>

<nav class="bg-white shadow-sm border-b">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center space-x-8">
				<a href="/" class="text-2xl font-bold text-gray-800">📖 Digital Guestbook</a>
				<div class="flex space-x-4">
					{#each navItems as item (item.href)}
						<a
							href={item.href}
							class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 {$page
								.url.pathname === item.href
								? 'bg-blue-100 text-blue-700'
								: 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
