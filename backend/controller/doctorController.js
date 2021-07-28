const Doctor = require('../model/doctor');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const Appointment = require('../model/appointment');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/getAlldoctor', async (req, res) => {
    let doctor = await Doctor.find({});
    res.send(doctor);
});

const verifyJWT = async (req, res, next) => {
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
    doctor.currentInstitution = req.body.currentInstitution;
    doctor.appointmentList = [];
    doctor.save((err) => {
        if (err) return res.json({ success: false, error: err });
        console.log('AAAAAAAAAAA');
        console.log(doctor);
        return res.json(doctor);
    });
});
router.post('/login', async (req, res) => {
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });
    console.log(req.body.password);
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

router.put('/edit', verifyJWT, async (req, res) => {
    console.log(req.doctor);
    const salt = await bcrypt.genSalt(10);
    const doctor = await Doctor.findByIdAndUpdate(
        req.doctor._id,
        {
            name: req.body.name,
            //password: await bcrypt.hash(req.body.password, salt),
            gender: req.body.gender,
            degree: req.body.degree,
            currentInstitution: req.body.currentInstitution,
            specialization: req.body.specialization,
            schedule: req.body.schedule,
            //appointmentList: req.body.appointmentList,
            phone: req.body.phone,
            email: req.body.email,
            zoomlink: req.body.zoomlink,
        },
        { new: true }
    );
    if (!doctor) {
        console.log('No doctor');
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');
    }

    console.log('YYYYYYYYYYYYY');
    res.send(doctor);
});

router.get('/home', verifyJWT, (req, res) => {
    if (!req.doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    console.log('In server home');
    console.log(req.doctor);
    res.send(req.doctor);
});

router.post('/getdoctor', async (req, res) => {
    //var mongoose = require('mongoose');
    //var id = mongoose.Types.ObjectId(req.body._id);
    const doctor = await Doctor.findById(req.body._id);
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});
router.get('getName',verifyJWT ,async (req, res) => {
    const name=req.doctor.name;
    res.json(name);
});
router.get('/showAppointmentList', verifyJWT, async (req, res) => {
    /*const testList = req.doctor.appointmentList;
    console.log(req.doctor);
    console.log(testList);
    let test_temp = [];
    for (let i = 0; i < testList.length; i++) {
        const test = await Appointment.findById(testList[i]);
        test_temp.push(test);
    }

    const data = {
        testList: testList,
    };
    */
   const doctor = await Doctor.findById(req.doctor._id);
    const testList = doctor.appointmentList;

    res.json(testList);
});
router.get('/:name', async (req, res) => {
    const doctor = await Doctor.find({
        name: req.params.name,
    });
    console.log(doctor.name);
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});

router.get('/specialization/:at', async (req, res) => {
    console.log(req.params.at);
    console.log('Specialization');
    const doctor = await Doctor.find({
        specialization: req.params.at,
    });
    console.log(doctor);
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});
router.put('/showSchedule', verifyJWT, async (req, res) => {
    const doctor = await Doctor.findById(req.doctor._id);
    res.send(doctor.schedule);
});

router.put('/addAppointment', verifyJWT, async (req, res) => {
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
