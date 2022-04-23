<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
	<view class="info">
		<view class="" @click="phone">联系电话:15090144974(点击拨打)</view>
		<view class="">联系地址:河南省南阳市淅川县城关镇商圣街道顺丰社区楚都锦城高档小区</view>
	</view>
	<!-- map地图内置组件  longitude:中心经度 latitude:中心纬度 scale:缩放级别  markers:标记点-->
	<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale">
		
	</map>
	
	
	</view>
	
	
</template>

<script>
	export default({
		data(){
			return{
				longitude:111.501663,
				latitude:33.139738,
				scale:15,
				markers:[
					{
					longitude:111.501659,
					latitude:33.139481,
					iconPath:'../../static/logo.jpg',
					width:80,
					height:50
				}]
			}
		},
		methods:{
			phone(){
				uni.makePhoneCall({
					phoneNumber:'15090144974'
				})
			}
		}
	})
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size:30rpx;
			view{
				line-height: 70rpx;
				border-bottom: 1px solid #eee;
			}
			
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
