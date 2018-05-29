<template>
	<div class="index">
		<Navbar />
		<b-container>
			<Greeting />
			<About />
			<Solutions />
			<Roadmap />
			<Saledetail />
			<Bounty />
			<Teams />
			<Distribution />
			<News />
			<Footer />
		</b-container>
	</div>
</template>

<script>
import Navbar from './layouts/Navbar';
import Greeting from './layouts/Greeting';
import About from './layouts/About';
import Solutions from './layouts/Solutions';
import Roadmap from './layouts/Roadmap';
import Saledetail from './layouts/Saledetail';
import Bounty from './layouts/Bounty';
import Teams from './layouts/Teams';
import Distribution from './layouts/Distribution';
import News from './layouts/News';
import Footer from './layouts/Footer';

export default {
	name: 'Index',
	components: {
		Navbar,
		Greeting,
		About,
		Solutions,
		Roadmap,
		Saledetail,
		Bounty,
		Teams,
		Distribution,
		News,
		Footer
	}
}
</script>