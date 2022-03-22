const express = require('express');
const cookieParser = require('cookie-parser');

function expressConfig(app) {
    app.use(express.json());
    app.use(cookieParser);

}

module.exports = expressConfig