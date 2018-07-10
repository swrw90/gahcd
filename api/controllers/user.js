const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Create user
exports.user_signup = (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(422).json({
                message: 'Valid Email'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                if (err) {
                    return res.status(500).json({
                        error: err + 'Invalid'
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: encrypted,
                        name: req.body.name,
                        role: req.body.role
                    });
                    user
                    .save()
                    .then(result => {
                        console.log(result)
                        res.status(201).json({
                            message: 'User Created'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err + 'Invalid'
                        });
                    });
                }
            } );
        }
    });
}

