const express = require('express');
const router = express.Router();
const dotenv = require('dotenv')
dotenv.config();

const sign_images = require('./routes/sign_images');
router.use('/sign_images',sign_images)

module.exports = router;

