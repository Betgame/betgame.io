<template>
	<b-jumbotron class="teams">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Team</h1>
				</b-col>

				<b-col lg="3" md="4" sm="6">
					<article class="card mb-2">
						<img src="../../assets/img/team/voroncov.jpg" class="card-img">
						<div class="card-body">
							<p class="card-text">Alexandr Voroncov</p>
							<p class="position">
								Founder, Full-stack developer
							</p>
						</div>
					</article>
				</b-col>

				<b-col md="12">
					<div class="resume">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
						<b-button size="sm" variant="primary">Join us</b-button>
					</div>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Teams'
	}
</script>

<style lang="stylus" scoped>
	.teams
		background-color #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-size 60px
			font-weight 300
			color #0F1118
			margin-bottom 30px

		.subtitle
			margin-bottom 40px

		.serokell-title
			margin-bottom 20px
			margin-top 30px

		.card
			border none
			background none
			font-size 18px
			color #0F1118
			margin-bottom 20px!important
			background-color #FCB332
			border-radius 0px

			img
				border-radius 0

			.card-text
				margin-bottom 0
				font-size 18px

			.position
				margin 0
				color #0F1118
				font-size 14px


		.resume
			background-color #FCB332
			width 100%
			padding 40px
			display flex
			justify-content space-between
			align-items center

			p
				letter-spacing 0.34px
				font-size 18px
				color #131C36

			button
				background-color #051634
				border 1px solid #051634
				color #fff
				font-weight lighter
				padding-right 25px
				padding-left 25px
				text-transform uppercase
				padding-top 8px
				padding-bottom 8px
				font-size 14px

	@media(max-width: 1199px)
		.teams
			.title
				font-size 50px

	@media(max-width: 767px)
		.teams
			.resume
				flex-direction column

				.text
					margin-bottom 20px

	@media(max-width: 425px)
		.teams
			.title
				font-size 36px

	@media(max-width: 375px)
		.teams
			.card
				.card-body
					text-align center

			.title
				font-size 30px

			.resume
				button 
					width 100%

	@media(max-width: 320px)
		.teams
			.title
				font-size 25px

			.resume
				padding 25px

				.text
					text-align center

</style>