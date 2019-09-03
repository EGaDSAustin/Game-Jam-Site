const mongoose = require('mongoose');
const express = require('express');
const Form = require("../models/form");
const { connectDatabase } = require("../database")


// connect to the database
console.log("connecting database:");
connectDatabase();

const router = express.Router();

function validateEmail(email) {
    // Maybe change to something other than a reg. ex.
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validateLink(link) {
    return /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(link);
}

function validateResponse(req,res){
    if (! validateEmail(req.params.email)) {
        res.status(500).json({
            error: {
                message: "Invalid Email address"
            }
        });
        return;
    }

    // Validate what links down here 
}

router.get("/:email", (req, res, next) => {
    
    validateResponse(req,res);

    Form.findOne({email: req.params.email}).
    exec((error, form) => {
        if (error) {
            res.status(500).json({
                error: {
                    message: error.message
                }
            })
            return;
        }
        console.log(form);
        res.json(form);
    });
});

router.post("/", (req, res, next) => {
    // Form.deleteMany({email: "sexycatlady69@jimminycrickets.io"}, (err, res) => console.log(err.message));
    console.log("email: " + req.body.email);
    console.log("created");

    Form.findOne({email: req.body.email}).
    exec((err, result) => {
        if (err) {
            console.log(err);
            throw err;
        }
        else if (!result) {
            //create
            result = new Form({...req.body, created: Date.now()});
            result.save().then(result => {
                console.log(`submission: ${result}\n saved`);
        
                res.status(201).json({
                    email: req.params.email,
                    status: "created"
                });
            }).catch(err => {
                console.log(err.message);
            });
        }
        else {
            res.status(500).json({
                error : {
                    message : "alread a submition under this email"
                }
            });
        }
    });
});

module.exports = router;