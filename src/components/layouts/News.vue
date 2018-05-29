<template>
	<b-jumbotron class="news">
		<b-container>
			<b-row>

				<b-col md="12" class="oneline-header">
					<h1 class="title">News</h1>
				</b-col>

				<b-col lg="3" md="4" sm="6">
					<router-link :to="{ path: '/news/1' }">
						<b-card  img-src="http://via.placeholder.com/300x300" tag="article" class="mb-2">
					    	<p class="card-text">Lorem ipsum dolor sit amet,</p>
					    	<p class="date">11 Mar, 2018</p>
					    </b-card>
					</router-link>
				</b-col>
				
				<b-col md="12" class="show-more">
					<b-button variant="outline-warning">
		                Show more
		            </b-button>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'News'
	}
</script>

<style lang="stylus" scoped>
	.news
		background-color #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.show-more
			display flex
			justify-content center

		.oneline-header
			display flex
			justify-content space-between
			padding-bottom 50px

			.title
				font-size 60px
				font-weight 300
				color #0F1118
				margin 0

			.btn
				align-self center
				background-color #D8D8DC
				border 1px solid #D8D8DC
				color #202226
				padding 0.375rem 1.75rem
				font-weight lighter
				text-transform uppercase
				font-size 14px

		.card
			border none
			background none
			font-size 18px
			color #0F1118

			img
				border-radius 0

			.date
				margin 0
				color #AAADB6
				font-size 14px

		.card:hover
			background-color #fff
			cursor pointer
			box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)

	@media(max-width: 991px)
		.news
			.oneline-header
				.title
					font-size 50px

	@media(max-width: 425px)
		.news
			.oneline-header
				.title
					font-size 36px
					
				padding-bottom 30px

	@media(max-width: 375px)
		.news
			.oneline-header
				.title
					font-size 36px

			.show-more
				button 
					width 100%

	@media(max-width: 320px)
		.news
			.oneline-header
				.title
					font-size 25px

</style>