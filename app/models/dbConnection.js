const mysql = require('mysql');
const dbconfig = require('../config/dbconfig')

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
})

connection.connect(error =>{
    if(error) 
        console.log(error);
    console.log('DB connected sussessfully');
});

module.exports = connection;