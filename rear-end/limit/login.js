const joi = require('joi');

//string 值只能为字符串
//alphanum 值只能为字母和数字
//min 最小长度 max 最大长度
//required() 必填项
//pattern 正则表达式

//账号验证
const account = joi.string().alphanum().min(6).max(12).required();
//密码验证
const password = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required();

exports.login_limit =  {  
    //对req.body进行验证
    body: {
        account,
        password
    }
    
}