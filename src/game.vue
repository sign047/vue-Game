<template>
	<div >
		<headtip></headtip>
		<cardlist></cardlist>
		<bottom></bottom>
	</div>
</template>

<script>
	import headtip from 'components/head/headTip'
	import bottom from 'components/bottom/bottom'
	import cardlist from 'components/card/cardlist'
	import { mapActions } from 'vuex'
	export default {
		name: 'game',
		components: {
			headtip,
			bottom,
			cardlist
		},
		methods: {
			...mapActions([
				'updateStatus',
				'updateHighestSpeed'
			])
		},
		created() {
			this.updateStatus('READEY');
			this.updateHighestSpeed();
		}
	}
</script>

<style lang="scss">
	body {
		-moz-user-select: none;
		/*火狐*/
		-webkit-user-select: none;
		/*webkit浏览器*/
		-ms-user-select: none;
		/*IE10*/
		-khtml-user-select: none;
		/*早期浏览器*/
		user-select: none;
		
		overflow-y:auto;
		-webkit-overflow-scrolling: touch;
	}
	#app {
		width: 330px;
		min-height: 580px;
		border: 4px solid #BDBDBD;
		border-radius: 2px;
		background-color: #faf8ef;
		padding: 10px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		position:relative;
		
	}
	.go-enter-active,
	.go-leave-active {
		transition: all .1s;
	}
	
	.go-enter,
	.go-leave-active {
		opacity: 0;
		transform: translate3d(40px, 0, 0);
	}
</style>