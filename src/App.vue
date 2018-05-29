<template>
	<div id="app">
		<a href="https://telegram.org" target="_blank">
			<div class="telegram-icon">
				<img src="./assets/img/social/tg_white.svg" alt="" />
			</div>
		</a>
		<router-view />
	</div>
</template>

<script>
	export default {
	  name: 'App'
	}
</script>

<style>
	body {
	    background-color: #ededf1;
	    padding-top: 80px;
	}
	.telegram-icon {
		box-shadow: 0px 15px 5em 0px rgba(0,0,0,0.3);
		background-color: #ffb326;
		width: 55px;
		height: 55px;
		border-radius: 50%;
		position: fixed;
		right: 20px;
		bottom: 20px;
	}
</style>