const mysql = require('mysql');  //导入mysql模块

const db = mysql.createPool({    //创建连接
  host: 'localhost',
  user: 'root',
  password: 'nao2004',
  database: 'backEndLearn',
})

//测试连接
db.query('select 1', (err, data) => {
  if (err) return console.log(err.message);
})


module.exports = db  //导出数据库（对外暴露）