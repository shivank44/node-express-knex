const Todo = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


exports.signup = (req,res,next) => {
    User.getusersByEmail(req.body.email).then(user => {
        if(user){
            return res.status(409).json({
                message: "Mail exists"
              });
        }else{
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if (err) {
                      return res.status(500).json({
                        error: err
                      });
                    } else {
                        req.body.password = hash;
                        User.create(req.body).then(user => {
                            res.json(user[0]);
                          });  
                    }
                });
            });
        }
    });
};


exports.login = (req, res, next) => {

    User.getusersByEmail(req.body.email).then(user => {
        if (!user) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }else{
          bcrypt.compare("secret", user.password, (err, result) => {
            if (err) {
              return res.status(401).json({
                message: "Auth failed"
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user.id
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h"
                }
              );
              return res.status(200).json({
                message: "Auth successful",
                token: token
              });
            }
            res.status(401).json({
              message: "Auth failed"
            });
          });  
        }  
    });
  };

