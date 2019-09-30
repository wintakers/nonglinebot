
var mysql      = require('mysql');
var mysqlConnection;
function new_mysqlConnection() {
    mysqlConnection = mysql.createConnection({
      host     : 'localhost',
      user     : 'id11051026_nonglinebot2019',
      database : 'id11051026_question_tb',
      password : 'nattapol2540'
    });
}

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + con.threadId);
  });