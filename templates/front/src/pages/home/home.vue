<template>
<div class="home-preview" :style='{"width":"100%","margin":"0 auto","flexDirection":"column","display":"flex"}'>




		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"80px 10% 120px","margin":"0 0 0","background":"url(http://codegen.caihongy.cn/20231215/571a9d7c5fb549bd9f3535243fa098e7.png)","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","order":"2"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"200px","margin":"10px auto 60px","lineHeight":"54px","textAlign":"center","background":"none"}'>
			<span :style='{"border":"1px solid #758A99","padding":"0 0 5px","fontSize":"30px","color":"#000","borderWidth":"0 0 5px","fontWeight":"bold"}'>停车场资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			<!-- 样式九 -->
		<div v-if="newsList.length" class="list list9 index-pv1" :style='{"padding":"10px 10px 0 10px","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		  <div v-for="(item,index) in newsList" v-if="index<6" :key="index" @click="toDetail('newsDetail', item)" :style='{"border":"5px solid #758A99","padding":"20px 10px","margin":"0 0 40px","borderRadius":"10px","flexWrap":"wrap","background":"none","display":"flex","width":"47%","position":"relative","height":"auto"}' class="new9-list-item animation-box">
			<div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#000","width":"100%","fontSize":"18px","lineHeight":"2","textOverflow":"ellipsis","fontWeight":"bold","order":"1"}' class="new9-list-item-title line1">{{ item.title }}</div>
		    <div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#4d4d4d","width":"100%","fontSize":"14px","lineHeight":"2","textOverflow":"ellipsis","order":"2"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
			<div :style='{"width":"100%","padding":"0","order":"7"}'>
			  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"13px","color":"#4d4d4d"}'></span>
			  <span class="text" :style='{"color":"#4d4d4d","lineHeight":"2","fontSize":"13px"}'>{{item.addtime}}</span>
			</div>
			<div :style='{"padding":"0","order":"6"}'>
			  <span class="icon iconfont icon-geren16" :style='{"margin":"0 4px 0 0","lineHeight":"2","fontSize":"13px","color":"#4d4d4d"}'></span>
			  <span class="text" :style='{"color":"#4d4d4d","lineHeight":"2","fontSize":"13px"}'>{{item.name}}</span>
			</div>
			<div :style='{"padding":"0 10px 0 0","order":"3"}'>
			  <span class="icon iconfont icon-zan10" :style='{"margin":"0 4px 0 0","lineHeight":"2","fontSize":"13px","color":"#4d4d4d"}'></span>
			  <span class="text" :style='{"color":"#4d4d4d","lineHeight":"2","fontSize":"13px"}'>{{item.thumbsupnum}}</span>
			</div>
			<div :style='{"padding":"0 10px 0 0","order":"4"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 4px 0 0","lineHeight":"2","fontSize":"13px","color":"#4d4d4d"}'></span>
			  <span class="text" :style='{"color":"#4d4d4d","lineHeight":"2","fontSize":"13px"}'>{{item.storeupnum}}</span>
			</div>
			<div :style='{"padding":"0 10px 0 0","order":"5"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 4px 0 0","lineHeight":"2","fontSize":"13px","color":"#4d4d4d"}'></span>
			  <span class="text" :style='{"color":"#4d4d4d","lineHeight":"2","fontSize":"13px"}'>{{item.clicknum}}</span>
			</div>
			<div :style='{"padding":"0 40px","color":"#fff","background":"#758A99","bottom":"0","display":"inline-block","fontSize":"18px","lineHeight":"60px","position":"absolute","right":"0"}' class="new9-list-item-identification">新闻动态</div>
		  </div>
		</div>
			
		











		<div @click="moreBtn('news')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#758A99","display":"block","width":"140px","lineHeight":"50px"}'>
			<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
			<i :style='{"color":"#fff","fontSize":"16px","display":"none"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->



<!-- 特价商品 -->
<div id="animate_listcheweixinxi" class="lists animate__animated" :style='{"padding":"40px 10%","margin":"0 0 0","alignItems":"center","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231215/843a93a5c31848f089c27a31d3bb5727.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"space-between","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"0 0 40px","lineHeight":"54px","textAlign":"center","background":"none","order":"1"}'>
	  <span :style='{"border":"1px solid #758A99","padding":"0 0 6px","fontSize":"30px","color":"#000","borderWidth":"0 0 6px"}'>车位信息展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	
	<!-- 样式九 -->
	<div class="list list9 index-pv1" :style='{"width":"100%","padding":"10px 0","background":"none","height":"auto","order":"3"}'>
		<div class="list-4-body" :style='{"width":"100%","margin":"0 0 20px","display":"flex","height":"auto"}'>
			<div v-if="cheweixinxiList.length>0" @click="toDetail('cheweixinxiDetail', cheweixinxiList[0])" class="list-4-item animation-box item-1" :style='{"width":"calc(50% - 5px)","margin":"0 10px 0 0","position":"relative","display":"inline-block","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(cheweixinxiList[0].cheweitupian)" :src="cheweixinxiList[0].cheweitupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (cheweixinxiList[0].cheweitupian?cheweixinxiList[0].cheweitupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[0].cheweimingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[0].cheweileixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{cheweixinxiList[0].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"44px","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"44px","fontSize":"12px"}'>{{cheweixinxiList[0].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="cheweixinxiList.length>1" @click="toDetail('cheweixinxiDetail', cheweixinxiList[1])" class="list-4-item animation-box item-2" :style='{"width":"calc(50% - 5px)","margin":"0 0","position":"relative","display":"inline-block","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(cheweixinxiList[1].cheweitupian)" :src="cheweixinxiList[1].cheweitupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (cheweixinxiList[1].cheweitupian?cheweixinxiList[1].cheweitupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[1].cheweimingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[1].cheweileixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{cheweixinxiList[1].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"44px","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"44px","fontSize":"12px"}'>{{cheweixinxiList[1].storeupnum}}</span>
					</div>
                </div>
			</div>
		</div>
		<div class="list-4-body" :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}'>
			<div v-if="cheweixinxiList.length>2" @click="toDetail('cheweixinxiDetail', cheweixinxiList[2])" class="list-4-item animation-box item-3" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 10px 0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(cheweixinxiList[2].cheweitupian)" :src="cheweixinxiList[2].cheweitupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (cheweixinxiList[2].cheweitupian?cheweixinxiList[2].cheweitupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[2].cheweimingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[2].cheweileixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{cheweixinxiList[2].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"44px","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"44px","fontSize":"12px"}'>{{cheweixinxiList[2].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="cheweixinxiList.length>3" @click="toDetail('cheweixinxiDetail', cheweixinxiList[3])" class="list-4-item animation-box item-4" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 10px 0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(cheweixinxiList[3].cheweitupian)" :src="cheweixinxiList[3].cheweitupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (cheweixinxiList[3].cheweitupian?cheweixinxiList[3].cheweitupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[3].cheweimingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[3].cheweileixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{cheweixinxiList[3].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"44px","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"44px","fontSize":"12px"}'>{{cheweixinxiList[3].storeupnum}}</span>
					</div>
                </div>
			</div>
			<div v-if="cheweixinxiList.length>4" @click="toDetail('cheweixinxiDetail', cheweixinxiList[4])" class="list-4-item animation-box item-5" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(cheweixinxiList[4].cheweitupian)" :src="cheweixinxiList[4].cheweitupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (cheweixinxiList[4].cheweitupian?cheweixinxiList[4].cheweitupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[4].cheweimingcheng}}</div>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{cheweixinxiList[4].cheweileixing}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{cheweixinxiList[4].addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","order":"3"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"44px","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"44px","fontSize":"12px"}'>{{cheweixinxiList[4].storeupnum}}</span>
					</div>
                </div>
			</div>
		</div>
	</div>






	
	
	<div @click="moreBtn('cheweixinxi')" :style='{"border":"0","margin":"0","textAlign":"center","background":"none","display":"block","width":"80px","lineHeight":"32px","order":"2"}'>
		<span :style='{"color":"#000","fontSize":"17px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px","display":"none"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listweiguigonggao" class="lists animate__animated" :style='{"padding":"40px 10%","margin":"0 0 0","alignItems":"center","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231215/843a93a5c31848f089c27a31d3bb5727.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"space-between","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"0 0 40px","lineHeight":"54px","textAlign":"center","background":"none","order":"1"}'>
	  <span :style='{"border":"1px solid #758A99","padding":"0 0 6px","fontSize":"30px","color":"#000","borderWidth":"0 0 6px"}'>违规公告展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	
	<!-- 样式九 -->
	<div class="list list9 index-pv1" :style='{"width":"100%","padding":"10px 0","background":"none","height":"auto","order":"3"}'>
		<div class="list-4-body" :style='{"width":"100%","margin":"0 0 20px","display":"flex","height":"auto"}'>
			<div v-if="weiguigonggaoList.length>0" @click="toDetail('weiguigonggaoDetail', weiguigonggaoList[0])" class="list-4-item animation-box item-1" :style='{"width":"calc(50% - 5px)","margin":"0 10px 0 0","position":"relative","display":"inline-block","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(weiguigonggaoList[0].cheliangtupian)" :src="weiguigonggaoList[0].cheliangtupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (weiguigonggaoList[0].cheliangtupian?weiguigonggaoList[0].cheliangtupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{weiguigonggaoList[0].cheweimingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{weiguigonggaoList[0].addtime}}</span>
					</div>
                </div>
			</div>
			<div v-if="weiguigonggaoList.length>1" @click="toDetail('weiguigonggaoDetail', weiguigonggaoList[1])" class="list-4-item animation-box item-2" :style='{"width":"calc(50% - 5px)","margin":"0 0","position":"relative","display":"inline-block","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(weiguigonggaoList[1].cheliangtupian)" :src="weiguigonggaoList[1].cheliangtupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (weiguigonggaoList[1].cheliangtupian?weiguigonggaoList[1].cheliangtupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{weiguigonggaoList[1].cheweimingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{weiguigonggaoList[1].addtime}}</span>
					</div>
                </div>
			</div>
		</div>
		<div class="list-4-body" :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}'>
			<div v-if="weiguigonggaoList.length>2" @click="toDetail('weiguigonggaoDetail', weiguigonggaoList[2])" class="list-4-item animation-box item-3" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 10px 0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(weiguigonggaoList[2].cheliangtupian)" :src="weiguigonggaoList[2].cheliangtupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (weiguigonggaoList[2].cheliangtupian?weiguigonggaoList[2].cheliangtupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{weiguigonggaoList[2].cheweimingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{weiguigonggaoList[2].addtime}}</span>
					</div>
                </div>
			</div>
			<div v-if="weiguigonggaoList.length>3" @click="toDetail('weiguigonggaoDetail', weiguigonggaoList[3])" class="list-4-item animation-box item-4" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 10px 0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(weiguigonggaoList[3].cheliangtupian)" :src="weiguigonggaoList[3].cheliangtupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (weiguigonggaoList[3].cheliangtupian?weiguigonggaoList[3].cheliangtupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{weiguigonggaoList[3].cheweimingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{weiguigonggaoList[3].addtime}}</span>
					</div>
                </div>
			</div>
			<div v-if="weiguigonggaoList.length>4" @click="toDetail('weiguigonggaoDetail', weiguigonggaoList[4])" class="list-4-item animation-box item-5" :style='{"width":"calc((100% - 20px) / 3)","margin":"0 0","position":"relative","height":"350px"}'>
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-if="preHttp(weiguigonggaoList[4].cheliangtupian)" :src="weiguigonggaoList[4].cheliangtupian.split(',')[0]" alt="" />
				<img :style='{"width":"100%","objectFit":"cover","float":"left","height":"100%"}' v-else :src="baseUrl + (weiguigonggaoList[4].cheliangtupian?weiguigonggaoList[4].cheliangtupian.split(',')[0]:'')" alt="" />
				<div class="list-4-item-title line1" :style='{"padding":"10px","left":"0","flexWrap":"wrap","bottom":"0","background":"rgba(0,0,0,.5)","display":"flex","width":"100%","position":"absolute"}'>
                    <div :style='{"width":"100%","padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff","order":"1"}'>{{weiguigonggaoList[4].cheweimingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px","order":"6"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
					  <span class="text" :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{weiguigonggaoList[4].addtime}}</span>
					</div>
                </div>
			</div>
		</div>
	</div>






	
	
	<div @click="moreBtn('weiguigonggao')" :style='{"border":"0","margin":"0","textAlign":"center","background":"none","display":"block","width":"80px","lineHeight":"32px","order":"2"}'>
		<span :style='{"color":"#000","fontSize":"17px"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px","display":"none"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],

        cheweixinxiList: [],
        weiguigonggaoList: [],




      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		recommendIndexClick11(index, name) {
			this['recommendIndex11' + name] = index[this['recommendColumn11' + name]]
			this.getList()
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__shakeX'},
				{id:'about',css:'animate__slideInLeft'},
				{id:'system',css:'animate__backInRight'},
				{id:'animate_listcheweixinxi',css:'animate__pulse'},
				{id:'animate_listweiguigonggao',css:'animate__pulse'},
				{id:'animate_newsnews',css:'animate__backInLeft'},
				{id:'msgs',css:'animate__backInLeft'},
				{id:'friendly',css:'animate__fadeInTopRight'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 4,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
			
			data = {
				page: 1,
				limit: 5,
			}
			this.$http.get('cheweixinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.cheweixinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 5,
			}
			this.$http.get('weiguigonggao/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.weiguigonggaoList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 30px;
			padding: 0 30px 0 10px;
			box-shadow: none;
			outline: none;
			color: #000;
			width: 200px;
			font-size: 14px;
			height: 44px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 30px;
			padding: 0 10px;
			box-shadow: none;
			outline: none;
			color: #000;
			width: 600px;
			font-size: 14px;
			height: 44px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(-20px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(10deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(.9) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	










</style>
