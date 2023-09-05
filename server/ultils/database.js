const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hongphuc27298",
  database: "hackathon_bs_0905",
  port: 3306,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

module.exports = pool.promise();
