<template>
    <div class="common-layout">
      <el-container class="container">
        <el-header class="header-wrapped">
            <div class="header-container">
                <h3>🥰</h3>
            </div>
        </el-header>
        <el-main class="main-wrapped">
            <div class="main-container">
                <el-card class="loginRegister-card">
                    <el-tabs v-model='activeName' class="card-tabs":stretch='true'>
                        <!-- 登录界面 -->
                        <el-tab-pane label="Login" name="first"  class="Login-form-wrapped">
                            <el-form :model="Loginform" label-width="auto" style="max-width: 600px">
                                <el-form-item class="Account-Form">
                                    <el-input v-model="Loginform.account"  placeholder="Account" class="input-Account"/>
                                </el-form-item>
                                <el-form-item class="Password-Form">
                                    <el-input v-model="Loginform.password"  placeholder="Password" class="input-Password"/>
                                </el-form-item>
                            </el-form>

                            <!-- 登录界面footer -->
                            <div class="card-footer-wrapped">
                                <div class="forgot-password-wrapped">
                                    <span class="forgot-password" @click="openForget">
                                        Forgot Password?
                                    </span>
                                </div>
                                <div class="login-button-wrapped">
                                    <el-button type="primary" class="login-button" @click="LoginDef">Login</el-button>
                                </div>
                            </div>
                        </el-tab-pane>

                        <!-- 注册界面 -->
                        <el-tab-pane label="Register" name="second">
                            <el-form :model="Loginform" label-width="auto" style="max-width: 600px">
                                <el-form-item class="Account-Form-reg">
                                    <el-input v-model="Registerform.account"  placeholder="Account" class="input-Account-reg"/>
                                </el-form-item>
                                <el-form-item class="Password-Form-reg">
                                    <el-input v-model="Registerform.password"  placeholder="Password" class="input-Password-reg"/>
                                </el-form-item>
                                <el-form-item class="ConfirmPassword-Form-reg">
                                    <el-input v-model="Registerform.repassword"  placeholder="Confirm_Password" class="input-Password-reg"/>
                                </el-form-item>
                            </el-form>

                            <!-- 注册界面footer -->
                            <div class="card-footer-wrapped">
                                <div class="register-button-wrapped">
                                    <el-button type="primary" class="register-button" @click="RegisterDef">Register</el-button>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </el-main>
        <el-footer class="footer-wrapped">
            <div class="footer-container">
                <span class="footer-text">by Yian❤️</span>
            </div>
        </el-footer>
      </el-container>
    </div>
    <forget_Password ref="forgetPasswordRef"></forget_Password>
  </template>
  

<script setup lang="ts">
    import { ref } from 'vue'
    import { reactive } from 'vue'
    import forget_Password from '@/components/forget_Password.vue'

    import {login,register} from '@/api/login'

    import { ElMessage } from 'element-plus';

    import { useRouter } from 'vue-router'
    const router = useRouter()


    const activeName = ref('first')  //默认为登录

    const Loginform : formData = reactive({  //登录表单
        account: null,
        password: '',
    })
    const Registerform : formData = reactive({  //注册表单
        account: null,
        password: '',
        repassword: '',
    })

    //表单接口
    interface formData {
        account: number,
        password: string,
        repassword ? : string,
    }


    //打开忘记密码弹窗函数
    const openForget = () => {
        console.log("Forget Password")
        forgetPasswordRef.value.openFD1()
    }
    const forgetPasswordRef = ref(null)


    //登录api函数----------------------------------
    const LoginDef = async () => {
        const res = await login(Loginform)
        const { token } = res.data 

        console.log(res)
        if(res.data.message == '登录成功'){
            ElMessage({
                message: '登录成功',
                type: 'success',
            })
          
            localStorage.setItem('token', token)     //把token存入本地存储
            router.push({path: '/home'})             //router跳转home

        } else if(res.data.message == '密码错误') 
        {
            ElMessage({
                message: '密码错误！',
                type : 'error',
            })
        }
        else if(res.data.message == '账号不存在！')
        {
            ElMessage({
                message: '账号不存在！',
                type : 'error',
            })
        }
    }


    //注册api函数-----------------------------------
    const RegisterDef = async () => {
        if(Registerform.password == Registerform.repassword){
            const res = await register(Registerform)   //获取后端传回的数据，具体配置在rear-end\router_handle\login.js
            console.log(res)
            if(res.data.message == '注册成功'){ 
                ElMessage({
                    message: '注册成功',
                    type: 'success',
                })
                activeName.value = 'first'  //注册成功后跳转登录界面


            } else if(res.data.message == '账号已存在'){ 
                ElMessage({
                    type: 'error',
                    message: '账号已存在！',
                })
            } else{
                ElMessage({
                    type: 'error',
                    message: '数据异常',
                })
            }
            
        } else{
            ElMessage({
                type: 'error',
                message: '两次密码不一致',
            })
        }
        
        
    }

</script>

<style>
html,body{  
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
#app,.common-layout,.container{
    display: flex;
    flex-direction: column;
    max-width: 2560px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: url('src\\assets\\background_login.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

/* ------------------------------------------------------head */
.header-wrapped {
    margin: 0;
    padding: 0;
    height: 3%;
    display: flex;
    flex-direction: column;
}
.header-container {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5500c370;
    backdrop-filter: blur(2px);
}

/* -------------------------------------------------------main */
.main-wrapped {
    margin: 0;
    padding: 0;
    height: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(85, 0, 195, 0);
}
.main-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    
}
.loginRegister-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 50%;
    background-color: #000000;
    border-radius: 15px;
    border: none;
}
.el-card__body {
    margin-top: 2%;
    padding: 2%;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
}
.card-tabs {
    width: 100%;
    height: 100%;
    --el-color-primary: #7300ff;
    --el-border-color-light: #000000;
}
/* 修改tab栏字体颜色 */
.el-tabs__item {   
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 800;
    font-size: 15px;
}

/* 修改tab栏激活字体颜色,padding */
.card-tabs > .el-tabs__content {  
  padding: 15px;
  color: #7300ff;
  font-size: 32px;
  font-weight: 600;
}

/* -----------------------------------------mian_登录界面 */
.Login-form-wrapped {
    margin-top: 30px;
    width: 100%;
    height: 60%;
    display: flex;
    justify-self:center;
    flex-direction: column;
}
.el-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.Account-Form,.Password-Form{
    height: 60px;
}
.input-Account,.input-Password{
    --el-input-border: 4px,dashed,#fdfdfd;
    --el-input-hover-border-color: #7300ff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    --el-input-bg-color:#000000;
    --el-input-border-color:#440098;
}
.el-input__inner {
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 600;
    color: #00be06;
    
}
.card-footer-wrapped {
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 15px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 800;
    color: #5500b7;
    height: 100%;
}

.forgot-password-wrapped {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.login-button-wrapped {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    width: 100%;
    height: 70px;
}

.login-button {
    height: 80%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 15px;
    border: 2px dashed #d299ff;
    --el-button-hover-bg-color: #2a005e;
    --el-button-active-bg-color: #2a005e;
    --el-button-active-border-color: #00be06;
    --el-button-hover-border-color: #dedede;
}
 
/* -----------------------------------------main_注册界面 */
.Account-Form-reg,.Password-Form-reg,.ConfirmPassword-Form-reg {
    height: 52px;
}
.input-Account-reg,.input-Password-reg, .input-Password-reg {
    --el-input-border: 4px,dashed,#fdfdfd;
    --el-input-hover-border-color: #7300ff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    --el-input-bg-color:#000000;
    --el-input-border-color:#440098;
}

.register-button-wrapped {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    width: 100%;
    height: 70px;
}

.register-button {
    height: 80%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 15px;
    border: 2px dashed #d299ff;
    --el-button-hover-bg-color: #2a005e;
}

/* ---------------------------------------------footer */
.footer-wrapped {
    margin: 0;
    padding: 0;
    height: 3%;
    display: flex;
    flex-direction: column;
}
.footer-container {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(85, 0, 195, 0.474);
    backdrop-filter: blur(2px);
}


</style>