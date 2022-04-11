const express = require('express');
const app = express();
const databaseConfig = require('./config/DB.js');
const { PORT } = require('./constant.js');

require('./config/express.js')(app);
// app.get('/', (res, req) => {
//     req.json({ "test": "test" });
//     req.end();
// })
databaseConfig()
    .then(() => {
        app.listen(PORT, function() {
            console.log(`Server working on port http://localhost:${PORT}/`)
        })
    })
    .catch((err) => {
        console.log(err);
    });