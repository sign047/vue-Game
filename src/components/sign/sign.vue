<style>
	.head,
	.showlist li {
		display: -webkit-box;
		-webkit-box-align: center;
		-webkit-box-pack: center;
	}
	
	.head>p {
		display: box;
		width: 100px;
		text-align: center;
		color: #399;
		font-size:18px;
		text-shadow: 0px 0px 1px #396;
	}
	
	.head {
		margin-top: 10px;
	}
	
	.showlist {
		margin-bottom: 10px;
	}
	
	.showlist li {
		margin-top: 10px;
	}
	
	.showlist li p {
		width: 100px;
		text-align: center;
		display: box;
		color: #000;
		font-size:16px;
		text-shadow: 0px 0px 1px #999;
	}
	[v-cloak]{
		display:none;
	}
</style>
<template>
	<div v-cloak>
	<div class="head">
		<p>排名</p>
		<p>名字</p>
		<p>成绩</p>
	</div>
	<ul class="showlist">
		<li v-for="(item,index) in rank">
			<p>{{index+1}}</p>
			<p> {{item.name}}</p>
			<p>{{item.code}}</p>
		</li>
	</ul>
</div>

</template>
<script>
	import { mapGetters, mapActions, mapState } from 'vuex'
	export default {
		name: 'sign',
		data() {
			return {
				a: 1
			}
		},
		created() {
			this.getRank('/data/rank')
		},
		methods: {
			...mapActions(['getRank'])
		},
		computed: {
			...mapState(['rank'])
		}
	}
</script>