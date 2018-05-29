<template>
	<b-jumbotron class="comments">
		<b-row>
			<b-col md="12">
				<h1 class="title">Комментарии к записи:</h1>
				<div class="divider"></div>
			</b-col>
			<div class="comments-data">
				<b-col>
					<b-card class="comment-card">
						<b-media>
							<b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
							<h5 class="mt-0">Никнейм</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum, illum nulla recusandae eveniet sequi nobis quaerat ut pariatur corrupti dicta obcaecati, assumenda similique aliquam sint ullam atque nostrum magnam?</p>
						</b-media>
					</b-card>
				</b-col>
				<b-col>
					<b-form-textarea placeholder="Ваш комментарий" :rows="3" :max-rows="6">
					</b-form-textarea>
					<b-button type="submit" variant="warning">Отправить</b-button>
				</b-col>
			</div>
		</b-row>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'commentsNews'
	}
</script>

<style lang="stylus" scoped>
	.comments
		background #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 60px
		padding 1.5em

		.comments-data
			width 100%

		.comment-card
			margin-bottom 20px

		.btn-warning
			margin-top 20px
			color #212529
			background-color #ffc107
			border-color #ffc107

		.title
			font-size 26px
			letter-spacing 1.12px
			color #152038
			font-weight 400
			margin-bottom 30px
			text-align left
			margin-bottom 8px

		.divider
			width 70px
			height 2px
			background-color #000
			opacity 0.3
			margin-bottom 30px

		.price
			p
				margin 10px 0 0 0

	@media(max-width: 1199px)
		.news
			.title
				font-size 50px

	@media(max-width: 425px)
		.news
			.title
				font-size 36px

	@media(max-width: 375px)
		.news
			.title
				font-size 30px

	@media(max-width: 320px)
		.news
			.title
				font-size 25px
</style>