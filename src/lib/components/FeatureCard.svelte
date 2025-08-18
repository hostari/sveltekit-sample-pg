<script lang="ts">
	interface Props {
		title: string;
		description: string;
		icon?: string;
	}

	let { title, description, icon = '🚀' }: Props = $props();
</script>

<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
	<div class="text-4xl mb-4">{icon}</div>
	<h3 class="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
	<p class="text-gray-600">{description}</p>
</div>
