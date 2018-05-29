<template>
	<b-jumbotron class="about">
		<b-container>
			<b-row>
				<b-col lg="6" md="12" class="description-block">
					<img src="http://via.placeholder.com/700x350" alt="" width="100%">
				</b-col>
				<b-col lg="6" md="12" class="about-block">
					<h1>About us</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, accusantium? Iusto dolore dolorum tempora labore, nemo asperiores architecto voluptates, dolores amet nostrum, cum, accusantium quasi eveniet reiciendis corporis! Soluta, pariatur.</p>
				</b-col>
			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'About'
	}
</script>

<style lang="stylus" scoped>
	.about
		background linear-gradient(270deg,#282a37,#303643)
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0
		margin-top 60px

		.description-block
			h3
				font-weight 300
				font-size 18px
				letter-spacing 1.34px
				color #ECECF0
				text-transform uppercase

		.about-block
			h1
				font-size 60px
				color #FBB841
				font-weight 300
				letter-spacing 1.12px

			p
				font-weight 300
				font-size 16px
				letter-spacing 0.4px
				color #fff
				padding 1.5em 0

	@media(max-width: 1199px)
		.about
			.about-block
				h1
					font-size 50px

	@media(max-width: 991px)
		.about
			.description-block
				margin-bottom 30px

	@media(max-width: 425px)
		.about
			.about-block
				h1
					font-size 36px

				.btn:last-child
					margin-top 15px

	@media(max-width: 375px)
		.about
			.about-block
				button 
					width 100%

				h1
					font-size 30px

	@media(max-width: 320px)
		.about
			.description-block
				h3
					font-size 14px

			.about-block
				h1
					font-size 25px

</style>