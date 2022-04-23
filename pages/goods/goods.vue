<template>
	<view class="">
		<goodsList :goods="goods" @goodsClick="goGoodsClicks"></goodsList>
	</view>
</template>

<script>
	import goodsList from "../../components/goods_list/goods_list.vue"
	export default({
		data(){
			return{
				goods:[],
				pageIndex:1
			}
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getGoods()
		},
		methods:{
			// 获取商品数据
			async getGoods(callBack) {
				const res = await this.$myRequest({
					url: '/home/data?type=pop&page='+this.pageIndex,
				})
				console.log(res.data);
				// 浅拷贝
				this.goods = [...this.goods,...res.data.data.list];
				// 判断有callBack，才执行
				callBack&&callBack()
			},
			// 点击跳转到商品详情页面
			goGoodsClicks(iid)
			{
				uni.navigateTo({
					url:'/pages/goods_detail/goods_detail?iid='+iid
				})
			}
			
		},
		// 触底回调函数
		onReachBottom() {
			this.pageIndex+=1;
			console.log("触底了");
			this.getGoods();
			
		},
		onPullDownRefresh() {
			console.log("下拉刷新");
			// 可以获取0-10的随机数
			this.pageIndex=Math.ceil(Math.random()*10);
			console.log(this.pageIndex)
			this.goods=[]
			setTimeout(()=>{
				this.getGoods(()=>{
					uni.stopPullDownRefresh()
				});
			},1000)
		},
		
	})
</script>

<style>
	
</style>
