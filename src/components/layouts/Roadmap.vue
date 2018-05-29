<template>
	<b-jumbotron class="roadmap">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Roadmap</h1>
				</b-col>
				<b-col md="12">
					<div class="timeline">
					  <div class="timeline-container timeline-left">
					    <div class="timeline-content">
					      <h2>2 sq. 2018</h2>
					      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis atque, obcaecati saepe, aliquid dolore, sint.</p>
					    </div>
					  </div>
					  <div class="timeline-container timeline-right">
					    <div class="timeline-content">
					      <h2>3 sq. 2018</h2>
					      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis atque, obcaecati saepe, aliquid dolore, sint.</p>
					    </div>
					  </div>
					  <div class="timeline-container timeline-left">
					    <div class="timeline-content">
					      <h2>4 sq. 2018</h2>
					      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis atque, obcaecati saepe, aliquid dolore, sint.</p>
					    </div>
					  </div>
					  <div class="timeline-container timeline-right">
					    <div class="timeline-content">
					      <h2>1 sq. 2019</h2>
					      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis atque, obcaecati saepe, aliquid dolore, sint.</p>
					    </div>
					  </div>
					</div>
				</b-col>

			</b-row>
	    </b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'roadmap'
	}
</script>

<style lang="stylus" scoped>
	.roadmap
		background linear-gradient(270deg,#282a37,#303643)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px
			color #fff
			margin-bottom 30px

		.timeline
			position relative
			max-width 1200px
			margin 0 auto

			&::after
				content ''
				position absolute
				width 6px
				background-color white
				top 0
				bottom 0
				left 50%
				margin-left -3px

			.timeline-container
				padding 10px 40px
				position relative
				background-color inherit
				width 50%

				&::after
					content ''
					position absolute
					width 25px
					height 25px
					right -17px
					background-color white
					border 4px solid #ffb326
					top 15px
					border-radius 50%
					z-index 1

				.timeline-content
					padding 20px 30px
					background-color white
					position relative
					border-radius 6px

					h2
						font-weight 400

			.timeline-left
				left 0

				&::before
					content " "
					height 0
					position absolute
					top 22px
					width 0
					z-index 1
					right 30px
					border medium solid white
					border-width 10px 0 10px 10px
					border-color transparent transparent transparent white

				&::after
					right -12px

			.timeline-right
				left 50%

				&::before
					content " "
					height 0
					position absolute
					top 22px
					width 0
					z-index 1
					left 30px
					border medium solid white
					border-width 10px 10px 10px 0
					border-color transparent white transparent transparent

				&::after
					left -12px

	@media(max-width: 425px)
		.timeline::after
			left 31px

		.timeline-container
			width 70px
			padding-left 70px
			padding-right 25px

			&::before
				left 60px
				border medium solid white
				border-width 10px 10px 10px 0
				border-color transparent white transparent transparent

		.timeline-left::after, .timeline-right::after
			left 15px

		.timeline-right
			left 0%

	@media(max-width: 425px)
		.roadmap
			.title
				font-size 36px
				padding-bottom 20px

	@media(max-width: 375px)
		.roadmap
			.title
				font-size 30px
	
	@media(max-width: 320px)
		.roadmap
			.title
				font-size 25px

</style>