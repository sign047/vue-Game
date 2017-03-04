import axios from 'axios'

export default{
	updateStatus(state,st){
		state.status=st;
	},
	counting(state){
		state.time++;
	},		
	updateHighestSpeed(state) {
		axios.post('/data/rank')
		.then(res => {
			let rank=res.data.data;
			let last=rank[rank.length-1];
			let first=rank[0];
			state.highestSpeed=last.code;
		})
		.catch((err) => {
			alert(err)
		})
   },
   match(state){
   		state.unMached--;
   },
   back(state,arr){
   		arr.forEach((item) => item.flipped=false);
   },
   flip(state,card){
   	 let mark= state.list.find((val) => val.num==card.num);
   	 mark.flipped=true;
   },
   getRank(state,data){
   		state.rank=data;
   },
   setRank(state){
   	
   },
   showName(state){
   		state.isName=!state.isName
   }
}
