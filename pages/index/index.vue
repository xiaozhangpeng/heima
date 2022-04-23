<template>
	<view class="content">
		<!-- 轮播图 -->

		<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="200" circular=true class="swipers">
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<image :src="item.image"></image>
			</swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item">
				<view class="iconfont icon-ziyuan" @click="goGoods()"></view>
				<text>黑马超市</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-guanyuwomen" @click="goContact()"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-tupian" @click="goPic()"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-ziyuan"></view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList :goods="goods" @goodsClick="goodsClicks"></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods_list/goods_list.vue"
	export default {
		data() {
			return {
				// 存储轮播图数据
				swiper: [],
				// 存放推荐商品的数据
				goods: []

			}
		},
		components:{
			goodsList
		},
		onLoad() {
			this.getSwipers();
			this.getGoods()
		},
		methods: {
			/* 点击事件相关方法 */
			// 点击跳转到商品列表页
			goGoods(){
				uni.navigateTo({
					url:'/pages/goods/goods'
				})
				console.log("跳转成功")
			},
			// 点击跳转到关于我们页面
			goContact(){
				uni.navigateTo({
					url:'/pages/contact/contact'
				})
			},
			// 点击跳转到社区图片页面
			goPic(){
				uni.navigateTo({
					url:'/pages/pic/pic'
				})
			},
			// 点击跳转到商品详情页并且携带iid
			goodsClicks(iid){
				console.log("点击图片然后跳转",iid);
				uni.navigateTo({
					url:'/pages/goods_detail/goods_detail?iid='+iid
				})
			},



			/* 网路请求相关的方法 */
			// 获取轮播图数据--封装后
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/home/multidata'
				})
				console.log(res.data.data.banner.list);
				this.swiper = res.data.data.banner.list;

			},
			// 获取商品数据
			async getGoods() {
				const res = await this.$myRequest({
					url: '/home/data?type=pop&page=1',
				})
				console.log(res.data.data);
				this.goods = res.data.data.list;
	
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.swipers {
			width: 750rpx;
			height: 400rpx
		}

		.swipers image {
			width: 100%;
			height: 100%;
		}

		.nav {
			display: flex;

			.nav-item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60%;
					margin: 10px auto;
					line-height: 120rpx;
					color: #eee;
					font-size: 50rpx;

				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;

			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}

			
		}
	}
</style>
