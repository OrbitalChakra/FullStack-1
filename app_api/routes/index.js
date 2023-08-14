const express = require('express');
const router = express.Router();

const authController = require('../controllers/authentication')
const tripController = require('../controllers/trips');
const jwt = require('express-jwt');
const auth = jwt.expressjwt ({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"]
});

router 
    .route('/login')
    .post(authController.login);

router 
    .route('/register')
    .post(authController.register);

router 
    .route('/trips')
    .get(tripController.tripsList)
    .post(auth, tripController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripController.tripsFindByCode)
    .put(auth, tripController.tripsUpdateTrip);
    
module.exports = router;