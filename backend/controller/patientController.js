//const jwt = require('jsonwebtoken');
//const config = require('config');
//const bcrypt = require('bcrypt');
//const _ = require('lodash');
const Patient = require('../model/patient');
//const {Patient, validate} = require('../model/patient');
//const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('HomePage of Helathway');
});
router.post('/add', (req, res) => {
    let patient = new Patient();
    patient.name = req.body.name;
    patient.email = req.body.email;
    patient.password = req.body.password;
    patient.age = req.body.age;
    patient.address = req.body.address;
    patient.phone = req.body.phone;
    patient.gender = req.body.gender;
    patient.bloodGroup = req.body.bloodGroup;
    // patient.historyId=null;
    patient.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.post('/login', async (req, res) => {
    //validate will be different
    //  const { error } = validatePatient(req.body);
    //  if (error) return res.status(400).send(error.details[0].message);
    let patient = await Patient.findOne({ email: req.body.email });
    if (!patient) return res.status(400).send('Invalid Email');
    console.log(`Password ${patient.password}`);
    console.log(`Password ${req.body.password}`);
    if (req.body.password == patient.password) {
        res.send(patient);
    } else {
        return res.status(400).send('Invalid password.');
    }
});

//eta add korsi patient er edit er jonne
router.put('/:id/edit', async (req, res) => {
    const patient = await Patient.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            address: req.body.address,
            phone: req.body.phone,
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            historyId: req.body.historyId,
        },
        { new: true }
    );
    if (!patient)
        return res
            .status(404)
            .send('The patient with the given ID was not found.');

    res.send(patient);
});

router.get('/:id', async (req, res) => {
    const patient = await Doctor.findById(req.params.id);
    if (!patient)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(patient);
});
//egula amader na
router.get('/patients/:id/admit', function (req, res) {
    const id = { id: req.params.id };
    const update = {
        admitted: true,
        dateAdmitted: Date.now(),
    };
    Patient.findOneAndUpdate(id, update, function (err, patient) {
        if (err) return res.json({ success: false, error: err });
        return res.json(patient);
    });
});
//egula amader na
router.get('/patients/:id/discharge', function (req, res) {
    const id = { id: req.params.id };
    const update = {
        admitted: false,
        dateDischarged: Date.now(),
        //nurseId: null,
        //roomId: null
    };
    Patient.findOneAndUpdate(id, update, function (err, patient) {
        if (err) return res.json({ success: false, error: err });
        return res.json(patient);
    });
});
//eta validation er jonne add korsilam
function validatePatient(patient) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        age: Joi.number().required(),
        address: Joi.string().required(),
        phone: Joi.number().required(),
        gender: Joi.string().required(),
        bloodGroup: Joi.string().required(),
    };

    return Joi.validate(patient, schema);
}

module.exports = router;
