const router = require('express').Router();

var route = {
    api1 : require('./userdata'),
    api2 : require('./shoppingdb'),
    api3 : require('./admindb')
};

router.use('/index', route.api1.Router);
router.use('/shopping', route.api2.Router);
router.use('/admin', route.api3.Router);

module.exports = {
    Route : router
};