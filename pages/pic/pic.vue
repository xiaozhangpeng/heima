<template>
	<view class="pic">
		<scroll-view scroll-y="true" class="left">
			<view v-for="(category,index) in categorys" @click="itemClick(index,category.maitKey,category.miniWallkey)"
				:class="{active:currentIndex===index}">{{category.title}}</view>

		</scroll-view>
		<scroll-view scroll-y="true" class="rigth">
			<view class="item" v-for="(item,index) in secondData" :key="index" v-show="flag">
				<image :src="item.image" @click="previewImg(item.image)"></image>
				<text @click="detailShow">{{item.title}}</text>
			</view>

			<view class="detail" v-show="!flag" v-for="(detail,index) in details" :key="detail.id">
				
				<image :src="detail.img" ></image>
				
				<view class="info">
					<text class="price" @click="back()">价格:{{detail.price}}</text>
					<text class="">收藏数:{{detail.cfav}}</text>
					<text class="">标记数:{{detail.itemMarks}}</text>
					<text class="">售出:{{detail.sale}}</text>
					<text class="">店铺名称:{{detail.shopSeller}}</text>
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default ({
		data() {
			return {
				categorys: [],
				currentIndex: 0,
				secondData: [],
				flag: true,
				details: [],
				miniWallkey:10062603
			}
		},
		onLoad() {
			this.getCategory();
			// this.getCategoryDetail(this.miniWallkey)
			
		},
		methods: {
			// 获取分类数据
			async getCategory() {
				const res = await this.$myRequest({
					url: '/category'
				})
				console.log(res.data.data.category.list)
				console.log(res.data.data.category.list[0].miniWallkey)
				this.categorys = res.data.data.category.list;
				// this.miniWallkey=res.data.data.category.list[index].miniWallkey
				this.itemClick(this.currentIndex, this.categorys[0].maitKey,this.miniWallkey)
			},

			// 点击获取二级分类
			async itemClick(index, maitKey,miniWallkey) {
				this.currentIndex = index;
				// console.log(maitKey);
				const res = await this.$myRequest({
					url: '/subcategory?maitKey=' + maitKey
				});
				// console.log(res.data);
				this.secondData = res.data.data.list;
				
				this.getCategoryDetail(miniWallkey)
			},

			// 获取二级分类的具体数据列表
			async getCategoryDetail(miniWallkey) {
				
				const type = "pop"
				const res = await this.$myRequest({
					url: '/subcategory/detail?' + "miniWallkey=" + miniWallkey + "&type=" + type,
				});
				// console.log(res.data);
				this.details = res.data;
				// console.log(this.details)

			},


			previewImg(current) {
				// 编辑secondData，抽取出新的图片路径数组
				const urls = this.secondData.map(item => {
					return item.image
				})
				uni.previewImage({
					current,
					urls
				})
			},
			detailShow() {
				this.flag = !this.flag
			},
			back(){
				this.flag = !this.flag
			}

		}
	})
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pic {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;

			}

			.active {
				background: $shop-color;
				color: #fff;
			}
		}

		.rigth {
			height: 100%;
			width: 530rpx;
			margin: 10px auto;

			.item {

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}


			}
			.detail{
				// height: 100%;
				width: 530rpx;
				margin: 10px auto;
			display: flex;
				// 主轴一行满了就换行
				// flex-wrap: wrap;
			    image{
					width: 500rpx;
					height: 300rpx;
					border-radius: 5px;
				}
				.info{
					margin-left:10px;
					display: flex;
					flex-direction:column;
					width: 100%;
					// display: flex;
					
					text{
						font-size: 28rpx;
						line-height: 50rpx;
						
					
					}
					.price{
						color:$shop-color
					}
				}
		
			}
		}

	}
</style>
