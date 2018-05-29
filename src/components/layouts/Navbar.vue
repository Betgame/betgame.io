<template>
	<b-navbar toggleable="md" variant="info" class="navbar" fixed="top">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<router-link :to="{ path: '/' }" class="logo" exact tag="b-navbar-brand">
			<span>Betgame</span>
		</router-link>

		<b-collapse is-nav id="nav_collapse">

			<b-navbar-nav>
				<b-nav-item href="#" class="active">Main</b-nav-item>
				<b-nav-item href="#">About us</b-nav-item>
				<b-nav-item href="#">Solutions</b-nav-item>
				<b-nav-item href="#">Roadmap</b-nav-item>
				<b-nav-item href="#">Sale details</b-nav-item>
				<b-nav-item href="#">Bounty</b-nav-item>
				<b-nav-item href="#">Team</b-nav-item>
				<b-nav-item href="#">Distribution</b-nav-item>
				<b-nav-item href="#">News</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">

				<b-button size="sm" class="login-btn" variant="warning">Beta</b-button>

			</b-navbar-nav>

		</b-collapse>
	</b-navbar>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style lang="stylus" scoped>
	.navbar
		background-color #fff!important
		height 80px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,0.3)

		.logo
			img
				width 80%

		.login-btn
			padding 0.25rem 1.5rem
			font-size 16px

		.language-dropdown
			padding-left 30px

		.navbar-nav
			.nav-link
				color #0F1118
				font-weight 400
				padding-right 0.6rem
				padding-left 0.6rem

			.nav-item 

				&.active
					.nav-link
						padding-bottom 0
						margin-bottom 0
						border-bottom 3px solid #fec108
						padding-left 0.1rem
						padding-right 0.1rem
						margin-right 0.5rem
						margin-left 0.5rem

				&:not(.active)
					.nav-link:hover
						padding-bottom 0
						margin-bottom 0
						border-bottom 3px solid #fec108
						padding-left 0.1rem
						padding-right 0.1rem
						margin-right 0.5rem
						margin-left 0.5rem

	@media(max-width: 991px)
		.navbar
			.navbar-nav
				.nav-item:first-child
					.nav-link
						margin-left 0

			.navbar-brand
				margin-right 0

	@media(max-width: 767px)
		.navbar
			.navbar-brand
				margin-right 0
				text-align right

</style>