const sampleCollector = require("../model/sampleCollector");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.send('We need a token');
    } else {
        jwt.verify(token, 'jwtSecrete', (err, decoded) => {
            if (err) {
                res.send({
                    auth: false,
                    message: 'you failed to authenticate',
                });
            } else {
                req.sampleCollector = decoded.sampleCollector;
                next();
            }
        });
    }
};
router.get("/",(req,res)=>{
 res.send("HomePage of Helathway");
});
router.post("/add", async(req, res) => { 
    let scollector = new sampleCollector();
    scollector.name = req.body.name;
    scollector.email = req.body.email;
    const salt = await bcrypt.genSalt(10);
    scollector.password = await bcrypt.hash(req.body.password, salt);
    scollector.age = req.body.age;
    scollector.phone = req.body.phone;
    scollector.gender = req.body.gender;
    scollector.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
    

});
router.post('/login', async (req, res) => {
    let scollector = await sampleCollector.findOne({ email: req.body.email });
    if (!scollector)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });
    const validPassword = await bcrypt.compare(
        req.body.password,
        scollector.password
    );
    if (validPassword) {
        const token = jwt.sign({ scollector }, 'jwtSecrete', {
            expiresIn: 300,
        });
        res.send({ auth: true, token: token, result: scollector });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }
});
router.put('/:id/edit', async (req, res) => {
    const scollector = await sampleCollector.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            age: req.body.age,
            email: req.body.email,
            gender: req.body.password,
        },
        { new: true }
    );
    if (!scollector)
        return res
            .status(404)
            .send('The samplecollector with the given ID was not found.');

    res.send(scollector);
});

module.exports = router;
