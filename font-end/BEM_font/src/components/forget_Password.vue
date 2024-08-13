<template>

    <!-- 验证身份 账号+邮箱 -->
   <el-dialog v-model="state.forgetDialog1"width="600">
        
        <!-- forgetPassword界面body -->
        <el-form :model="Forgetform" label-width="auto" style="max-width: 2560px" :rules="rules">
            <el-form-item class="forget-Account-Form" prop="Account">
                <el-input v-model="Forgetform.account"  placeholder="Account" class="forget-input-Account"/>
            </el-form-item>
            <el-form-item class="forget-Email-Form" prop="Email">
                <el-input v-model="Forgetform.email"  placeholder="Email" class="forget-input-Email"/>
            </el-form-item>
        </el-form>

        <!-- forgetPassword界面footer -->
        <div class="for-card-footer-wrapped">
            <div class="cancel-button-wrapped">
                <el-button typ0e="primary" class="cancel-button" @click="state.forgetDialog1 = false">Cancel</el-button>
            </div>
            <div class="confirm-button-wrapped">
                <el-button typ0e="primary" class="confirm-button" @click="FunctionOpenFD2">Next Step</el-button>
            </div>
        </div>
        </el-dialog>



        <!-- 修改密码 -->
   <el-dialog v-model="state.forgetDialog2"width="600">
        
        <!-- changePassword界面body -->
        <el-form :model="Changeform" label-width="auto" style="max-width: 2560px" :rules="rules">
            <el-form-item class="change-Pwd-Form" prop="Password">
                <el-input v-model="Changeform.Password"  placeholder="New Password" class="change-input-Pwd"/>
            </el-form-item>
            <el-form-item class="change-PwdConfirm-Form" prop="rePassword">
                <el-input v-model="Changeform.rePassword" placeholder="Confirm Password" class="change-input-PwdConfirm"/>
            </el-form-item>
        </el-form>

        <!-- changePassword界面footer -->
        <div class="for-card-footer-wrapped">
            <div class="cancel-button-wrapped">
                <el-button typ0e="primary" class="cancel-button" @click="state.forgetDialog2 = false">Cancel</el-button>
            </div>
            <div class="confirm-button-wrapped">
                <el-button typ0e="primary" class="confirm-button" @click="FunctionOpenFD2">Confirm</el-button>
            </div>
        </div>
        </el-dialog>



</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'   

const Forgetform : formData = reactive({
    account: null,
    email:'',
})

const Changeform : formData = reactive({
    account: null,
    Password:'',
    rePassword:'',
})

//表单对象接口
interface formData  {
    account :number;
    email ? :string;
    Password ? :string;
    rePassword ? :string;
}

//表单规则
const rules = reactive({
    Account: [
        { required: true, message: 'Please input account', trigger: 'blur'},
    ],
    Email: [
        { required: true, message: 'Please input email', trigger: 'blur' },    
    ],
    Password: [
        { required: true, message: 'Please input Password', trigger: 'blur'},
    ],
    rePassword: [
        { required: true, message: 'Please confirm you Password', trigger: 'blur' },    
    ]
    
})
 
//弹窗函数封装（默认关闭）
const state = reactive({
    forgetDialog1: false,
    forgetDialog2: false,
})

//入口函数，打开弹窗
const openFD1 = () => {
    state.forgetDialog1 = true
}
const openFD2 = () => {
    state.forgetDialog2 = true
}

const FunctionOpenFD2 = () => {
    openFD2()
}

defineExpose({  //对外暴露open函数
    openFD1
})




</script>


<style scoped>

.el-overlay-dialog {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
}


.el-dialog__body {
    display: flex;
    flex-direction: column;
}

.forget-Account-Form,.forget-Email-Form,.change-PwdConfirm-Form,.change-Pwd-Form{
    height: 60px;
}
.forget-input-Account,.forget-input-Email ,.change-input-PwdConfirm,.change-input-Pwd{
    --el-input-border: 4px,dashed,#fdfdfd;
    --el-input-focus-border-color:#7300ff;
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
    color: #008d0576;
}

.for-card-footer-wrapped {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}
.confirm-button-wrapped,.cancel-button-wrapped {
    width: 50%;
    display: flex;
    justify-content: center;
}
.confirm-button,.cancel-button {
    display: flex;
    width: 100%;
    height: 100%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 15px;
    border: 2px dashed #d299ff;
    --el-button-bg-color :#46009b;
    --el-button-text-color:#ffffff;
    --el-button-hover-bg-color: #2a005e;
    --el-button-hover-text-color:#00ff15;
}

</style>

<style>
.el-overlay {
    background-color: rgba(85, 0, 195, 0.119);
    backdrop-filter: blur(10px);
}
.el-dialog {
    display: flex;
    flex-direction: column;
    margin-top: 18%;
    --el-dialog-bg-color:#000000;
    border: 2px,dashed,#00be06;
}
.el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close {
    color: #ffffff;
}
</style>