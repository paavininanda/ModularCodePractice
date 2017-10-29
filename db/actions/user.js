//Filling entries of a table

const model = require('../model');

function fillTable(userData, doneCallback) {
    model.user.sync({force: false}).then(function() {
        // Table created
        return model.user.create({
            firstName: userData.firstName,
            lastName: userData.lastName
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