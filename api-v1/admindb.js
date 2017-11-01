var express = require('express');
var router = require('express').Router();
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('../db');

router.post('/item', function (req,res) {
    //add to db directly
    var Obj = JSON.parse(req.body.Obj);
    console.log(Obj.item);
    db.Add(Obj.item, Obj.price, function (data) {
        res.send(data);
        db.Display(function () {
            console.log('done');
        });
    });
});


router.post('/item', function (req, res) {
    var Obj = JSON.parse(req.body.Obj);
    db.actions.shopping.FillTable(userData,function (err, data) {
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
