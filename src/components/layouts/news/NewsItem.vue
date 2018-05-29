<template>
	<div class="news">
		<b-container>
			<Navbar />
			<SingleNews />
		</b-container>
	</div>
</template>

<script>
	import Navbar from '../Navbar';
	import SingleNews from './SingleNews';

	export default {
		name: 'newsItem',
		components: {
			Navbar,
			SingleNews
		}
	}
</script>