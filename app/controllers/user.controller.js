var userService = require('../services/user.service')

exports.createFeedback = (req , res) => {
    try {
        req.assert('name','Name cannt be blank').notEmpty();
        req.assert('email','email cannt be blank').isEmail();
        req.assert('message','message cannt be blank').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            return res.status(400).send(errors);
        } else {
            userService.createFeedback(req, res);
            
        }
    } catch (error) {
        res.send(error);
    }
} 