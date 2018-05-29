<template>
	<footer>
		<b-container>
			<b-row>
				<b-col lg="6" md="5">
					<div class="info">
						<p>BetGame.io © 2018</p>
						<a href="#">Terms and Conditions</a>
					</div>
				</b-col>
				<b-col lg="6" md="7">
					<div class="actions">
						<div class="social-icons">
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/telegram.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/reddit.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/twitter.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
					<ul class="menu">
						<li>
							<a href="#">Main</a>
						</li>
						<li>
							<a href="#">News</a>
						</li>
						<li>
							<a href="#">Buy tokens</a>
						</li>
						<li>
							<a href="#">BOunty</a>
						</li>
						<li>
							<a href="#">Beta version</a>
						</li>
					</ul>
				</b-col>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="stylus" scoped>
	footer
		padding 3em 0

		.info
			p
				margin-top 1em
				margin-bottom 0
				color #96969F
				font-size 12px

			a
				margin-top 0.5em
				margin-bottom 0
				color #96969F
				font-size 12px
				text-decoration underline

		.menu
			list-style none
			display flex
			justify-content flex-end
			padding-left 0

			li
				font-size 14px
				letter-spacing 0.6px
				margin 0 10px

				a
					color #96969F

			li:last-child
				margin 0

		.actions
			display flex
			justify-content flex-end
			margin-bottom 20px

			.social-icons
				display flex
				justify-content space-between

				.icon-item
					width 40px
					height 40px
					margin 0 10px
					display flex
					justify-content center
					align-items center
					text-align center

					a
						img
							width 50%

				.icon-item:first-child
					margin 0

				.icon-item:last-child
					margin 0

		@media(max-width: 991px)
			.actions
				.social-icons
					.icon-item
						margin 0

		@media(max-width: 575px)
			.menu
				display none

		@media(max-width: 375px)
			.actions
				flex-direction column-reverse
				align-items center

				.subscribe
					margin-top 15px
					margin-bottom 15px

				.social-icons
					padding-left 15px

			.info
				display flex
				flex-direction column
				align-items center
			
</style>