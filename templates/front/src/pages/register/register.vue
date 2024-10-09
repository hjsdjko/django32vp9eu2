<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","borderColor":"#fff","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231221/d311741105644ad982e6980649630f64.jpg) no-repeat center top / 100% 100%","borderWidth":"40px 80px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"border":"20px solid #000","padding":"60px 50% 90px 0","boxShadow":"none","margin":"0","display":"flex","minHeight":"calc(100vh - 80px)","overflow":"auto","borderRadius":"4px","flexWrap":"wrap","background":"none","width":"100%","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"30px","textShadow":"none","fontWeight":"bold","order":"1"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 auto 30px","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"30px","fontWeight":"600"}'>基于Python的智能停车管理系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="yonghuming">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('yonghuming')?'required':''">用户名：</div>
				<el-input v-model="registerForm.yonghuming"  placeholder="请输入用户名" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="shoujihao">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="youxiang">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="chepaihao">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('chepaihao')?'required':''">车牌号：</div>
				<el-input v-model="registerForm.chepaihao"  placeholder="请输入车牌号" />
			</el-form-item>
			<el-form-item :style='{"width":"70%","padding":"0","margin":"0 auto 15px","height":"auto","order":"2"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"width":"110px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 0px","boxShadow":"none","margin":"20px auto 0 ","color":"#fff","display":"block","borderRadius":"0","background":"#758A99","width":"340px","fontSize":"24px","fontWeight":"bold","height":"50px","order":"5"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"none","outline":"none","borderRadius":"8px","background":"rgba(64, 158, 255, 1)","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0","margin":"10px auto","color":"#818181","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none","order":"3"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuming: '',
					mima: '',
					mima2: '',
					xingbie: '',
					shoujihao: '',
					youxiang: '',
					chepaihao: '',
					touxiang: '',
					status: '',
					passwordwrongnum: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.yonghuming = [{ required: true, message: '请输入用户名', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.yonghuming = [{ required: true, message: '请输入用户名', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.status = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.passwordwrongnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.yonghuming) && `yonghu` == this.tableName){
					this.$message.error(`用户名不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shoujihao &&(!this.$validate.isMobile2(this.registerForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
					if(`yonghu` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231221/d311741105644ad982e6980649630f64.jpg) no-repeat center top / 100% 100%;
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 2px solid #C2C2C2;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: none;
						outline: none;
						color: #000;
						background: none;
						width: 340px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 2px solid #C2C2C2;
						border-radius: 0;
						padding: 0 10px;
						box-shadow: none;
						outline: none;
						color: #000;
						background: none;
						width: 340px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #C2C2C2;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: none;
						outline: none;
						color: #000;
						background: none;
						width: 340px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #C2C2C2;
						border-radius: 0;
						padding: 0 10px 0 30px;
						box-shadow: none;
						outline: none;
						color: #000;
						background: none;
						width: 340px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px solid #C2C2C2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #C2C2C2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #C2C2C2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #C2C2C2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #C2C2C2;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #C2C2C2;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 98px;
				position: absolute;
				content: "*";
			}
</style>
