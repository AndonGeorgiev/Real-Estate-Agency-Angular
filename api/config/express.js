const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./../routes')
const cors = require('cors');


function expressConfig(app) {
    app.use(cors({
        orig: 'http://localhost:4200/',
        credentials: true
    }));


    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(routes);




}

module.exports = expressConfig;