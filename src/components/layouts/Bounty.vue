<template>
	<b-jumbotron class="bounty">
	  <b-row>

          <b-col md="12">
          	<h1 class="title">Bounty-programs</h1>
          	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat enim ea illum atque cumque dolorem, ducimus, earum corporis provident. Explicabo ipsum, dolores adipisci voluptatem, officia suscipit odit quisquam sit.</p>
          </b-col>

        </b-row>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Bounty'
	}
</script>

<style lang="stylus" scoped>
	.bounty
		background linear-gradient(270deg,#ffd35a,#ffb326)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-size 60px
			letter-spacing 1.12px
			color #152038
			font-weight 300
			margin-bottom 30px

	@media(max-width: 1199px)
		.bounty
			.title
				font-size 50px

	@media(max-width: 425px)
		.bounty
			.title
				font-size 36px

	@media(max-width: 375px)
		.bounty
			.title
				font-size 30px

	@media(max-width: 320px)
		.bounty
			.title
				font-size 25px
</style>