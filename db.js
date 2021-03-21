const sql = require('mysql');

const con = sql.createConnection({
    host: "localhost",
    password: "pass",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    const sql = "";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});