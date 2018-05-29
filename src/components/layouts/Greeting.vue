<template>
	<b-jumbotron class="greeting">
		<b-row>
			<b-col md="12">
				<h1 class="title">BetGame - bets on game events</h1>

				<div class="timer-block">
					<p>Running the beta through</p>

					<div class="countdown">
						<div class="num">
							<span class="time" id="days">55</span>
							<span class="type">Days</span>
						</div>

						<div class="num">
							<span class="time" id="hours">18</span>
							<span class="type">Hours</span>
						</div>

						<div class="num">
							<span class="time" id="minutes">59</span>
							<span class="type">Minutes</span>
						</div>

						<div class="num">
							<span class="time" id="seconds">48</span>
							<span class="type">Seconds</span>
						</div>
					</div>

				</div>

				<button class="btn btn-buy" :disabled="true">Buy tokens</button>
				<button class="btn btn-buy" :disabled="true">Beta version</button>
			</b-col>

		</b-row>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Greeting',
		methods: {
			getTimeRemaining (endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date());
				var seconds = Math.floor((t / 1000) % 60);
				var minutes = Math.floor((t / 1000 / 60) % 60);
				var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
				var days = Math.floor(t / (1000 * 60 * 60 * 24));
				return {
					'total': t,
				    'days': days,
				    'hours': hours,
				    'minutes': minutes,
				    'seconds': seconds
				};
			},
			initializeClock (endtime) {
				let _this = this;

				function updateClock() {
					var t = _this.getTimeRemaining(endtime);
					document.getElementById('days').innerHTML = t.days;
					document.getElementById('hours').innerHTML = ('0' + t.hours).slice(-2);
					document.getElementById('minutes').innerHTML = ('0' + t.minutes).slice(-2);
					document.getElementById('seconds').innerHTML = ('0' + t.seconds).slice(-2);
					if (t.total <= 0) {
						clearInterval(timeinterval);
					}
				}
				updateClock();
				var timeinterval = setInterval(updateClock, 1000);
			}
		},
		mounted () {
			this.initializeClock(new Date(1531602000000));
		}
	}
</script>

<style lang="stylus" scoped>
	.greeting
		background linear-gradient(270deg,#ffd35a,#ffb326)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px

		.btn-buy
			background-color #051634
			color #fff
			font-weight lighter
			padding-right 25px
			padding-left 25px
			text-transform: uppercase
			padding-top 8px
			padding-bottom 8px
			font-size 14px

	.timer-block
		margin 40px 0

		.countdown
			display flex
			align-items center

			.num
				display flex
				flex-direction column
				padding 0 10px

			.num:first-child
				padding-left 0px

			.num:last-child
				padding-right 0px

			.time
				background #333947
				padding 10px
				color #fff
				border-radius 4px
				width 65px
				height 65px
				font-size 30px
				letter-spacing 2px
				text-align center
				margin-bottom 5px

			.type 
				text-align center

			.separator
				padding 0 5px
	.anime
		position absolute
		.path
			stroke-width 0.5

	@media(max-width: 991px)
		.greeting
			.title
				font-size 36px

			.timer-block
				margin 26px 0

				.countdown
					.type
						font-size 14px

					.time
						width 55px
						height 55px
						padding 8px
						font-size 26px

	@media(max-width: 767px)
		.greeting
			.row
				flex-direction column-reverse

				img
					margin-bottom 30px

	@media(max-width: 375px)
		.greeting
			button
				width 100%
			
			.row
				img 
					margin-bottom 15px

			.timer-block
				.countdown
					justify-content space-between

					.num
						padding 5px

	@media(max-width: 320px)
		.greeting
			margin-top 30px

			.title
				font-size 30px
			
			.timer-block
				.count-down
					.num
						padding 0

</style>