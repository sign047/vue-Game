<template>
	<div id="app">
		<!--<transition name="go">-->
			<name></name>
	 		<router-view></router-view>
		<!--</transition>-->
	</div>
</template>
<script>
	import name from 'components/name/name.vue'
	
	export default{
		name:'app',
		components:{
			name
		}
	}
</script>

