const express = require('express');

const router = express.Router(); //使用express框架的路由
const loginHandler = require('../router_handle/login'); //引入登录控制器

const expressJoi = require('@escook/express-joi'); //引入Joi
const { login_limit } = require('../limit/login.js'); //引入登录验证规则

router.post('/login', loginHandler.login);
router.post('/register', loginHandler.register);

module.exports = router; // 导出