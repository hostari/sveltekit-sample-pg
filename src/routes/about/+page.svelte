<script lang="ts">
	import { Header } from '$lib';
</script>

<Header title="About" subtitle="SvelteKit + Supabase deployment sample for Navegante" />

<div class="container mx-auto px-4 py-12">
	<div class="max-w-3xl mx-auto">
		<div class="bg-white rounded-lg shadow-lg p-8 mb-8">
			<h2 class="text-3xl font-bold text-gray-800 mb-6">📖 Digital Guestbook</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				Welcome to our digital guestbook! This is a SvelteKit + Supabase deployment sample for Navegante,
				demonstrating a modern take on the classic website guestbook where visitors can leave messages,
				share their thoughts, and connect with others from around the world.
			</p>

			<div class="grid md:grid-cols-2 gap-8 mb-8">
				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-3">🌟 Features</h3>
					<ul class="space-y-2 text-gray-700">
						<li>✨ Leave personalized messages</li>
						<li>🌍 Share your location</li>
						<li>🔗 Include your website</li>
						<li>📧 Optional email contact</li>
						<li>📱 Mobile-friendly design</li>
						<li>⚡ Real-time updates</li>
					</ul>
				</div>

				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-3">🛠️ Built With</h3>
					<ul class="space-y-2 text-gray-700">
						<li><strong>SvelteKit</strong> - Full-stack framework</li>
						<li><strong>TypeScript</strong> - Type safety</li>
						<li><strong>Tailwind CSS</strong> - Modern styling</li>
						<li><strong>Supabase</strong> - Database & real-time</li>
						<li><strong>Bun</strong> - Fast package manager</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
			<h3 class="text-2xl font-semibold text-gray-800 mb-4">🚀 Perfect for Learning</h3>
			<p class="text-gray-700 mb-4">
				This guestbook demonstrates modern web development practices and serves as an excellent
				foundation for learning SvelteKit. It showcases:
			</p>
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h4 class="font-semibold text-gray-800 mb-2">Frontend</h4>
					<ul class="text-sm text-gray-700 space-y-1">
						<li>• Component-based architecture</li>
						<li>• Reactive forms with validation</li>
						<li>• Server-side rendering (SSR)</li>
						<li>• Progressive enhancement</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold text-gray-800 mb-2">Backend</h4>
					<ul class="text-sm text-gray-700 space-y-1">
						<li>• Type-safe API routes</li>
						<li>• Database integration</li>
						<li>• Form actions & validation</li>
						<li>• Error handling</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
