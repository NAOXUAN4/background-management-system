const db = require('../db/index.js')  //数据库配置文件
const bcrypt = require('bcryptjs')  //加密中间件
const jwt = require('jsonwebtoken') //jwt中间件
const jwtconfig = require('../jwt_config/index.js')  //jwt配置文件 

exports.login = (req, res) => {  //rquest，result
    const loginfo = req.body  //请求本体，即传入的账号密码
    //1.检查账号是否存在
    const sql = 'select * from user where account=?'  //mysql语句查找
    db.query(sql, loginfo.account, (err, results) => {
        if (err) return res.cc(err)  //err（报错信息传入值）不为空，调用错误处理中间件
        if (results.length != 1) return res.cc('账号不存在！')

        //2.解密前端传入的密码
        const compareResult = bcrypt.compareSync(loginfo.password,results[0].password) //bool对比密码是否正确
        if(!compareResult){
            return res.cc('密码错误')
        }

        //3.判断账号是否冻结
        if(results[0].status != 0){
            return res.cc('账号已冻结！')
        }

        //4.生成返回的token(剔除req中的密码头像创建时间更新时间，生成res)
        const user = {
            ...results[0],
            password:'',
            imageUrl:'',
            create_time:'',
            update_time:'',
        }

        const tokenStr = jwt.sign(user,jwtconfig.jwtSecretKey,{
            expiresIn:'7h'
        })
        res.send({
            results:results[0],
            status:0,
            message:'登陆成功',
            token:'Bearer '+tokenStr,
        })

        

    })

}
exports.register = (req, res) => {
    const reginfo = req.body  //接前端传来的数据requset
    //1.判断空为空否？
    if (!reginfo.account || !reginfo.password) {  //一个空为空
        return res.send({
            status: 1,
            message: '账号或密码不能为空'
        })
    }
    //2.判断账号是否存在
    const sql = 'select * from user where account=?'  //mysql语句查找
    db.query(sql, reginfo.account, (err, results) => {
        if (results && results.length > 0) return res.send({   //如果账号存在,返回
            status: 1,
            message: '账号已存在'
        })
        //3.加密密码（加密中间件bcrypt.js）
    reginfo.password = bcrypt.hashSync(reginfo.password, 10)
    //4.插入数据
    const sql2 = 'insert into user set ?'
    const create_time = new Date().toLocaleString()  //获取当前时间

    db.query(sql2, {    //参数1：sql语句，参数2：插入的数据，参数3：回调函数
        account: reginfo.account, 
        password: reginfo.password, 
        identity: '用户', 
        create_time: create_time,
        status: 0,  //冻结状态：false
    },(err, results) => {
        if (err || results.affectedRows !== 1){  //affectedRows受影响的行数,插入失败说明没有影响到1行
            return res.send({
                err:err,
                status: 1,
                message: '注册失败'
            })
        }
        res.send({
            status: 0,
            message: '注册成功'
        })
    })
    })
    

}