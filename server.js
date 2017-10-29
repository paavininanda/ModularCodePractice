const express = require('express');
const app  = express();
const port = 5000 || process.env.PORT;
const db = require('./db');
const api_v1 = require('./api-v1');

app.use('/api_v1', api_v1.Route);

app.listen(port, function(){
    console.log('running on port 5000');
    db.model.connection();
});

