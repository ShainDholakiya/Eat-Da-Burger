const mysql = require('mysql');
const connectionOptions = require("./connection");
var connection = mysql.createConnection(connectionOptions);
   
connection.connect();

const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    selectAllBy: function(condition, value, cb) {
        const sqlQuery = `SELECT * FROM burgers WHERE ${condition} = ${value}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    insertOne: function(burgerName, cb) {
        const sqlQuery = `INSERT INTO burgers(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    deleteOne: function(id, cb) {
        const sqlQuery = `DELETE FROM burgers WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    updateOne: function(condition, id, cb) {
        const sqlQuery = `UPDATE burgers SET devoured = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    }
};

module.exports = orm;