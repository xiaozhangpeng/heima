<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(good,index) in goods" :key="index" @click="itemClick(good.iid)">
			<image :src="good.show.img"></image>
			<view class="price">
				<text>￥{{good.price}}</text>
				<text>￥3000.00</text>
			</view>
			<view class="name">
				{{good.title}}
			</view>
		</view>
	
	</view>
</template>

<script>
	export default({
		props:['goods'],
		methods:{
			itemClick(iid){
				console.log(iid);
				this.$emit("goodsClick",iid);
			}
		}
	})
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
		
	}
	.goods_item {
		background: #fff;
		margin: 10rpx 0;
		width: 355rpx;
		padding: 15rpx;
		box-sizing: border-box;
	
	
		image {
			width: 80%;
			height: 200px;
			display: block;
			margin: auto;
		}
	
		.price {
			color: $shop-color;
			font-size: 35rpx;
	
			text:nth-child(2) {
				color: #ccc;
				font-size: 27rpx;
				margin-left: 7rpx;
				text-decoration: line-through
			}
		}
	
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom: 10px;
			padding-top: 10px;
		}
	}
	
</style>
