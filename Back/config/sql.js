const mysql = require("mysql");

module.exports = {
    ConnectMysql: mysql.createConnection({
        url: "127.0.0.1",
        user: "root",
        database: "navalbattle",
        password: "",
    }),
};