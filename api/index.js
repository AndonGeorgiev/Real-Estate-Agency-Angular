const express = require('express');
const app = express();
const databaseConfig = require('./config/DB.js');
const { PORT } = require('./constant.js');

require('./config/express.js')(app);

databaseConfig()
    .then(() => {
        app.listen(PORT, function() {
            console.log(`Server working on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err);
    });