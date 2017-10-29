const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const port = 5000 || process.env.PORT;
const db = require('./db');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, function(){
    console.log('running on port 5000');
    db.model.connection();
});

app.post('/add', function (req, res) {
    var userData = req.body.user;
    db.actions.userData.FillTable(userData,function (err, data) {
       if(err){
           res.send(err);
       }
       else{
           res.send(data);
       }
    })
});