
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user:"id11051026_nonglinebot2019",
    password:"nattapol2540",
    dbname:"id11051026_question_tb"
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + con.threadId);
  });