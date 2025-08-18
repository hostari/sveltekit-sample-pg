<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}

	let { title, subtitle }: Props = $props();
</script>

<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
	<div class="container mx-auto px-4 text-center">
		<h1 class="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
		{#if subtitle}
			<p class="text-xl md:text-2xl opacity-90">{subtitle}</p>
		{/if}
	</div>
</header>
