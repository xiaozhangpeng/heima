<template>
	<view class="news">
		<scroll-view scroll-y="true">
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
			<view class="news_item" @click="goNewsDetail()">
				<image src="../../static/news.jpeg" mode=""></image>
				<view class="right">
					<view class="tit">
						1季度多家房企利润跌幅超50% 去库存促销站打响
					</view>
					<view class="info">
						<text>发表时间:2022-501</text>
						<text>浏览:123456+</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default({
		data(){
			return{
				
			}
		},
		methods:{
			goNewsDetail()
			{
				uni.navigateTo({
					url:'/pages/news_detail/news_detail'
				})
			}
		}
	})
</script>

<style lang="scss">
	.news {
		.news_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;

			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}

			.right {
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.tit {
					font-size: 33rpx;
				}

				.info {
					font-size: 24rpx;

					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}

		}
	}
</style>
