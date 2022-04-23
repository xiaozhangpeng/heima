<template>
	<view class="cart">
		<!-- <view class="check_button"> 
			<image src="../../static/tick.svg" mode=""></image>
		</view> -->
		<view class="pic">
			<image src="../../static/logo.jpg" mode=""></image>
		</view>
		<view class="info">
			<text class="title">2018春季外套</text>
			<text class="title">2018春季新品</text>
			<text class="price">￥59.00~￥112.00</text>
		<!-- 	<text class="number">数量:1个</text> -->
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.cart{
		display: flex;
		border-bottom: 1px solid #eee;
		.pic{
			width: 180rpx;
			height: 230rpx;
			margin-left:30rpx;
			margin-top:30rpx;
			
			
			image{
				width: 100%;
				height: 90%;
				border-radius: 10%;
			}
		}
		.info{
			display: flex;
			width: 500rpx;
			height:230rpx ;
			flex-direction: column;
			margin-top:18rpx;
			// padding: 20rpx;
			// background-color: #007AFF;
			.price{
				color:$shop-color;
				margin-top:10rpx
			}
			text{
				margin-left: 30rpx;
				padding: 15rpx;
			}
		}
	}
</style>
