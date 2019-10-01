
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "https://nattapol2540.000webhostapp.com/",
    user:"id11070982_nattapol2540",
    password:"nattapol2540",
    dbname:"id11070982_question"
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + con.threadId);
  });