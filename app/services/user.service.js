var userModel = require('../models/user.model');

exports.createFeedback = async (req, res) => {
    try {
        /*var userExist = await userModel.findOne({
            email:req.body.email
        })

        if(userExist){
            res.send({
                message:'user already exist, please try different email id'
            })
        }*/

        let user = new userModel({
            name:req.body.name,
            email: req.body.email,
            message: req.body.message
        })

        let userResponse = await userModel.create(user);

        res.send({
            status: userResponse.name + ' registered, Thanks for your interest. We will revert you in 24 hours..!'
        })
    } catch (error) {
        res.send(error);
    }
}