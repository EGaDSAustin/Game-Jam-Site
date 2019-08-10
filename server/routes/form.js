const mongoose = require('mongoose');
const express = require('express');
const Form = require("../models/form");

const router = express.Router();

router.post("/:email", (req, res, next) => {
    console.log(req.param.email);
    const submit = new Form({...mySubmit, created: Date.now()});
    submit.save().then(result => {
        console.log(`submition: ${result}`);
    }).catch(err => {
        console.log(err.message);
    });
});