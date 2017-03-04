<template>
	<div class="footer">
		<span>{{status}}</span>
		<em class="time">{{time}} s</em>
	</div>
</template>
<style lang="scss">
	.footer{
		padding:20px 0 10px;
		position:relative;
		.time{
			position:absolute;
			right:10px;
			top:50%;
			transform:translateY(-50%);
			color:#000;
			font-size:16px;
		}
		text-align:center;
		span{
			text-align:center;
			font-size:24px;
			color:red;
		}
	}
</style>
<script>
	import {mapState} from 'vuex'
	export default{
		name:'bottom',
		computed:{
			...mapState([
				'time',
				'status'
			])
		}
	}
</script>