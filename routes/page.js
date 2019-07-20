const path = require('path');

const express = require('express');

const pageController = require('../controllers/page');
const mailController = require('../controllers/mail')

const router = express.Router();

// get home page 

router.get('/', pageController.getIndex);

router.get('/contact', pageController.getContact);

router.get('/pricing', pageController.getPricing);

router.post('/contact', mailController.sendContactForm);

router.get('/contactSuccess', pageController.getcontactSuccess);

router.post('/', mailController.userSubscribe);

module.exports = router;