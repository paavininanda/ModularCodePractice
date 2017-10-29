const router = require('express').Router();

var route = {
    api : require('./userdata')
};

router.use('/index', route.api.Router);

module.exports = {
    Route : router
};