const mongoose = require('mongoose');
const express = require('express');
const Form = require("../models/form");

const router = express.Router();

router.get("/:email", (req, res, next) => {
    console.log("email "+req.params.email);
    
    const result = Form.findOne({email: req.params.email})
    console.log(`submission: ${result}`);
    // FIXME: Doesnt work
    res.status(200).json(result);
});

router.post("/:email", (req, res, next) => {
    Form.deleteMany({email: "sexycatlady69@jimminycrickets.io"}, (err, res) => console.log(err.message));

    console.log("email: " + req.params.email);
    const result = Form.update({email: req.params.email}, 
        {...req.body, created: Date.now() }, 
        {upsert : true},
        (e, result) => {
            console.log(e.message)
            if (!result) {
                result = new Form({...req.body, created: Date.now()});
                console.log("created")
            } 
            result.save().then(result => {
                console.log(`submission: ${result}`);
            }).catch(err => {
                console.log(err.message);
            });
            res.status(201).json({
                email: req.params.email,
                status: "created"
            });
            return
    });
    console.log(`update log - submission: ${result.email} ${result.created}`);
    res.status(201).json({
        email: req.params.email,
        status: "updated"
    });

    // const submit = new Form({...req.body, created: Date.now()});
    // submit.save().then(result => {
    //     console.log(`submission: ${result}`);
    // }).catch(err => {
    //     console.log(err.message);
    // });
    // res.status(201).json({
    //     email: req.params.email,
    //     status: "created"
    // });
});


module.exports = router;