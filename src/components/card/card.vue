<template>
	<div class="box" :class="{active:option.flipped}">
		<img class="front" src="../../../static/img/front.jpg">
		<img class="back" :src="option.img">
	</div>
</template>
<script>
	export default {
		name: 'card',
		props: {
			option: {
				type: Object,
				default() {
					return {
						flipped: false,
						img: ''
					};
				}
			}
		}
	}
</script>
<style>
	.box {
		width:100px;
		height:100px;
		transition: 1.0s all ease;
		transform: perspective(900px) rotateY(0deg) ;
		transform-style: preserve-3d;
		
		float:left;
	}
	
	.box img {
		width: 100%;
		height: 100%;
		display:block;
		position: absolute;
		left: 0;
		top: 0;
		border-radius:6px;
	}
	
	.front {
		
		z-index: 2;
		backface-visibility: hidden;
	}
	
	.back {
		
		z-index: 1;
		transform: scale(-1, 1);
	}
	
	div.active {
		transform: perspective(800px) rotateY(180deg) ;
	}
	
</style>