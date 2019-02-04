const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todos"
});

const getTodos = connection.query("SELECT * FROM todos", function(
  err,
  results,
  fields
) {
  if (err) {
    console.log("Error in select all database query");
  }
  console.log(results);
});

export default getTodos;
