(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0328":function(t,n,a){"use strict";var e=a("fa18"),i=a.n(e);i.a},"28a4":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content .swipers[data-v-60aa9a3e]{width:%?750?%;height:%?400?%}.content .swipers uni-image[data-v-60aa9a3e]{width:100%;height:100%}.content .nav[data-v-60aa9a3e]{display:flex}.content .nav .nav-item[data-v-60aa9a3e]{width:25%;text-align:center}.content .nav .nav-item uni-view[data-v-60aa9a3e]{width:%?120?%;height:%?120?%;background:#b50e03;border-radius:60%;margin:10px auto;line-height:%?120?%;color:#eee;font-size:%?50?%}.content .nav .nav-item .icon-tupian[data-v-60aa9a3e]{font-size:%?45?%}.content .nav .nav-item uni-text[data-v-60aa9a3e]{font-size:%?30?%}.content .hot_goods[data-v-60aa9a3e]{background:#eee;overflow:hidden}.content .hot_goods .tit[data-v-60aa9a3e]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:20px;background:#fff;margin:%?7?% 0}',""]),t.exports=n},"3cc0":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"content"},[a("v-uni-swiper",{staticClass:"swipers",attrs:{"indicator-dots":!0,autoplay:!0,interval:2e3,duration:200,circular:"true"}},t._l(t.swiper,(function(t,n){return a("v-uni-swiper-item",{key:n},[a("v-uni-image",{attrs:{src:t.image}})],1)})),1),a("v-uni-view",{staticClass:"nav"},[a("v-uni-view",{staticClass:"nav-item"},[a("v-uni-view",{staticClass:"iconfont icon-ziyuan",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goGoods()}}}),a("v-uni-text",[t._v("黑马超市")])],1),a("v-uni-view",{staticClass:"nav-item"},[a("v-uni-view",{staticClass:"iconfont icon-guanyuwomen",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goContact()}}}),a("v-uni-text",[t._v("联系我们")])],1),a("v-uni-view",{staticClass:"nav-item"},[a("v-uni-view",{staticClass:"iconfont icon-tupian",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPic()}}}),a("v-uni-text",[t._v("社区图片")])],1),a("v-uni-view",{staticClass:"nav-item"},[a("v-uni-view",{staticClass:"iconfont icon-ziyuan"}),a("v-uni-text",[t._v("学习视频")])],1)],1),a("v-uni-view",{staticClass:"hot_goods"},[a("v-uni-view",{staticClass:"tit"},[t._v("推荐商品")]),a("goodsList",{attrs:{goods:t.goods},on:{goodsClick:function(n){arguments[0]=n=t.$handleEvent(n),t.goodsClicks.apply(void 0,arguments)}}})],1)],1)},o=[]},65471:function(t,n,a){"use strict";a.r(n);var e=a("3cc0"),i=a("9dab");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("0328");var s,r=a("f0c5"),c=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"60aa9a3e",null,!1,e["a"],s);n["default"]=c.exports},"9dab":function(t,n,a){"use strict";a.r(n);var e=a("a69d"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},a69d:function(t,n,a){"use strict";var e=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("96cf");var i=e(a("1da1")),o=e(a("3404")),s={data:function(){return{swiper:[],goods:[]}},components:{goodsList:o.default},onLoad:function(){this.getSwipers(),this.getGoods()},methods:{goGoods:function(){uni.navigateTo({url:"/pages/goods/goods"}),console.log("跳转成功")},goContact:function(){uni.navigateTo({url:"/pages/contact/contact"})},goPic:function(){uni.navigateTo({url:"/pages/pic/pic"})},goodsClicks:function(t){console.log("点击图片然后跳转",t),uni.navigateTo({url:"/pages/goods_detail/goods_detail?iid="+t})},getSwipers:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/home/multidata"});case 2:a=n.sent,console.log(a.data.data.banner.list),t.swiper=a.data.data.banner.list;case 5:case"end":return n.stop()}}),n)})))()},getGoods:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/home/data?type=pop&page=1"});case 2:a=n.sent,console.log(a.data.data),t.goods=a.data.data.list;case 5:case"end":return n.stop()}}),n)})))()}}};n.default=s},fa18:function(t,n,a){var e=a("28a4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("c5ca1a4e",e,!0,{sourceMap:!1,shadowMode:!1})}}]);