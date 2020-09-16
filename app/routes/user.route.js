var express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
var userController = require('../controllers/user.controller');
router.use(expressValidator());

router.post('/createFeedback', userController.createFeedback);

module.exports = router;