var express = require('express');
var router = require('express').Router();
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('../db');

router.post('/add', function (req, res) {
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


module.exports = {
    Router:router
};
