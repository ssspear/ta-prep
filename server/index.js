const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todos"
});

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

app.get("/todos", (req, res) => {
  connection.query("SELECT * FROM todos", function(err, rows) {
    if (err) {
      console.log("Error in select all database query", err);
      res.end();
    }
    // console.log(rows);
    res.json(rows);
  });
});

app.post("/todos", (req, res) => {
  // console.log(req.body);
  connection.query(
    `INSERT INTO todos (name, username) VALUES ('${req.body.name}', '${
      req.body.username
    }')`,
    function(err, rows) {
      if (err) {
        console.log("Error in insert into database query", err);
        res.end();
      }
      // console.log(rows);
      res.json(rows);
    }
  );
});

app.listen(3000, () => "Now listening on port 3000!");
