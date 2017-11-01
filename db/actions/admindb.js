//Filling entries of a table

const model = require('../model');

//force: true means create a new table ev

function fillTable(userData, doneCallback) {
    model.user.sync({force: false}).then(function() {
        // Table created
        return model.shopping.create({
            item: userData.item,
            price: userData.price
        }).then(function (data) {
            console.log(data);
            doneCallback(null, data);
        }).catch(function (err) {
            console.log(err);
            doneCallback(err);
        });
    });
}


module.exports = {
    FillTable : fillTable
};