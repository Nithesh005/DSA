const express = require('express');
const sql = require('mysql2');
const app = express();
const port = 4000;

const db = sql.createConnection(
    { host:'localhost', user:'root', password:'', database:'mydatabase' }
);



app.use('/insert', (req, res) => {
    const query = `insert into nithi1 values("Nithesh","23",1002)`;
    console.log("hai");
    db.query(query,(err,result)=>{
        if (err) {
            console.error('Error inserting data:', error);
            res.status(500).send('Error inserting data');
        } else {
            console.log('Data inserted successfully');
            res.send('Inserted successfully');
        }
    })
});

app.use('/', (req, res) => {
    console.log("hello");
    res.send("welcome");
});

app.listen(port, () => {
    console.log(`Success :  Listening to the port : ${port}`);
});
