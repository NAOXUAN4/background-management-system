<template>
   <el-dialog v-model="state.forgetDialog1"width="600">
        
        <!-- forgetPassword界面body -->
        <el-form :model="Forgetform" label-width="auto" style="max-width: 2560px">
            <el-form-item class="forget-Account-Form">
                <el-input v-model="Forgetform.account"  placeholder="Account" class="forget-input-Account"/>
            </el-form-item>
            <el-form-item class="forget-Email-Form">
                <el-input v-model="Forgetform.email"  placeholder="Email" class="forget-input-Email"/>
            </el-form-item>
        </el-form>

        <!-- forgetPassword界面footer -->
        <div class="for-card-footer-wrapped">
            <div class="cancel-button-wrapped">
                <el-button typ0e="primary" class="cancel-button">Cancel</el-button>
            </div>
            <div class="confirm-button-wrapped">
                <el-button typ0e="primary" class="confirm-button">Confirm</el-button>
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

//表单对象接口
interface formData  {
    account :number;
    email :string
}
 
//弹窗函数封装（默认关闭）
const state = reactive({
    forgetDialog1: false,
})

//入口函数，打开弹窗
const open = () => {
    state.forgetDialog1 = true
}

defineExpose({  //对外暴露open函数
    open
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

.forget-Account-Form,.forget-Email-Form{
    height: 60px;
}
.forget-input-Account,.forget-input-Email{
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