<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","borderColor":"#fff","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231221/d311741105644ad982e6980649630f64.jpg) no-repeat center top / 100% 100%","borderWidth":"40px 80px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"border":"20px solid #000","padding":"60px 50% 80px 0","boxShadow":"none","margin":"0","alignItems":"center","flexDirection":"column","display":"flex","justifyContent":"center","minHeight":"calc(100vh - 80px)","borderRadius":"4px","flexWrap":"wrap","background":"none","width":"100%","backgroundSize":"50% 100%","backgroundPosition":"right","position":"relative","backgroundRepeat":"no-repeat","height":"auto"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 auto 30px","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"30px","fontWeight":"bold","order":"1"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"margin":"0 auto 30px","color":"#000","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"30px","fontWeight":"600"}'>基于Python的智能停车管理系统的设计与实现登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"70%","margin":"0 auto 30px","order":"3"}' prop="username">
				<div v-if="true" :style='{"width":"100px","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}'>账号：</div>
				<input :style='{"border":"2px solid #E3E3E3","padding":"0 10px","boxShadow":"none","outline":"0px solid #efefef","color":"#000","outlineOffset":"4px","background":"none","width":"350px","fontSize":"14px","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"70%","margin":"0 auto 30px","order":"3"}' prop="password">
				<div v-if="true" :style='{"width":"100px","lineHeight":"44px","fontSize":"14px","color":"#818181","textAlign":"right"}'>密码：</div>
				<input :style='{"border":"2px solid #E3E3E3","padding":"0 10px","boxShadow":"none","outline":"0px solid #efefef","color":"#000","outlineOffset":"4px","background":"none","width":"350px","fontSize":"14px","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>

			<el-form-item class="list-type select" :style='{"width":"70%","margin":"0 auto 30px","order":"3"}' v-if="roles.length>1">
			  <el-select v-model="loginForm.tableName" placeholder="请选择角色" @change="selectChange">
				<el-option v-for="item,index in roles" :key="index" :label="item.roleName" :value="item.tableName" />
			  </el-select>
			</el-form-item>

			
			<el-form-item class="list-btn" :style='{"width":"70%","margin":"0 auto","position":"static","order":"5"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"20px 0 0 100px","color":"#fff","borderRadius":"4px","background":"#758A99","width":"350px","fontSize":"22px","fontWeight":"bold","height":"50px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 5px","outline":"none","color":"#fff","borderRadius":"4px","background":"rgba(64, 158, 255, 1)","display":"none","width":"auto","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"padding":"0 0 0 100px","margin":"0 auto","alignItems":"center","flexWrap":"wrap","background":"none","display":"flex","width":"70%","order":"4"}'>
			<router-link :style='{"cursor":"pointer","margin":"0 10px 10px 0","color":"#818181","background":"none","display":"flex","fontSize":"14px","textDecoration":"none"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
</div>
</template>

<script>
import menu from '@/config/menu'
export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}],
			flag: false,
			verifyCheck2: false,
		}
	},
  components: {
  },
	created() {
		this.roleMenus = menu.list()
		for(let item in this.roleMenus) {
		    if(this.roleMenus[item].hasFrontLogin=='是') {
		        this.roles.push(this.roleMenus[item]);
		    }
		}
		
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
	  selectChange(e){
		  this.role = e
	  },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }

		this.loginPost(formName)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  loginPost(formName) {
		this.$refs[formName].validate((valid) => {
		  if (valid) {
		    this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
		      if (res.data.code === 0) {
		        localStorage.setItem('frontToken', res.data.token);
		        localStorage.setItem('UserTableName', this.loginForm.tableName);
		        localStorage.setItem('username', this.loginForm.username);
		        localStorage.setItem('adminName', this.loginForm.username);
		        localStorage.setItem('frontSessionTable', this.loginForm.tableName);
		        localStorage.setItem('frontRole', this.role);
		        localStorage.setItem('keyPath', 0);
		        this.$router.push('/');
		        this.$message({
		          message: '登录成功',
		          type: 'success',
		          duration: 1500,
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
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231221/d311741105644ad982e6980649630f64.jpg) no-repeat center top / 100% 100%;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-form-item__content {
			display: flex;
		}

		.list-code /deep/ .el-form-item__content {
			display: flex;
		}

		.list-type /deep/ .el-form-item__content {
			display: flex;
		}

		.list-btn /deep/ .el-form-item__content {
			display: flex;
			position: static;
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border: 2px solid #E3E3E3;
			padding: 0 10px;
			box-shadow: none;
			outline: 0px solid #efefef;
			color: #000;
			background: none;
			width: 350px;
			font-size: 14px;
			outline-offset: 4px;
			height: 44px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 2px solid #E3E3E3;
			padding: 0 10px;
			outline: none;
			color: #000;
			background: none;
			display: inline-block;
			vertical-align: middle;
			width: 240px;
			font-size: 14px;
			height: 44px;
		}

		// select
		.list-type.select .el-select /deep/ .el-input__inner {
			border: 2px solid #E3E3E3;
			padding: 0 10px;
			box-shadow: none;
			margin: 0 0 0 100px;
			color: #000;
			background: none;
			width: 350px;
			font-size: 14px;
			height: 44px;
		}
	}

</style>
