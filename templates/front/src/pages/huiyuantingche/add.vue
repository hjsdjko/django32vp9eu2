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
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="会员" prop="yonghuming">
            <el-select  @change="yonghumingChange" v-model="ruleForm.yonghuming" placeholder="请选择会员">
              <el-option
                  v-for="(item,index) in yonghumingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="手机号" prop="shoujihao">
            <el-input v-model="ruleForm.shoujihao" 
                placeholder="手机号" clearable :disabled=" false  ||ro.shoujihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车牌号" prop="chepaihao">
            <el-input v-model="ruleForm.chepaihao" 
                placeholder="车牌号" clearable :disabled=" false  ||ro.chepaihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车位名称" prop="cheweimingcheng">
            <el-input v-model="ruleForm.cheweimingcheng" 
                placeholder="车位名称" clearable :disabled=" false  ||ro.cheweimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车位位置" prop="cheweiweizhi">
            <el-input v-model="ruleForm.cheweiweizhi" 
                placeholder="车位位置" clearable :disabled=" false  ||ro.cheweiweizhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="车牌照" v-if="type!='cross' || (type=='cross' && !ro.chepaizhao)" prop="chepaizhao">
            <file-upload
            tip="点击上传车牌照"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.chepaizhao?ruleForm.chepaizhao:''"
            @change="chepaizhaoUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="车牌照" prop="chepaizhao">
                <img v-if="ruleForm.chepaizhao.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.chepaizhao.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.chepaizhao.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="停车费用" prop="tingchefeiyong">
			<el-input-number v-model="ruleForm.tingchefeiyong" placeholder="停车费用" :readonly="ro.tingchefeiyong"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="停车时间" prop="tingcheshijian">
              <el-date-picker
				  :disabled=" false  ||ro.tingcheshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.tingcheshijian" 
                  type="datetime"
                  placeholder="停车时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 10px","background":"none"}' label="停车备注" prop="tingchebeizhu">
            <el-input v-model="ruleForm.tingchebeizhu" 
                placeholder="停车备注" clearable :disabled=" false  ||ro.tingchebeizhu"></el-input>
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
				yonghuming : false,
				shoujihao : false,
				chepaihao : false,
				cheweimingcheng : false,
				cheweiweizhi : false,
				chepaizhao : false,
				tingchefeiyong : false,
				tingcheshijian : false,
				tingchebeizhu : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yonghuming: '',
          shoujihao: '',
          chepaihao: '',
          cheweimingcheng: '',
          cheweiweizhi: '',
          chepaizhao: '',
          tingchefeiyong: '',
          tingcheshijian: '',
          tingchebeizhu: '',
        },
        yonghumingOptions: [],


        rules: {
          yonghuming: [
          ],
          shoujihao: [
          ],
          chepaihao: [
          ],
          cheweimingcheng: [
          ],
          cheweiweizhi: [
          ],
          chepaizhao: [
          ],
          tingchefeiyong: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          tingcheshijian: [
          ],
          tingchebeizhu: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



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
            if(o=='cheweimingcheng'){
              this.ruleForm.cheweimingcheng = obj[o];
              this.ro.cheweimingcheng = true;
              continue;
            }
            if(o=='cheweiweizhi'){
              this.ruleForm.cheweiweizhi = obj[o];
              this.ro.cheweiweizhi = true;
              continue;
            }
            if(o=='chepaizhao'){
              this.ruleForm.chepaizhao = obj[o].split(",")[0];
              this.ro.chepaizhao = true;
              continue;
            }
            if(o=='tingchefeiyong'){
              this.ruleForm.tingchefeiyong = obj[o];
              this.ro.tingchefeiyong = true;
              continue;
            }
            if(o=='tingcheshijian'){
              this.ruleForm.tingcheshijian = obj[o];
              this.ro.tingcheshijian = true;
              continue;
            }
            if(o=='tingchebeizhu'){
              this.ruleForm.tingchebeizhu = obj[o];
              this.ro.tingchebeizhu = true;
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
          }
        });
        this.$http.get('option/yonghu/yonghuming', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.yonghumingOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },
      // 下二随
      yonghumingChange () {
        this.$http.get('follow/yonghu/yonghuming?columnValue=' + this.ruleForm.yonghuming, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.shoujihao){
              this.ruleForm.shoujihao = res.data.data.shoujihao
            }
            if(res.data.data.chepaihao){
              this.ruleForm.chepaihao = res.data.data.chepaihao
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`huiyuantingche/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

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
						this.$http.get('huiyuantingche/list', {
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


								this.$http.post(`huiyuantingche/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`huiyuantingche/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      chepaizhaoUploadChange(fileUrls) {
          this.ruleForm.chepaizhao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
