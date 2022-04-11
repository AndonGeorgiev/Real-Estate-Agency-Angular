const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./../routes')
const cors = require('cors');


function expressConfig(app) {
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());
    app.use(routes)

}

module.exports = expressConfig;