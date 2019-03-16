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
    "production": {
      "username": process.env.user,
      "password": process.env.password,
      "database": process.env.database,
      "host": process.env.host,
      "port": 3306,
      "dialect": "mysql"
    },
  }