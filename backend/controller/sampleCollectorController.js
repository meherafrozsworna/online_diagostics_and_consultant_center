const sampleCollector = require("../model/patient");
//const {Patient, validate} = require('../model/patient');
//const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
 res.send("HomePage of Helathway");
});
router.post("/add", (req, res) => {    
    let scollector = new sampleCollector({
    name: req.body.name,
    password :req.body.password,
    phone : req.body.phone,
    age: req.body.age,
    email: req.body.email,
    gender:req.body.password,
    });
    scollector.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

});
router.post('/login', async (req, res) => {
    let scollector = await sampleCollector.findOne({ email: req.body.email });
    if (!scollector) return res.status(400).send('Invalid Email');
    if (req.body.password == scollector.password) {
        res.send(scollector);
    } else {
        return res.status(400).send('Invalid password.');
    }
});
router.put('/:id/edit', async (req, res) => {
    const scollector = await sampleCollector.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            password :req.body.password,
            phone : req.body.phone,
            age: req.body.age,
            email: req.body.email,
            gender:req.body.password,
        },
        { new: true }
    );
    if (!scollector)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(scollector);
    
});

module.exports = router;