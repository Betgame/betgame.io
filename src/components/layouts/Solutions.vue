<template>
	<b-jumbotron class="solutions">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Suggested solutions</h1>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

				<b-col lg="4" md="6">
					<div class="solution-item">
						<span class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis sint ipsa ut fugit.</span>
					</div>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Solutions'
	}
</script>

<style lang="stylus" scoped>
	.solutions
		background-color #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			padding-bottom 30px
			font-size 60px
			font-weight 300
			color #0F1118


	.solution-item
		display flex
		margin-bottom 4em
		align-items center

		img
			max-height 46px
			max-width 46px

		.text
			margin-left 25px

	@media(max-width: 991px)
		.solutions
			.title
				font-size 50px

	@media(max-width: 425px)
		.solutions
			.title
				font-size 36px	

	@media(max-width: 375px)
		.solutions
			.title
				font-size 30px	

	@media(max-width: 320px)
		.solutions
			.title
				font-size 25px

		.solution-item
			flex-direction column
			margin-bottom 2em

			.text
				margin-left 0
				text-align center
				padding-top 15px

</style>