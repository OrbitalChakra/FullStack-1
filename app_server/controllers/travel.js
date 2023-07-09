var express = require('express');
var router = express.Router();

/* GET home page. */
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways'});
};

module.exports = {
    travel
};