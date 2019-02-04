const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todos"
});

const getTodos = function(callback) {
  connection.query("SELECT * FROM todos", callback);
};

const saveTodos = function(body, callback) {
  // console.log(body);
  connection.query(
    `INSERT INTO todos (name, username) VALUES ('${body.name}', '${
      body.username
    }')`,
    callback
  );
};

module.exports = { connection, getTodos, saveTodos };
