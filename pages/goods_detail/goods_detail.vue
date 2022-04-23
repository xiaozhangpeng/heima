<template>
	<view class="goods_detail">

		<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="200" circular=true class="swipers">
			<swiper-item v-for="(images,index) in topImage" :key="index">
				<image :src="images" mode=""></image>
			</swiper-item>
		</swiper>

		<view class="info">
			<text class="desc">{{goodsInfo.desc}}</text>
			<text class="title">{{goodsInfo.title}}</text>
			<text class="price">{{goodsInfo.price}}</text>
			<text class="sendAddress">发货地:{{goodsInfo.extra.sendAddress}}</text>
		</view>

		<view class="shop">
			<view>
				<image :src="shopInfo.shopLogo" mode="" class="logo"></image>
				<text style="margin-left:20rpx;color:#cf53ff;font-size:55rpx">{{shopInfo.name}}</text>
				<view class="score">
					<text v-for="(score,index) in shopInfo.score" :key="index">{{score.name}}--{{score.score}}</text>
				</view>
				<view class="services" v-for="(services,index) in shopInfo.services">
					<view class="services_icon">
						<img :src="services.icon" alt="">
					</view>

					<text>{{services.name}}</text>
				</view>
			</view>
		</view>

		<view class="skuInfo">
			<image :src="skuInfo.img" class="skuImage" v-for="(skuInfo,index) in skuInfo.skus"></image>
		</view>

		<!-- 底部商品导航栏 -->
		<view class="bottom_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>

	</view>
</template>

<script>
	export default ({
		data() {
			return {
				// 存储路由传过来的iid
				iid: 0,
				// 存储商品详情总数据
				detailData: [],
				// 存储顶图轮播图数据
				topImage: [],
				// 存储商品信息
				goodsInfo: {},
				// 获取店铺信息
				shop: {},
				// 获取商品 详细信息
				skuInfo: {},
				// 底部商品导航数据
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]


			}
		},
		// options能够拿到params参数
		onLoad(optinos) {
			// console.log(optinos.iid);
			this.iid = optinos.iid;
			this.getGoodsDetail();

		},
		methods: {
			// 发送网络请求---商品详情
			async getGoodsDetail() {
				const res = await this.$myRequest({
					url: '/detail?iid=' + this.iid
				})
				console.log(res.data.result);
				const detailData = res.data.result;
				// 商品数据
				const goodsInfo = detailData.itemInfo;
				this.goodsInfo = goodsInfo;
				this.topImage = goodsInfo.topImages;
				// 店铺信息
				const shopInfo = detailData.shopInfo;
				this.shopInfo = shopInfo;
				// skuInfo
				const skuInfo = detailData.skuInfo;
				this.skuInfo = skuInfo;
			},


			// 底部导航栏的回调事件
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	})
</script>

<style lang="scss">
	.goods_detail {
		.swipers {
			width: 750rpx;
			height: 650rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			width: 750rpx;
			display: flex;
			flex-direction: column;

			.desc {
				font-size: 60rpx;
				background-color: #ffdfd4;
			}

			.price {
				color: $shop-color;
				font-size: 50rpx
			}

			text {
				font-size: 30rpx;
				padding: 10rpx;

			}
		}

		.shop {
			width: 750rpx;
			height: 250rpx;
			margin-left: 10rpx;

			.logo {
				width: 50rpx;
				height: 50rpx;
				border-radius: 10rpx;
				margin-right:20rpx;
			
				// margin-top:10rpx
			}

			.score {

				display: flex;
				justify-content: space-between;
				margin: 20rpx;
				background-color: #eee;

				text {
					font-size: 30rpx;
					
				}
			}

			.services {
				display: inline-block;
               text-align: center;
			  
				.services_icon {
					// width: 25%;
					margin:0 auto;
					img {
						width: 50rpx;
						height: 50rpx;
					}
				}

				text {
					font-size: 35rpx;
				}
			}

		}

		.skuInfo {
			width: 750rpx;
			height: 750rpx;
			margin-top: 20rpx;

			.skuImage {

				width: 100%;
				height: 100%;
			}
		}

		.bottom_nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
