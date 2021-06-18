const Doctor = require('../model/doctor');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJWT = async(req, res, next) => {
    console.log(req.headers);
    const token = req.headers['x-access-token'];

    if (!token) {
        res.send('We need a token');
    } else {
        jwt.verify(token, 'jwtSecrete', (err, decoded) => {
            if (err) {
                console.log('Error : ');
                console.log(err);
                res.send({
                    auth: false,
                    message: 'you failed to authenticate',
                });
            } else {
                req.doctor = decoded.doctor;
                next();
            }
        });
    }
};

router.post('/add', async (req, res) => {
    let doctor = new Doctor();
    doctor.name = req.body.name.toLocaleLowerCase();
    const salt = await bcrypt.genSalt(10);
    doctor.password = await bcrypt.hash(req.body.password, salt);
    doctor.gender = req.body.gender;
    doctor.phone = req.body.phone;
    doctor.email = req.body.email;
    doctor.degree = req.body.degree;
    doctor.specialization = req.body.specialization;
    doctor.currentInstitution = req.body.currentInstitution ;
    doctor.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
router.post('/login', async (req, res) => {
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });
    const validPassword = await bcrypt.compare(
        req.body.password,
        doctor.password
    );
    if (validPassword) {
        const token = jwt.sign({ doctor }, 'jwtSecrete', {
            expiresIn: 300000,
        });
        res.send({ auth: true, token: token, result: doctor });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }
});


router.put('/edit',verifyJWT, async (req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(
        req.doctor._id,
        {
            name: req.body.name,
            password: req.body.password,
            gender: req.body.gender,
            degree: req.body.gender,
            currentInstitution: req.body.currentInstitution,
            specialization: req.body.specialization,
            schedule: req.body.schedule,
            appointmentList: req.body.appointmentList,
            phone: req.body.phone,
            email: req.body.email,
        },
        { new: true }
    );
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
    
});

router.post('/:id',verifyJWT, async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});

router.get('/:name', async (req, res) => {
    const doctor = await Doctor.find({
        name: req.params.name,
    });
    console.log(doctor.name)
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});

router.get('/specialization/:at', async (req, res) => {
    const doctor = await Doctor.find({
        specialization: req.params.at.toLocaleLowerCase(),
    });
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});
router.put('/addAppointment',verifyJWT, async (req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(
        req.doctor._id,
        {
            $push: { appointmentList: req.body.appointment },
        },
        { new: true }
    );
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});

module.exports = router;
