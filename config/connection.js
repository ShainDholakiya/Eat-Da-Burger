require('dotenv').config();

module.exports = {
    // "development": {
    //   "username": process.env.user,
    //   "password": process.env.password,
    //   "database": process.env.database,
    //   "host": process.env.host,
    //   "port": 3306,
    //   "dialect": "mysql"
    // },
    // "test":{
    //   "username": process.env.user,
    //   "password": process.env.password,
    //   "database": process.env.database,
    //   "host": process.env.host,
    //   "port": 3306,
    //   "dialect": "mysql"
    // },
    // "production": {
        // host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        // user: "ay7u4g9197bveocl",
        // password: "j26ze6igbc104znw",
        // database: "hocdq3nbrqz38ftp",
        // port: 3306,
        // dialect: "mysql"
        "host": process.env.host,
        "user": process.env.user,
        "password": process.env.password,
        "database": process.env.database,
        "port": 3306,
        "dialect": "mysql"
    // },
  }