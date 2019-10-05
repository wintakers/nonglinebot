var sqlite3 = require ("sqlite3").verbose();
var db = new sqlite3.Database("./demo1.sqlite", err =>{
  console.log(err);
})
db.all("SELECT * FROM t1", [], (err,row) =>{
  // console.dir(row);
  row.map((item)=>{console.dir(item)}) 
});
db.all("INSERT INTO  t1(menu) VALUES(?)", ["aaCAkE"], (err) =>{
  console.dir(err.message);

});