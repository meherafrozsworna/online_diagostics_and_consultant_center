const Doctor = require('../model/doctor');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.route('/add').post((req, res) => {
    let doctor = new Doctor();
    doctor.name = req.body.name.toLocaleLowerCase();
    doctor.password = req.body.password;
    doctor.gender = req.body.gender;
    doctor.degree = req.body.degree;
    doctor.phone = req.body.phone;
    doctor.email = req.body.email;
    doctor.degree = req.body.degree;
    doctor.specialization = req.body.specialization;
    doctor.currentInstitution = req.body.currentInstitution ;

    doctor
        .save()
        .then(() => res.json('doctor added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/login', async (req, res) => {
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor) return res.status(400).send('Invalid Email');
    if (req.body.password == doctor.password) {
        res.send(doctor);
    } else {
        return res.status(400).send('Invalid password.');
    }
});

router.put('/:id/edit', async (req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(
        req.params.id,
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

router.post('/:id', async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});

router.get('/:name', async (req, res) => {
    const doctor = await Doctor.find({
        name: req.params.name.toLocaleLowerCase(),
    });
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

///doctor/id:/addAppoint

router.put('/:id/addAppointment', async (req, res) => {
    const doctor = await Doctor.findByIdAndUpdate(
        req.params.id,
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
