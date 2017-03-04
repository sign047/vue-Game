<template>
	<div class="cardlist clear">
		<card v-for="item in cards" :option="item" @click.native="turn(item)" ></card>
	</div>
</template>
<style lang="scss">
	.cardlist {
		height: 100%;
		width: 100%;
		&>div {
			margin-top: 10px;
		}
		&>div:nth-child(3n+2) {
			margin: 10px 15px 0;
		}
	}
	
	.clear {
		overflow: hidden;
		&:after {
			content: '', ;
			clear: both;
		}
	}
</style>
<script>
	import card from './card';
	import { mapGetters, mapActions, mapState } from 'vuex'
	export default {
		name: 'cardlist',
		components: { card },
		data() {
			return {
				second: null
			}
		},
		computed: {
			...mapGetters(['cards']),
			...mapState(['status','unMached'])
		},
		methods: {
			...mapActions([
				'flip',
				'updateStatus',
				'match',
				'back'
			]),
			turn(card) {
				if(card.flipped) return;
				//第一次翻牌
				if(this.status == 'READEY') {
					this.updateStatus('PLAYING');
				}
				this.flip(card);
				//开始游戏了
				if(!this.second) {
					this.second = card;
				}
				//不一致
				if(this.second.num!=card.num&& this.second.name != card.name) {
					let second=this.second;
					setTimeout(() =>{
		               this.back([second,card]);
		            }, 1000);
					this.second=null;
					return;
				}
				//匹配了
				if(this.second.num!=card.num && this.second.name ==card.name) {
					this.match();
					this.second=null;
					if(this.unMached==0) this.updateStatus('PASS');
					
					return;
				}
			}
		}
	}
</script>