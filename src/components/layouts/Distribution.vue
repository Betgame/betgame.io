<template>
	<b-jumbotron class="distribution">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Distribution of tokens</h1>
				</b-col>

				<b-col lg="12" md="12" class="legend">
					<b-list-group class="distribution-list">
					  <b-list-group-item>
					    <div class="badge badge-darkblue"></div>
					    88% Sale on the exchange
					  </b-list-group-item>
					  <b-list-group-item>
					  	<div class="badge badge-green"></div>
					    10% On the development of the project
					  </b-list-group-item>
					  <b-list-group-item>
					  	<div class="badge badge-yellow"></div>
					    2% Bounty
					  </b-list-group-item>
					</b-list-group>
				</b-col>

			</b-row>
	    </b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Distribution'
	}
</script>

<style lang="stylus" scoped>
	.distribution
		background linear-gradient(270deg,#282a37,#303643)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px
			color #fff
			padding-bottom 50px

		.description
			p
				color #fff
				font-size 16px
				letter-spacing 0.4px
				line-height 22px

		.chart
			display flex
			text-align center
			justify-content center
			align-items center

			img
				width 100%

			.stats
				position absolute
				font-size 1.5em
				font-weight lighter

				.count, .type
					color #fff
					letter-spacing 2px

				.separator
					width 100%
					height 2px
					background #fff

		.distribution-list

			.list-group-item
				background none
				border none
				color #fff
				display flex
				align-items center
				justify-content flex-start

				.badge
					min-width 37px
					min-height 37px
					display block
					border-radius 50%
					margin-right 20px

					&.badge-darkblue
						background-color #3a87ff
					&.badge-green
						background-color #00b271
					&.badge-lightblue
						background-color #00a3e1
					&.badge-yellow
						background-color #ffb419

	@media(max-width: 991px)
		.distribution
			.description
				margin-top 40px

			.legend
				align-self center

	@media(max-width: 425px)
		.distribution
			.title
				font-size 36px
				padding-bottom 20px

			.legend
				margin-top 20px

	@media(max-width: 375px)
		.distribution
			.title
				font-size 30px

			.description
				margin-top 20px

				button
					width 100%
	
	@media(max-width: 320px)
		.distribution
			.title
				font-size 25px

</style>