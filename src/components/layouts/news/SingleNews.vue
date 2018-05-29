<template>
	<div class="single">
		<b-jumbotron class="single-news">
		  <b-row>

	          <b-col md="12">
	          	<h1 class="title">Отличительные особенности</h1>

	          	<b-row>
	          		<b-col md="12" class="news-block">
	                    <div class="news-item">
	                        <p>Повышение надежности и качества заключенных договоров контракта и надежности полученных результатов, упрощение взаимных расчетов, капитализация успеха.</p>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nobis dolorum eveniet obcaecati laudantium, saepe blanditiis sit culpa corporis beatae quisquam, quod repellendus. Animi omnis repellat, error ipsa assumenda libero!</p>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur fugiat voluptas quidem nemo, distinctio! Obcaecati deleniti facilis laborum. Doloremque, nam ipsum voluptas cupiditate alias laborum, quidem voluptatum vero. Tenetur, similique.</p>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, illum qui optio sint voluptatem, quae eum officia corporis ipsam rerum cum eos magni blanditiis! Nobis in maxime esse labore velit.</p>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore blanditiis deleniti, amet delectus perferendis eius sunt aliquid nam saepe rem corporis, obcaecati quo rerum magni ratione minima beatae quae.</p>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nam, enim neque numquam, quam odio quibusdam sed, perspiciatis hic eos deserunt culpa sequi minus consequuntur. Facilis, quo sit aut ipsa.</p>
	                    </div>
	                </b-col>

	          		<b-col md="12">
	          			<button class="btn btn-show-more">Рассказать ВКонтакте</button>
	          			<button class="btn btn-show-more">Твитнуть</button>
	          		</b-col>

	      		</b-row>
	          </b-col>

	        </b-row>
		</b-jumbotron>
		<Comments />
	</div>
</template>

<script>
	import Comments from './CommentsNews';

	export default {
		name: 'SingleNews',
		components: {
			Comments
		}
	}
</script>

<style lang="stylus" scoped>
	.single-news
		background #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 60px

		.title
			font-size 52px
			letter-spacing 1.12px
			color #152038
			font-weight 400
			margin-bottom 30px
			text-align center

		.btn-show-more
			background-color #051634
			color #fff
			font-weight lighter
			padding-right 25px
			padding-left 25px
			text-transform uppercase
			padding-top 8px
			padding-bottom 8px
			font-size 14px

		.news-block
			display flex
			justify-content space-between

			.news-item
				margin-bottom 25px
				width 100%
				border-bottom 1px solid #fbfbfb

		.news-block:nth-last-child(2)
			.news-item
				border-bottom none

	@media(max-width: 1199px)
		.news
			.title
				font-size 50px

	@media(max-width: 425px)
		.news
			.news-block
				flex-direction column

				.news-item
					width 100%

			.news-block:nth-last-child(2)
				.news-item:first-child
					border-bottom 1px solid #fbfbfb
			
			.title
				font-size 36px

	@media(max-width: 375px)
		.news
			button 
				width 100%

			.title
				font-size 30px

	@media(max-width: 320px)
		.news
			.title
				font-size 25px
</style>