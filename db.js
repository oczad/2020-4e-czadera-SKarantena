const sql = require('mysql');

const con = sql.createConnection({
    HOST: "us-cdbr-east-03.cleardb.com",
    USER:"bcb11a924bf386",
    PASSWORD: "478a997e",
    DB: "heroku_ce89c42958f3adegit"
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