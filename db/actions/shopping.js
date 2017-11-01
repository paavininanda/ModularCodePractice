//Filling entries of a table

const model = require('../model');

//force: true means create a new table even if it already exsits

function getFromTable(itemData, doneCallback) {
    model.shopping.findOne({ where: {id: `${itemData}` }}).then(function(data) {
       doneCallback(data);
    });
}


module.exports = {
    GetFromTable : getFromTable
};