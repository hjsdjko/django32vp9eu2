<template>
	<div class="main-content" :style='{"color":"#3B3E40","padding":"30px 30px 30px","fontSize":"14px"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"border":"0px solid #bababa","padding":"0 10px","margin":"0 0 20px","overflow":"hidden","borderRadius":"0px","flexWrap":"wrap","background":"none","display":"flex","fontSize":"inherit","justifyContent":"space-between"}' :inline="true" :model="searchForm">
				<el-row :style='{"border":"0px solid #e3e3e3","padding":"10px 0","borderRadius":"5px","textAlign":"center","flexWrap":"wrap","background":"#fff","flexDirection":"row","display":"flex","width":"auto","fontSize":"inherit","justifyContent":"flex-start","order":"2"}' >
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","flexWrap":"wrap","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">车位名称</label>
						<el-input v-model="searchForm.cheweimingcheng" placeholder="车位名称" @keydown.enter.native="search()" clearable></el-input>
					</div>
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","flexWrap":"wrap","display":"flex"}'>
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">车牌号</label>
						<el-input v-model="searchForm.chepaihao" placeholder="车牌号" @keydown.enter.native="search()" clearable></el-input>
					</div>
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","flexWrap":"wrap","display":"flex"}' class="select">
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">是否支付</label>
						<el-select clearable v-model="searchForm.ispay" placeholder="是否支付">
							<el-option v-for="(item,index) in isPayOptions" v-bind:key="index" :label="item" :value="item"></el-option>
						</el-select>
					</div>
					<el-button class="search" type="success" @click="search()">
						<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block","height":"40px"}'></span>
						查询
					</el-button>
				</el-row>

				<el-row class="actions" :style='{"border":"0px solid #e3e3e3","padding":"10px 0","margin":"0","color":"#fff","textAlign":"left","flexDirection":"row","display":"flex","justifyContent":"flex-start","borderRadius":"5px","flexWrap":"wrap","background":"#fff","width":"auto","fontSize":"inherit"}'>
					<el-button class="add" v-if="isAuth('jiaofeixinxi','新增')" type="success" @click="addOrUpdateHandler()">
						<span class="icon iconfont icon-tianjia13" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></span>
						添加
					</el-button>
					<el-button class="del" v-if="isAuth('jiaofeixinxi','删除')" :disabled="dataListSelections.length?false:true" type="danger" @click="deleteHandler()">
						<span class="icon iconfont icon-shanchu7" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block","height":"auto"}'></span>
						删除
					</el-button>


					<el-button class="btn18" v-if="isAuth('jiaofeixinxi','支付')" :disabled="dataListSelections.length?false:true" type="success" @click="payBatch()">
						<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></span>
						批量支付
					</el-button>

				</el-row>
			</el-form>
			<div :style='{"border":"0px solid #e9e9e9","width":"100%","padding":"0px","margin":"10px 0 0","borderRadius":"5px","background":"rgba(255,255,255,1)"}'>
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","borderColor":"#e6e6e6","color":"inherit","borderRadius":"0px","borderWidth":"1px 1px 0 1px","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid"}' 
					:border='true'
					v-if="isAuth('jiaofeixinxi','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
					<!-- cheweimingcheng -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="cheweimingcheng"
						label="车位名称">
						<template slot-scope="scope">
							{{scope.row.cheweimingcheng}}
						</template>
					</el-table-column>
					<!-- cheweileixing -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="cheweileixing"
						label="车位类型">
						<template slot-scope="scope">
							{{scope.row.cheweileixing}}
						</template>
					</el-table-column>
					<!-- cheweiweizhi -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="cheweiweizhi"
						label="车位位置">
						<template slot-scope="scope">
							{{scope.row.cheweiweizhi}}
						</template>
					</el-table-column>
					<!-- fapiao -->
					<!-- $column.hiden -->
					<!-- 无 -->
					<el-table-column :resizable='true' :sortable='true' prop="fapiao" width="200" label="发票">
						<template slot-scope="scope">
							<div v-if="scope.row.fapiao">
								<img v-if="scope.row.fapiao.substring(0,4)=='http'" :src="scope.row.fapiao.split(',')[0]" width="100" height="100">
								<img v-else :src="$base.url+scope.row.fapiao.split(',')[0]" width="100" height="100">
							</div>
							<div v-else>无图片</div>
						</template>
					</el-table-column>
					<!-- tingchefeiyong -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="tingchefeiyong"
						label="停车费用">
						<template slot-scope="scope">
							{{scope.row.tingchefeiyong}}
						</template>
					</el-table-column>
					<!-- tingcheshizhang -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="tingcheshizhang"
						label="停车时长">
						<template slot-scope="scope">
							{{scope.row.tingcheshizhang}}
						</template>
					</el-table-column>
					<!-- zongfeiyong -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="zongfeiyong"
						label="总费用">
						<template slot-scope="scope">
							{{scope.row.zongfeiyong}}
						</template>
					</el-table-column>
					<!-- yonghuming -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="yonghuming"
						label="用户名">
						<template slot-scope="scope">
							{{scope.row.yonghuming}}
						</template>
					</el-table-column>
					<!-- shoujihao -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="shoujihao"
						label="手机号">
						<template slot-scope="scope">
							{{scope.row.shoujihao}}
						</template>
					</el-table-column>
					<!-- chepaihao -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="chepaihao"
						label="车牌号">
						<template slot-scope="scope">
							{{scope.row.chepaihao}}
						</template>
					</el-table-column>
					<!-- crossuserid -->
					<!-- 是 -->
					<!-- crossrefid -->
					<!-- 是 -->
					<!-- ispay -->
					<!-- 是 -->
					<el-table-column :resizable='true' :sortable='true' prop="ispay" label="是否支付">
						<template slot-scope="scope">
							<span style="margin-right:10px">{{scope.row.ispay=='已支付'?'已支付':'未支付'}}</span>
							<el-button v-if="scope.row.ispay!='已支付' && isAuth('jiaofeixinxi','支付') " type="text" size="small" @click="payHandler(scope.row)">支付</el-button>
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button class="view" v-if=" isAuth('jiaofeixinxi','查看')" type="success" @click="addOrUpdateHandler(scope.row.id,'info')">
								<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block","height":"auto"}'></span>
								查看
							</el-button>
							<el-button class="edit" v-if=" isAuth('jiaofeixinxi','修改') " type="success" @click="addOrUpdateHandler(scope.row.id)">
								<span class="icon iconfont icon-xiugai10" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block","height":"auto"}'></span>
								修改
							</el-button>




							<el-button class="del" v-if="isAuth('jiaofeixinxi','删除') " type="primary" @click="deleteHandler(scope.row.id )">
								<span class="icon iconfont icon-guanbi1" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","display":"inline-block","height":"auto"}'></span>
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-pagination
				@size-change="sizeChangeHandle"
				@current-change="currentChangeHandle"
				:current-page="pageIndex"
				background
				:page-sizes="[10, 50, 100, 200]"
				:page-size="pageSize"
				:layout="layouts.join()"
				:total="totalPage"
				prev-text="上一页 "
				next-text="下一页 "
				:hide-on-single-page="false"
				:style='{"padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"inherit","textAlign":"center","width":"100%","fontSize":"inherit","fontWeight":"500"}'
			></el-pagination>
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





	</div>
</template>

<script>
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
	export default {
		data() {
			return {
				searchForm: {
					key: ""
				},
				form:{},
				isPayOptions: [],
				dataList: [],
				pageIndex: 1,
				pageSize: 10,
				totalPage: 0,
				dataListLoading: false,
				dataListSelections: [],
				showFlag: true,
				sfshVisiable: false,
				shForm: {},
				chartVisiable: false,
				chartVisiable1: false,
				chartVisiable2: false,
				chartVisiable3: false,
				chartVisiable4: false,
				chartVisiable5: false,
				addOrUpdateFlag:false,
				layouts: ["prev","pager","next"],
			};
		},
		created() {
			this.init();
			this.getDataList();
			this.contentStyleChange()
		},
		mounted() {
		},
		filters: {
			htmlfilter: function (val) {
				return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
			}
		},
		computed: {
			tablename(){
				return this.$storage.get('sessionTable')
			},
		},
		components: {
			AddOrUpdate,
		},
		methods: {
			contentStyleChange() {
				this.contentPageStyleChange()
			},
			// 分页
			contentPageStyleChange(){
				let arr = []

				// if(this.contents.pageTotal) arr.push('total')
				// if(this.contents.pageSizes) arr.push('sizes')
				// if(this.contents.pagePrevNext){
				//   arr.push('prev')
				//   if(this.contents.pagePager) arr.push('pager')
				//   arr.push('next')
				// }
				// if(this.contents.pageJumper) arr.push('jumper')
				// this.layouts = arr.join()
				// this.contents.pageEachNum = 10
			},
			payHandler(row){
				this.$storage.set('paytable','jiaofeixinxi');
				this.$storage.set('payObject',row);
				this.$router.push('pay');
			},
			// 批量支付
			payBatch(){
				for(let x in this.dataListSelections){
					if(this.dataListSelections[x].ispay=='已支付'){
						this.$message.error('所选订单存在已支付订单')
						return false
					}
				}
				this.$confirm('是否支付所选订单？').then(_ => {
					let arr = JSON.parse(JSON.stringify(this.dataListSelections))
					for(let i in arr){
						arr[i].ispay = '已支付'
						this.$http({
							url: 'jiaofeixinxi/update',
							method: "post",
							data: arr[i]
						}).then(res=>{
							
						})
					}
					this.$message({
						message: "支付成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.getDataList()
						}
					});
				}).catch(_ => {});
			},






    init () {
		this.isPayOptions = "已支付,未支付".split(',')
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.cheweimingcheng!='' && this.searchForm.cheweimingcheng!=undefined){
            params['cheweimingcheng'] = '%' + this.searchForm.cheweimingcheng + '%'
          }
           if(this.searchForm.chepaihao!='' && this.searchForm.chepaihao!=undefined){
            params['chepaihao'] = '%' + this.searchForm.chepaihao + '%'
          }
			if(this.searchForm.ispay!='' && this.searchForm.ispay!=undefined){
				params['ispay'] = this.searchForm.ispay
			}
			this.$http({
				url: "jiaofeixinxi/page",
				method: "get",
				params: params
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.dataList = data.data.list;
					this.totalPage = data.data.total;
				} else {
					this.dataList = [];
					this.totalPage = 0;
				}
				this.dataListLoading = false;
			});
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 下载
    download(file){
      let arr = file.replace(new RegExp('upload/', "g"), "")
      axios.get(this.$base.url + 'file/download?fileName=' + arr, {
      	headers: {
      		token: this.$storage.get('Token')
      	},
      	responseType: "blob"
      }).then(({
      	data
      }) => {
      	const binaryData = [];
      	binaryData.push(data);
      	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
      		type: 'application/pdf;chartset=UTF-8'
      	}))
      	const a = document.createElement('a')
      	a.href = objectUrl
      	a.download = arr
      	// a.click()
      	// 下面这个写法兼容火狐
      	a.dispatchEvent(new MouseEvent('click', {
      		bubbles: true,
      		cancelable: true,
      		view: window
      	}))
      	window.URL.revokeObjectURL(data)
      },err=>{
		  axios.get((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] :'') + this.$base.name + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: this.$storage.get('Token')
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  })
	  })
    },
	// 预览
	preClick(file){
		if(!file){
			return false
		}
		window.open((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] + this.$base.name + '/' + file :this.$base.url + file))
	},
	jiaofeixinxistatusChange(e,row){
		if(row.status==0){
			row.passwordwrongnum = 0
		}
		this.$http({
			url:'jiaofeixinxi/update',
			method:'post',
			data:row
		}).then(res=>{
			if(row.status==1){
				this.$message.error('该用户已锁定')
			}else{
				this.$message.success('该用户已解除锁定')
			}
		})
	},
    // 删除
    deleteHandler(id ) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "jiaofeixinxi/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
			this.$message({
			  message: "操作成功",
			  type: "success",
			  duration: 1500,
			  onClose: () => {
			    this.search();
			  }
			});
            
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 1px solid #e3e3e3;
				border-radius: 3px;
				padding: 0 12px;
				color: inherit;
				background: #fff;
				width: 150px;
				font-size: inherit;
				height: 44px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 1px solid #e3e3e3;
				border-radius: 3px;
				padding: 0 10px;
				color: inherit;
				background: #fff;
				width: 150px;
				font-size: inherit;
				height: 44px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 1px solid #e3e3e3;
				border-radius: 3px;
				padding: 0 10px 0 30px;
				color: inherit;
				background: #fff;
				width: 150px;
				font-size: inherit;
				height: 44px;
			}
	
	.center-form-pv .search {
				cursor: pointer;
				padding: 0px 15px;
				margin: 0 10px;
				color: #fff;
				font-size: 16px;
				border-color: #719e37;
				line-height: 44px;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 17px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #9bc747 0%,#82bd42 100%);
				width: auto;
				border-width: 1px;
				border-style: solid;
				min-width: 80px;
				height: 44px;
			}
	
	.center-form-pv .search:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.center-form-pv .actions .add {
				border: 1px solid #0f70ad;
				cursor: pointer;
				padding: 16px 15px;
				margin: 4px 4px 5px 0;
				color: inherit;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #208ed3 0%,#0272bd 100%),#208ed3;
				width: auto;
				min-width: 70px;
				height: auto;
			}
	
	.center-form-pv .actions .add:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.center-form-pv .actions .del {
				border: 1px solid #af2b1b;
				cursor: pointer;
				padding: 16px 15px;
				margin: 4px 4px 5px;
				color: inherit;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #bc3423 0%,#cd4433 100%);
				width: auto;
				min-width: 70px;
				height: auto;
			}
	
	.center-form-pv .actions .del:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.center-form-pv .actions .statis {
				border: 1px solid #719e37;
				cursor: pointer;
				padding: 16px 15px;
				margin: 4px 4px 5px;
				color: inherit;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #9bc747 0%,#82bd42 100%);
				width: auto;
				height: auto;
			}
	
	.center-form-pv .actions .statis:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.center-form-pv .actions .btn18 {
				border: 1px solid #323537;
				cursor: pointer;
				padding: 16px 15px;
				margin: 4px 4px 5px;
				color: #fff;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #4b4f51 0%,#414547 100%);
				width: auto;
				height: auto;
			}
	
	.center-form-pv .actions .btn18:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: inherit;
				background: rgba(254,169,34,0);
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 0;
				background: none;
				border-color: #eee;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				color: #333;
				word-break: break-all;
				white-space: normal;
				font-weight: 600;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				padding: 0;
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #eee;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 2px 0;
				color: #000;
				background: #f6f6f6;
				font-weight: 500;
				border-color: #e6e6e6;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: #eee;
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				color: inherit;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view {
				border: 1px solid #0f70ad;
				cursor: pointer;
				padding: 0 10px;
				margin: 5px 5px 5px 0;
				color: #fff;
				font-size: 13px;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #208ed3 0%,#0272bd 100%);
				width: auto;
				min-width: 40px;
				height: 40px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add:hover {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit {
				border: 1px solid #719e37;
				cursor: pointer;
				padding: 0 10px;
				margin: 5px 5px 5px 0;
				color: #fff;
				font-size: 13px;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #9bc747 0%,#82bd42 100%);
				width: auto;
				min-width: 40px;
				height: 40px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del {
				border: 1px solid #af2b1b;
				cursor: pointer;
				padding: 0 10px;
				margin: 5px 5px 5px 0;
				color: #fff;
				font-size: 13px;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #bc3423 0%,#cd4433 100%);
				width: auto;
				height: 40px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8 {
				border: 1px solid #323537;
				cursor: pointer;
				padding: 0 10px;
				margin: 5px 5px 5px 0;
				color: #fff;
				font-size: 13px;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #4b4f51 0%,#414547 100%);
				width: auto;
				height: 40px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: inherit;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: #333;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: #333;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				color: inherit;
				width: 100px;
				font-size: inherit;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #ddd;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				color: inherit;
				display: inline-block;
				width: 50px;
				font-size: inherit;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0 0px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 24px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: auto;
				text-align: center;
				height: 24px;
			}
	
	// list one
	.one .list1-view {
				border: 1px solid #0f70ad;
				cursor: pointer;
				padding: 0 8px 0 4px;
				margin: 0px 5px 5px 0;
				color: #fff;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #208ed3 0%,#0272bd 100%);
				width: auto;
				min-width: 58px;
				height: 40px;
			}
	
	.one .list1-view:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.one .list1-edit {
				border: 1px solid #719e37;
				cursor: pointer;
				padding: 0 8px 0 4px;
				margin: 0px 5px 5px 0;
				color: #fff;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
				background: linear-gradient(to bottom, #9bc747 0%,#82bd42 100%);
				width: auto;
				min-width: 58px;
				height: 40px;
			}
	
	.one .list1-edit:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.one .list1-del {
				border: 1px solid #0260ad30;
				cursor: pointer;
				padding: 0 8px 0 4px;
				margin: 0px 5px 5px 0;
				color: #fff;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #bc3423 0%,#cd4433 100%);
				width: auto;
				min-width: 58px;
				height: 40px;
			}
	
	.one .list1-del:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.one .list1-btn8 {
				border: 1px solid #323537;
				cursor: pointer;
				padding: 0 8px 0 4px;
				margin: 0px 5px 5px 0;
				color: #fff;
				font-size: inherit;
				transition: all 0.3s;
				border-radius: 3px;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
				text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
				background: linear-gradient(to bottom, #4b4f51 0%,#414547 100%);
				width: auto;
				min-width: 48px;
				height: 40px;
			}
	
	.one .list1-btn8:hover {
				transform: scale(1.09) rotate(3deg);
			}
	
	.main-content .el-table .el-switch {
				display: inline-flex;
				vertical-align: middle;
				line-height: 30px;
				position: relative;
				align-items: center;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--left {
				cursor: pointer;
				margin: 0 10px 0 0;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--right {
				cursor: pointer;
				margin: 0 0 0 10px;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core {
				border: 1px solid #b0d5f6;
				cursor: pointer;
				border-radius: 20px;
				margin: 0;
				outline: 0;
				background: #b0d5f6;
				display: inline-block;
				width: 40px;
				box-sizing: border-box;
				transition: border-color .3s,background-color .3s;
				height: 20px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core::after {
				border-radius: 100%;
				top: 1px;
				left: 1px;
				background: #FFF;
				width: 16px;
				position: absolute;
				transition: all .3s;
				height: 16px;
			}
	.main-content .el-table .el-switch.is-checked /deep/ .el-switch__core::after {
				margin: 0 0 0 -17px;
				left: 100%;
			}
	
	.main-content .el-table .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	.main-content .el-table .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				color: #c0c4cc;
				display: inline-block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
