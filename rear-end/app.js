require('events').EventEmitter.defaultMaxListeners = 15;

//导入express框架
const express  = require('express')
const app = express()

//导入cors
const cors = require('cors')
app.use(cors())

//导入body-parser 用于解析post请求,预处理表单
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) //false:简单的解析方法,只解析字符串数组
app.use(bodyParser.json())

app.use((req,res,next) => {   //注册失败处理函数
    //status 0:成功，1:失败
    res.cc = (err,status = 1)=>{
        res.send({
            status,
            message:err instanceof Error ? err.message :err,
        })
    }
    next()
})

const loginRouter = require('./router/login') //设置后端路由login
app.use('/api',loginRouter)

app.use((err,req,res,next) => {   //不符合joi规则报错中间件
    if(err instanceof Joi.ValidationError){
        return res.cc(err)
    }
    next()
})

const jwtconfig = require('./jwt_config/index.js') 
const {expressjwt:jwt} = require('express-jwt')
app.use(jwt({
    secret: jwtconfig.jwtSecretKey, // 设置JWT签名密钥
    algorithms: ['HS256'] // 设置签名算法，这里使用HS256
}).unless({
    path:[/^\/api\//]// 设置不需要进行JWT验证的路由，这里以`/api/`开头的路由不需要验证
}))

//绑定和侦听的主机以及端口
const port = 3007
app.listen(port, () => {
    console.log('http://localhost:'+port);
})