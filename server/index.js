const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const mysql = require("mysql");
const connection = require("../database/index").connection;
const getTodos = require("../database/index").getTodos;
const saveTodos = require("../database/index").saveTodos;

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

app.get("/todos", (req, res) => {
  console.log(req.body);
  getTodos((err, rows) => {
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
  saveTodos(req.body, (err, rows) => {
    if (err) {
      console.log("Error in insert into database query", err);
      res.end();
    }
    // console.log(rows);
    res.json(rows);
  });
});

app.listen(3000, () => "Now listening on port 3000!");
