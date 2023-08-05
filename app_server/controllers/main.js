var express = require('express');
var router = express.Router();

/* GET home page. */
const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
};


module.exports = {
    index
};