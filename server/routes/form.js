const mongoose = require('mongoose');
const express = require('express');
const Form = require("../models/form");
const { connectDatabase } = require("../database")


// connect to the database
console.log("connecting database:");
connectDatabase();

const router = express.Router();

router.get("/:email", (req, res, next) => {
    console.log("email " + req.params.email);
    Form.findOne({email: req.params.email}).
    exec((error, form) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        console.log(form);
        res.json(form);
    });
});

router.post("/:email", (req, res, next) => {
    // Form.deleteMany({email: "sexycatlady69@jimminycrickets.io"}, (err, res) => console.log(err.message));
    console.log("email: " + req.params.email);
    console.log("created");

    Form.findOne({email: req.params.email}).
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