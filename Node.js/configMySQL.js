const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

con.connect((err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("no error");
    }
});      // to check that database (mySql) is connected or not

module.exports = con;