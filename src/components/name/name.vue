<style>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	
	.mark {
		
		z-index: 10086;
		height: 100%;
		width: 100%;
		opacity: 1;
		visibility: visible;
		transition: all ease 0.3s;
		background: rgba(0, 0, 0, .6);
	}
	
	.model {
		z-index: 1008611;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		width: 88%;
		height: auto;
		transition: all .3s;
		text-align: center;
		visibility: visible;
		opacity: 1;
		border-radius: 4px;
		height: 200px;
	}
	
	.cont {
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
		/*-webkit-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		-moz-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		-ms-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);*/
		background: #399;
	}
	/*.show {
		visibility: visible;
		opacity: 1;
		-webkit-transform: translate3d(-50%, -50%, 0) rotateX(0deg) perspective(900px);
		-moz-transform: translate3d(-50%, -50%, 0) rotateX(0deg) perspective(900px);
		-ms-transform: translate3d(-50%, -50%, 0) rotateX(0deg) perspective(900px);
		transform: translate3d(-50%, -50%, 0) rotateX(0deg) perspective(900px);
	}
	*/
	
	.show~.mark {
		opacity: 1;
		visibility: visible;
	}
	
	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: 1px solid #000;
		z-index: 222;
	}
	
	.over{
		overflow: hidden !important;
	}
	
	ul li {
		line-height: 50px;
	}
	
	.overley {
		position: absolute;
		left: 0;
		top: 0;
		/*height:300px;
		width:300px;*/
		/*transform:translate3d(-50%,-50%,0);
		-webkit-transform:translate3d(-50%,-50%,0);*/
	}
	
	.roll-enter-active,
	.roll-leave-active {
		transition: opacity .5s
	}
	
	.roll-enter,
	.roll-leave-active {
		-webkit-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		-moz-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		-ms-transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		transform: translate3d(-50%, -50%, 0) rotateX(-70deg) perspective(900px);
		background: #399;
	}
	.nametxt{
		display:-webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		-webkit-box-orient:vertical;
		height:100%;
		width:100%;
	}
	.nametxt input{
		width:74%;
		height:20px;
		border:1px solid #ccc;
		font-size:14px;
		line-height:20px;
		padding:4px 0;
		display:block;
		border-radius:4px;
		text-indent:5px;
		margin-bottom:4px;
	}
	button{
		background:lightgreen;
		width:20%;
		display:block;
		border-radius:4px;
		border:none;
		outline:none;
		margin-top:6px;
	}
	.nametxt p{
		color:#fff;
		font-size:20px;
		line-height:30px;
	}
</style>
<template>
	<div class="overley mark" v-if="isName">
		<transition name="roll">
			<div class="model cont" v-if="isName">
				<a href="javascript:;" class="close" @click="close"></a>
				<div class="nametxt">
					<input type="text" v-model="name" placeholder="输入昵称" />
					<p>您的成绩为</p>
					<p>{{time}}</p>
					<button @click="save">保存信息</button>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	
	import { mapActions, mapState, mapGetter } from 'vuex'
	export default {
		name: 'name',
		data() {
			return {
				name:''
			}
		},
		created() {
			if(this.isMobile) { //手机
				document.addEventListener('touchmove', this.none, false);
			} else {
				document.querySelector('body').className="over";
				console.log(document.querySelector('#app'));
			}
		},
		methods: {
			...mapActions(['getRank','showName']),
			none: function(ev) {
				ev.preventDefault();
			},
			close() {
				if(this.isMobile) { //手机
					document.removeEventListener('touchmove', this.none, false);
				} else {
					document.querySelector('body').className="";
				}
				this.showName();
			},
			save() {
				this.setRank('/data/sign',{name:this.name,code:this.time});
			}
		},
		computed: {
			...mapState(['isName','time']),
			isMoble() {
				var ua = navigator.userAgent;
				var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
					isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
					isAndroid = ua.match(/(Android)\s+([\d.]+)/),
					isMobile = isIphone || isAndroid;
				return isMoble;
			}
		}

	}
</script>