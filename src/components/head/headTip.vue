<template>
	<div class="header ">
		<div class="sign flex vertical">
			 <p><router-link to="/sign">记录板</router-link></p>
		</div>
		<div class="match flex vertical">
			<p>尚未匹配</p><span>{{unMached}}</span>
		</div>
		<div class="score flex vertical">
			<p>最高分</p><span>{{highestSpeed}}</span>
		</div>
	</div>
</template>
<style lang="scss">
	.header{
		display:-webkit-box;
		display:-moz-box;
		-webkit-box-align:center;
		-webkit-box-pack:justify;
		color:#fff;
		>div{
			height:80px;
			text-align:center;
			font-size:16px;
			border-radius:4px;
			>p{
				line-height:30px;
			}
			span{
				display:block;
			}
		}
		.sign{
			background:#399;
			a{color:#fff;}
		}
		.match{
			background:#FF0000;
			margin:0 20px;
		}
		.score{background:#047;}
	}
	.flex{
		-webkit-box-flex:1;
		display:block;
		width:100%;
	}
	.vertical{
	 	display: -webkit-box;
	  	display: -moz-box;
	  	display: -ms-flexbox;
	 	display: -webkit-flex;
	  	display: flex;
	  	-webkit-box-orient: vertical;
	  	-webkit-box-direction: normal;
	  	-moz-box-orient: vertical;
	  	-moz-box-direction: normal;
	  	-webkit-flex-direction: column;
	 	 -ms-flex-direction: column;
	  	flex-direction: column;
	  	
	  	-webkit-box-align:center;
	  	-webkit-box-pack:center;
	  	justify-content: center;
	  /*	align-items:center;*/
	}
	.horizontal{
		  display: -webkit-box;
		  display: -moz-box;
		  display: -ms-flexbox;
		  display: -webkit-flex;
		  display: flex;
		  -webkit-box-orient: horizontal;
		  -webkit-box-direction: normal;
		  -moz-box-orient: horizontal;
		  -moz-box-direction: normal;
		  -webkit-flex-direction: row;
		  -ms-flex-direction: row;
		  flex-direction: row
	}
</style>
<script>
	import {mapState} from 'vuex'
	
	export default{
		name:'headTip',
		computed:{
			...mapState(['unMached','highestSpeed'])
		}
	}
</script>