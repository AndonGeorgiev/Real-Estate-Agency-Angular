const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./../routes.js');

function expressConfig(app) {
    app.use(express.json());
    app.use(cookieParser);
    app.use(routes);

}

module.exports = expressConfig