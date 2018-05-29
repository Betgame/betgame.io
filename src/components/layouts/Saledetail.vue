<template>
	<b-jumbotron class="saledetail">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">
						Details of selling tokens
					</h1>
					<p>Commission from the transaction: 1%</p>
					<p>For bounty: 500 tokens / participant</p>
					<p>Link to the token: <a href="https://wavesexplorer.com/tx/4efh3kkvzqPgALLVjgk7XPjnXHsuUCgDwHCnPfLcg6VN">click</a></p>
					<b-table striped :items="items"></b-table>
				</b-col>

			</b-row>
	    </b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'saledetail',
		data () {
			return {
				items: [
					{ Emission: '100 million', Price: '100 BETG = 1 USD', Softcap: 'Without softcap', Hardcap: '1.000.000 USD', Platform: 'Waves' }
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.saledetail
		background #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px
			color #0F1118

	@media(max-width: 425px)
		.saledetail
			.title
				font-size 36px
				padding-bottom 20px

	@media(max-width: 375px)
		.saledetail
			.title
				font-size 30px
	
	@media(max-width: 320px)
		.saledetail
			.title
				font-size 25px

</style>