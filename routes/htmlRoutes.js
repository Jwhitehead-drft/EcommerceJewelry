const express = require('express');

export default = (app) => {
    app.get('/', (req, res) => {
        res.send("Hit Dashboard Route");
    });
}