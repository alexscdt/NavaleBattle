const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const date = require('date-and-time');

// Config
require('path')
const mysqlConnect = require("./config/sql");
const appConfig = require("./config/listen");
const now = new Date();

// Constante

const mysql = mysqlConnect.ConnectMysql;
const app = express();
app.use(morgan("short"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json({ limit: "200mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(morgan("short"));

// Start Server

let server = app.listen(appConfig.Port, appConfig.Host, () => {
    console.log("Listening on port: " + appConfig.Host + ":" + appConfig.Port);
});

// Add headers

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
});

// Verification Connection Base de donnée

mysql.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as thread id: " + mysql.threadId);
});




// Poster son Score

app.post("/newScore", (req, res) => {
    const queryString = "INSERT INTO player (pseudo, mail, date)"
        + " VALUES (?,?,?)";
    mysql.query(
        queryString, [
            req.body.nom,
            req.body.mail,
            date.format(now, 'YYYY/MM/DD HH:mm:ss')
        ],
        (err, results, fields) => {
            if (err) {
                console.log("Failed to insert new user: " + err);
                res.sendStatus(500);
            } else {
                const queryString = "INSERT INTO history (date, idPlayer, score)"
                    + " VALUES (?,?,?)";
                mysql.query(
                    queryString, [
                        date.format(now, 'YYYY/MM/DD HH:mm:ss'),
                        results.insertId,
                        req.body.scorePlayer,
                    ],
                    (err, results, fields) => {
                        if (err) {
                            console.log("Failed to insert new user: " + err);
                            res.sendStatus(500);
                        }
            })

            }

            res.end();
        })
});

app.get("/History", (req, res) => {
    const queryString = "SELECT history.*, player.pseudo FROM history INNER JOIN player ON player.id = history.idPlayer ORDER BY history.id DESC ";
    mysql.query(queryString, [

    ], (err, rows, fields) => {
        if (err) {
            console.log("[COMPANY - picture - select] error => " + err);
            res.sendStatus(500);
            return;
            // throw err
        }

        res.json(rows);
    });
});

app.get("/Classement", (req, res) => {
    const queryString = "SELECT history.*, player.pseudo FROM history INNER JOIN player ON player.id = history.idPlayer ORDER BY history.score ASC ";
    mysql.query(queryString, [

    ], (err, rows, fields) => {
        if (err) {
            console.log("[COMPANY - picture - select] error => " + err);
            res.sendStatus(500);
            return;
            // throw err
        }

        res.json(rows);
    });
});