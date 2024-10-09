<template>
<div>
	<div :style='{"width":"100%","padding":"20px","margin":"0 auto","borderRadius":"0","background":"#758A99"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'>'" :style='{"fontSize":"15px","lineHeight":"1","justifyContent":"center","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="news-preview-pv" :style='{"padding":"0 10%","margin":"10px auto","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative"}'>
		<el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"10px","alignItems":"center","flexWrap":"wrap","background":"#f5f5f5","display":"flex","width":"100%","justifyContent":"flex-end","height":"auto","order":"1"}'>
			<el-form-item :style='{"margin":"0 0"}'>
				<el-input v-model="title" placeholder="标题"></el-input>
			</el-form-item>
			<el-button type="primary" @click="getNewsList(1)" :style='{"cursor":"pointer","border":"0","padding":"0px 30px","margin":"0 0 0 -30px","color":"#fff","outline":"none","borderRadius":"30px","background":"#758A99","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px","zIndex":"1"}'>
				<span class="icon iconfont icon-chakan14" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}'></span>
				搜索
			</el-button>
		</el-form>
		
		<!-- category -->
		<div class="category" :style='{"padding":"40px 30px","flexWrap":"wrap","background":"linear-gradient(134deg, #758A99 0%, #426781 100%)","display":"flex","clipPath":"polygon(20px 0, 0 20px, 0 100%,100% 100%, 100% 0)","width":"250px","height":"auto","order":"2"}'>
		  <div class="item" @click="categoryClick(0)" :class="categoryIndex == 0 ? 'active' : ''">全部</div>
		  <div v-for="(item,index) in categoryList" @click="categoryClick(index+1)" :key="index" class="item" :class="categoryIndex == index+1 ? 'active' : ''">{{item.typename}}</div>
		</div>
	
				
				
				<!-- 样式三 -->
		<div class="list3 index-pv1" :style='{"border":"1px solid #758A99","padding":"30px","background":"#fff","borderWidth":"4px 0 0","width":"calc(100% - 250px)","height":"auto","order":"3"}'>
			<div :style='{"border":"1px solid #E0E0E0","padding":"30px 20px","margin":"0 0 20px","flexWrap":"wrap","background":"#fff","flexDirection":"column","display":"flex","width":"100%","position":"relative","height":"130px"}' v-for="item in newsList" :key="item.id" @click="toNewsDetail(item)" class="list-item animation-box">
				<div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#000","alignItems":"center","display":"flex","width":"60%","lineHeight":"32px","fontSize":"16px","textOverflow":"ellipsis","fontWeight":"bold","height":"50%","order":"1"}' class="title ">{{item.title}}</div>
				<div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#666","alignItems":"center","display":"flex","width":"60%","lineHeight":"21px","fontSize":"14px","textOverflow":"ellipsis","height":"50%","order":"2"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"padding":"0","alignItems":"flex-end","display":"flex","order":"7","height":"100%"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
				  <span :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0","alignItems":"flex-end","display":"flex","order":"6","height":"100%"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
				  <span :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0","alignItems":"flex-end","display":"flex","order":"3","height":"100%"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
				  <span :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0","alignItems":"flex-end","display":"flex","order":"4","height":"100%"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
				  <span :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0","alignItems":"flex-end","display":"flex","order":"5","height":"100%"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#909090"}'></span>
				  <span :style='{"color":"#909090","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","color":"#fff","top":"30px","textAlign":"center","background":"#758A99","display":"block","width":"80px","fontSize":"14px","lineHeight":"32px","position":"absolute","right":"20px"}' class="tags ">新闻动态</div>
			</div>
		</div>
				
				
				
				
				
				
				
		<el-pagination
		  background
		  id="pagination" class="pagination"
		  :pager-count="7"
		  :page-size="pageSize"
		  :page-sizes="pageSizes"
		  prev-text="<"
		  next-text=">"
		  :hide-on-single-page="true"
		  :layout='["total","prev","pager","next"].join()'
		  :total="total"
		  :style='{"padding":"0","margin":"10px auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"1200px","fontWeight":"500"}'
		  @current-change="curChange"
		  @prev-click="prevClick"
		  @next-click="nextClick"
		></el-pagination>

		<!-- 热门信息 -->
		<div class="hot" :style='{"boxShadow":"none","margin":"20px 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","order":"4"}'>
		  <div :style='{"margin":"20px auto","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231216/f2f635e3dc004bb2975d1edbe22e7ce4.png)","width":"90%","lineHeight":"50px","fontSize":"24px","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat"}'>热门信息</div>
		  <div :style='{"width":"100%","padding":"0 0 5px 0","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"border":"1px solid #758A99","padding":"20px","flexWrap":"wrap","background":"#fff","flexDirection":"column","borderWidth":"0 1px 0 0","display":"flex","width":"25%","justifyContent":"center","height":"220px"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"150px","objectFit":"cover","display":"block","height":"180px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"width":"calc(100% - 150px)","padding":"0 10px","lineHeight":"2","fontSize":"18px","color":"#000","fontWeight":"bold"}'>{{ item.title }}</div>
		      <div :style='{"width":"calc(100% - 150px)","padding":"0 10px","lineHeight":"1.5","fontSize":"14px","color":"#727272","textAlign":"left"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
		<!-- 最新动态 -->
		<div class="news" :style='{"width":"100%","flexWrap":"wrap","background":"none","display":"flex","height":"auto","order":"5"}'>
		  <div :style='{"padding":"0 20px","margin":"20px auto","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231216/f2f635e3dc004bb2975d1edbe22e7ce4.png)","width":"90%","lineHeight":"50px","fontSize":"24px","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat"}'>最新动态</div>
		  <div :style='{"width":"100%","padding":"0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"border":"1px solid #758A99","width":"25%","padding":"20px 35px","background":"#fff","borderWidth":"0 1px 0 0","height":"auto"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"180px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"0 10px","lineHeight":"2","fontSize":"18px","color":"#000","textAlign":"center","fontWeight":"bold"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 10px","lineHeight":"1.5","fontSize":"14px","color":"#727272","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				baseUrl: this.$config.baseUrl,
				breadcrumbItem: [
				  {
					name: '停车场资讯'
				  }
				],
				newsList: [],
				total: 1,
				pageSize: 10,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				layouts: '',
				title: '',
				categoryIndex: 0,
				categoryList: [],
				hotList: [],
				recommendList: [],
			}
		},
		created() {
			this.getCategoryList()
			this.getNewsList(1);
			this.getHotList()
			this.getRecommendList()
		},
		//方法集合
		methods: {
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data.list
					}
				});
			},
			categoryClick(index) {
				this.categoryIndex = index
				this.getNewsList()
			},
			getNewsList(page) {
				let params = {page, limit: this.pageSize,sort:'addtime',order:'desc'};
				let searchWhere = {};
				if(this.title != '') searchWhere.title = '%' + this.title + '%';
				if(this.categoryIndex!=0){
					searchWhere.typename = this.categoryList[this.categoryIndex - 1].typename
				}
				this.$http.get('news/list', {params: Object.assign(params, searchWhere)}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			getRecommendList(){
				let url = 'news/autoSort'
				if(localStorage.getItem('frontToken')){
					url = 'news/autoSort2'
				}
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get(url, {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			curChange(page) {
				this.getNewsList(page);
			},
			prevClick(page) {
				this.getNewsList(page);
			},
			nextClick(page) {
				this.getNewsList(page);
			},
			toNewsDetail(item) {
				this.$router.push({path: '/index/newsDetail', query: {id: item.id}});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 12px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #fff;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #fff;
		display: inline-block;
	}
	
	.news-wrap {
	  width: 1000px;
	  margin: 0 auto;
	}
	.news-item {
	  height: 200px;
	  width: auto;
	  margin-bottom: 30px;
	  cursor: pointer;
	}
	.news-item-text {
	  width: calc(100% - 215px);
	  display: inline-block;
	  vertical-align: top;
	  margin-left: 15px;
	}
	.news-item-text-title {
	  font-size: 16px;
	  margin-bottom: 15px;
	}
	.news-item-text-intro {
	  font-size: 14px;
	  color: #666;
	}
	
	.hide1 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide2 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide3 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
	.index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1.1) skew(4deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
	}
	
	.index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.index-pv1 .animation-box img:hover {
				transform: rotate(360deg) scale(0.8) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		
	#pagination.el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #758A99;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #FFF;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #758A99;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.news-preview-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #C7C7C7;
				border-radius: 30px;
				padding: 0 10px;
				margin: 0;
				outline: none;
				color: #333;
				width: 500px;
				font-size: 14px;
				line-height: 42px;
				height: 42px;
			}
	
	.news-preview-pv .category .item {
				cursor: pointer;
				margin: 0;
				color: #000;
				display: flex;
				font-size: 17px;
				line-height: 36px;
				border-radius: 0;
				background: #fff;
				width: 100%;
				justify-content: center;
				align-items: center;
				text-align: center;
				height: 60px;
			}
	
	.news-preview-pv .category .item:hover {
				color: #758A99;
				background: #fff;
				font-weight: bold;
			}
	
	.news-preview-pv .category .item.active {
				color: #758A99;
				background: #fff;
				font-weight: bold;
			}
	
	.news-preview-pv .list9 .item .image {
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .image {
				transform: scale(1.1);
			}
	
	.news-preview-pv .list9 .item .info {
				padding: 10px;
				left: 0;
				bottom: -100%;
				background: rgba(0,0,0,.5);
				width: 100%;
				position: absolute;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .info {
				bottom: 0;
			}
</style>
