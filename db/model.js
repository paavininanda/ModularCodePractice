const config = require('../config.json')
const Sequelize = require('sequelize');
const configUrl = `mysql://${config.USERNAME}:${config.PASSWORD}@${config.HOST}:3306/${config.DB}`;

//Can use either alternative
const sequelize = new Sequelize(configUrl, {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});

//Upper method is better
// const sequelize = new Sequelize('tasks' , 'paavini', '1234' , {
//     host: 'localhost',
//     dialect: 'mysql',
//
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
//
// });


function connectionStart() {
    sequelize
        .authenticate()
        .then(function() {
            console.log('Connection has been established successfully.');
        })
        .catch( function(err){
            console.error('Unable to connect to the database:', err);
        });
}

// Writing a model ie defining a table

var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

var Shopping = sequelize.define('shopping', {
    item: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

module.exports = {
    connection : connectionStart,
    user : User,
    shopping : Shopping
};