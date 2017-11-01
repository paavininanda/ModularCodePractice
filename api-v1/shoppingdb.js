var router = require('express').Router();
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('../db');


router.get('/:id', function (req, res) {
    db.actions.shoppingData.GetFromTable(req.params.id,function (data) {
        console.log(data[0].item);
        res.send(data[0].item);
    });
});

router.get('/price/:id', function (req, res) {
    db.actions.shoppingData.GetFromTable(req.params.id,function (data) {
        console.log(data[0].price);
        res.send(data[0].price);
    });
});

// //Filling entries of a table
//
// const model = require('../model');
//
// //force: true means create a new table even if it already exsits
//
// function getFromTable(itemData, doneCallback) {
//     model.shopping.findOne({ where: {id: `${itemData}` }}).then(function(data) {
//         doneCallback(data);
//     });
// }
//
//
// module.exports = {
//     GetFromTable : getFromTable
// };

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