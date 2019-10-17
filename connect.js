const { Client } = require('pg');

const client = new Client({
  connectionString:'postgres://cfcehvzgeqyztw:ba0a9f0970322769c81172591955520ef82b4a3ffd9f6f7a878cce74f8b1c906@ec2-174-129-27-158.compute-1.amazonaws.com:5432/d3f7pp9crb6n4g',
  ssl: true,
});


const  CTB = 'CREATE TABLE question(id SERIAL PRIMARY KEY,question VARCHAR NOT NULL);'
 const IDB = "INSERT INTO question (name) VALUES ($1)"
 
// client.query(CTB,(err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });
//  เปิดโค้ตตรงนี้เพื่อสร้าง database

// let createData=()=>{
//     client.connect();
//     client.query(CTB,(err, res) => {
//         if (err) throw err;
//         for (let row of res.rows) {
//           console.log(JSON.stringify(row));
//         }
//         client.end();
//       });
// }

// let addData=(params)=>{
//     client.connect();
//     client.query(IDB,[params],(err, res) => {
//         if (err) throw err;
//         for (let row of res.rows) {
//           console.log(JSON.stringify(row));
//         }
//         client.end();
//       });
// }
// let  getData=()=>{
//     client.connect();
//     let result = []
//      client.query(SDB,(err, res) => {
//         result.push(res.rows)
//         if (err) throw err;
//         for (let row of res.rows) {
            
//           console.log(JSON.stringify(row));
//         }
       
//         console.log(`this is = ${result}`);
//       });
//       client.end();
    
     
//       return result
    
      
// }
// createData()
module.exports= {
    clientDB:client
}