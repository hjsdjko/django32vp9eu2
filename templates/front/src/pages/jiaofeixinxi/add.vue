<template>
<div :style='{"width":"100%","padding":"20px 10%","margin":"10px auto","position":"relative","background":"none"}'>
    <el-form
	  :style='{"width":"100%","padding":"20px 0","position":"relative","flexWrap":"wrap","background":"#F1F1F1","display":"flex"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车位名称" prop="cheweimingcheng">
            <el-input v-model="ruleForm.cheweimingcheng" 
                placeholder="车位名称" clearable :disabled=" false  ||ro.cheweimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车位类型" prop="cheweileixing">
            <el-input v-model="ruleForm.cheweileixing" 
                placeholder="车位类型" clearable :disabled=" false  ||ro.cheweileixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车位位置" prop="cheweiweizhi">
            <el-input v-model="ruleForm.cheweiweizhi" 
                placeholder="车位位置" clearable :disabled=" false  ||ro.cheweiweizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="发票" v-if="type!='cross' || (type=='cross' && !ro.fapiao)" prop="fapiao">
            <file-upload
            tip="点击上传发票"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fapiao?ruleForm.fapiao:''"
            @change="fapiaoUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="发票" prop="fapiao">
                <img v-if="ruleForm.fapiao.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fapiao.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fapiao.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="停车费用" prop="tingchefeiyong">
			<el-input-number v-model="ruleForm.tingchefeiyong" placeholder="停车费用" :readonly="ro.tingchefeiyong"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="停车时长" prop="tingcheshizhang">
			<el-input-number v-model="ruleForm.tingcheshizhang" placeholder="停车时长" :readonly="ro.tingcheshizhang"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="总费用" prop="zongfeiyong">
              <el-input v-model="zongfeiyong" placeholder="总费用" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="用户名" prop="yonghuming">
            <el-input v-model="ruleForm.yonghuming" 
                placeholder="用户名" clearable :disabled=" false  ||ro.yonghuming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="手机号" prop="shoujihao">
            <el-input v-model="ruleForm.shoujihao" 
                placeholder="手机号" clearable :disabled=" false  ||ro.shoujihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车牌号" prop="chepaihao">
            <el-input v-model="ruleForm.chepaihao" 
                placeholder="车牌号" clearable :disabled=" false  ||ro.chepaihao"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#758A99","width":"auto","lineHeight":"30px","fontSize":"14px","height":"30px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"none","cursor":"pointer","padding":"0 20px","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#000","width":"auto","lineHeight":"30px","fontSize":"14px","height":"30px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				cheweimingcheng : false,
				cheweileixing : false,
				cheweiweizhi : false,
				fapiao : false,
				tingchefeiyong : false,
				tingcheshizhang : false,
				zongfeiyong : false,
				yonghuming : false,
				shoujihao : false,
				chepaihao : false,
				crossuserid : false,
				crossrefid : false,
				ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          cheweimingcheng: '',
          cheweileixing: '',
          cheweiweizhi: '',
          fapiao: '',
          tingchefeiyong: '',
          tingcheshizhang: '',
          zongfeiyong: '',
          yonghuming: '',
          shoujihao: '',
          chepaihao: '',
          crossuserid: '',
          crossrefid: '',
          ispay: '',
        },


        rules: {
          cheweimingcheng: [
          ],
          cheweileixing: [
          ],
          cheweiweizhi: [
          ],
          fapiao: [
          ],
          tingchefeiyong: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          tingcheshizhang: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          zongfeiyong: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          yonghuming: [
          ],
          shoujihao: [
          ],
          chepaihao: [
          ],
          crossuserid: [
          ],
          crossrefid: [
          ],
          ispay: [
          ],
        },
		centerType: false,
      };
    },
    computed: {


        zongfeiyong:{
            get: function () {
                return 1*this.ruleForm.tingchefeiyong*this.ruleForm.tingcheshizhang
            }
        },

    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='cheweimingcheng'){
              this.ruleForm.cheweimingcheng = obj[o];
              this.ro.cheweimingcheng = true;
              continue;
            }
            if(o=='cheweileixing'){
              this.ruleForm.cheweileixing = obj[o];
              this.ro.cheweileixing = true;
              continue;
            }
            if(o=='cheweiweizhi'){
              this.ruleForm.cheweiweizhi = obj[o];
              this.ro.cheweiweizhi = true;
              continue;
            }
            if(o=='fapiao'){
              this.ruleForm.fapiao = obj[o].split(",")[0];
              this.ro.fapiao = true;
              continue;
            }
            if(o=='tingchefeiyong'){
              this.ruleForm.tingchefeiyong = obj[o];
              this.ro.tingchefeiyong = true;
              continue;
            }
            if(o=='tingcheshizhang'){
              this.ruleForm.tingcheshizhang = obj[o];
              this.ro.tingcheshizhang = true;
              continue;
            }
            if(o=='zongfeiyong'){
              this.ruleForm.zongfeiyong = obj[o];
              this.ro.zongfeiyong = true;
              continue;
            }
            if(o=='yonghuming'){
              this.ruleForm.yonghuming = obj[o];
              this.ro.yonghuming = true;
              continue;
            }
            if(o=='shoujihao'){
              this.ruleForm.shoujihao = obj[o];
              this.ro.shoujihao = true;
              continue;
            }
            if(o=='chepaihao'){
              this.ruleForm.chepaihao = obj[o];
              this.ro.chepaihao = true;
              continue;
            }
            if(o=='crossuserid'){
              this.ruleForm.crossuserid = obj[o];
              this.ro.crossuserid = true;
              continue;
            }
            if(o=='crossrefid'){
              this.ruleForm.crossrefid = obj[o];
              this.ro.crossrefid = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuming!=''&&json.yonghuming) || json.yonghuming==0){
                this.ruleForm.yonghuming = json.yonghuming
            }
            if((json.shoujihao!=''&&json.shoujihao) || json.shoujihao==0){
                this.ruleForm.shoujihao = json.shoujihao
            }
            if((json.chepaihao!=''&&json.chepaihao) || json.chepaihao==0){
                this.ruleForm.chepaihao = json.chepaihao
            }
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`jiaofeixinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			this.ruleForm.zongfeiyong = this.zongfeiyong
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('jiaofeixinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`jiaofeixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`jiaofeixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      fapiaoUploadChange(fileUrls) {
          this.ruleForm.fapiao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #000;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 2px solid #DADADA;
	  cursor: pointer;
	  border-radius: 30px;
	  color: #000;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 2px solid #DADADA;
	  cursor: pointer;
	  border-radius: 30px;
	  color: #000;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 2px solid #DADADA;
	  cursor: pointer;
	  border-radius: 30px;
	  color: #000;
	  background: #fff;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #DADADA;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
