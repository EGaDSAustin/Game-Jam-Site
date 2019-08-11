const mongoose = require('mongoose');
const express = require('express');
const Form = require("../models/form");

const router = express.Router();

router.post("/:email", (req, res, next) => {
    console.log("email: " + req.params.email);
    console.log(req.body);
    const submit = new Form({...req.body, created: Date.now()});
    submit.save().then(result => {
        console.log(`submission: ${result}`);
    }).catch(err => {
        console.log(err.message);
    });
    res.status(201).json({
        email: req.params.email
    });
});

router.get("/:email", (req, res, next) => {
    console.log(req.param.email);
    // FIXME: may not work
    const submit = new Form();
    submit.find({email: req.param.email}).then(result => {
        console.log(`submission: ${result}`);
    }).catch(err => {
        console.log(err.message);
    });
});

module.exports = router;