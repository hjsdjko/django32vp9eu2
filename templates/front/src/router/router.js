import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import yudingxinxiList from '../pages/yudingxinxi/list'
import yudingxinxiDetail from '../pages/yudingxinxi/detail'
import yudingxinxiAdd from '../pages/yudingxinxi/add'
import weiguijiluList from '../pages/weiguijilu/list'
import weiguijiluDetail from '../pages/weiguijilu/detail'
import weiguijiluAdd from '../pages/weiguijilu/add'
import jiaofeixinxiList from '../pages/jiaofeixinxi/list'
import jiaofeixinxiDetail from '../pages/jiaofeixinxi/detail'
import jiaofeixinxiAdd from '../pages/jiaofeixinxi/add'
import huiyuantingcheList from '../pages/huiyuantingche/list'
import huiyuantingcheDetail from '../pages/huiyuantingche/detail'
import huiyuantingcheAdd from '../pages/huiyuantingche/add'
import weiguigonggaoList from '../pages/weiguigonggao/list'
import weiguigonggaoDetail from '../pages/weiguigonggao/detail'
import weiguigonggaoAdd from '../pages/weiguigonggao/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'yudingxinxi',
					component: yudingxinxiList
				},
				{
					path: 'yudingxinxiDetail',
					component: yudingxinxiDetail
				},
				{
					path: 'yudingxinxiAdd',
					component: yudingxinxiAdd
				},
				{
					path: 'weiguijilu',
					component: weiguijiluList
				},
				{
					path: 'weiguijiluDetail',
					component: weiguijiluDetail
				},
				{
					path: 'weiguijiluAdd',
					component: weiguijiluAdd
				},
				{
					path: 'jiaofeixinxi',
					component: jiaofeixinxiList
				},
				{
					path: 'jiaofeixinxiDetail',
					component: jiaofeixinxiDetail
				},
				{
					path: 'jiaofeixinxiAdd',
					component: jiaofeixinxiAdd
				},
				{
					path: 'huiyuantingche',
					component: huiyuantingcheList
				},
				{
					path: 'huiyuantingcheDetail',
					component: huiyuantingcheDetail
				},
				{
					path: 'huiyuantingcheAdd',
					component: huiyuantingcheAdd
				},
				{
					path: 'weiguigonggao',
					component: weiguigonggaoList
				},
				{
					path: 'weiguigonggaoDetail',
					component: weiguigonggaoDetail
				},
				{
					path: 'weiguigonggaoAdd',
					component: weiguigonggaoAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
