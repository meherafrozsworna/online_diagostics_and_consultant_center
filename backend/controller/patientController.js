const bcrypt = require('bcrypt');
const Doctor = require('../model/doctor');
const Patient = require('../model/patient');
const TestForm = require('../model/testform');
const Report = require('../model/report');
const Appointment = require('../model/appointment');
//const {Patient, validate} = require('../model/patient');
//const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const verifyJWT = async (req, res, next) => {
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
                req.patient = decoded.patient;
                next();
            }
        });
    }
};
router.get('/isUserAuth', verifyJWT, async (req, res) => {
    res.send('you are authenticated');
});
router.get('/getAppointmentDetails', verifyJWT, async (req, res) => {
    const patient=await Patient.findById(req.patient._id);
    
    res.send(patient.appointmentDetails);
});

router.get('/home', verifyJWT, (req, res) => {
    //const patient = await Patient.findById(req.params.id);

    if (!req.patient)
        return res
            .status(404)
            .send('The patient with the given ID was not found.');

    console.log('In server home');
    console.log(req.patient);
    res.send(req.patient);
});

router.get('/', (req, res) => {
    console.log('ashche');
    res.send('HomePage of Helathway');
});

router.get('/testform/:id', async (req, res) => {
    const testForm = await TestForm.findById(req.params.id);
    if (!testForm)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(testForm);
});

router.post('/add', async (req, res) => {
    // console.log("working 1")
    let patient = new Patient();
    patient.name = req.body.name;
    patient.email = req.body.email;
    const salt = await bcrypt.genSalt(10);
    patient.password = await bcrypt.hash(req.body.password, salt);
    console.log('working 2');
    patient.age = req.body.age;
    patient.address = req.body.address;
    patient.phone = req.body.phone;
    patient.gender = req.body.gender;
    patient.bloodGroup = req.body.bloodGroup;
    patient.appointmentDetails=[];
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
    if (!patient)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });

    const validPassword = await bcrypt.compare(
        req.body.password,
        patient.password
    );
    if (validPassword) {
        const token = jwt.sign({ patient }, 'jwtSecrete', {
            expiresIn: 300000,
        });
        res.send({ auth: true, token: token, result: patient });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }
});
//eta add korsi patient er edit er jonne
router.put('/edit', verifyJWT, async (req, res) => {
    const patient = await Patient.findByIdAndUpdate(
        req.patient._id,
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

router.post('/testform/submit', verifyJWT, async (req, res) => {
    let testform = new TestForm();
    testform.patientName = req.body.patientName;
    testform.patientId = req.patient._id;
    testform.phoneNumber = req.body.number;
    testform.age = req.body.age;
    testform.gender = req.body.gender;
    testform.location = req.body.location;
    testform.address = req.body.address;
    testform.pref_gender = req.body.prefGender;
    testform.pref_time = req.body.prefTime;
    testform.testName = req.body.checkedTestNames;
    testform.ref_doctor = req.body.refDoctor;
    testform.instructions = req.body.instructions;
    testform.date = req.body.date;
    testform.payment = req.body.payment;

    testform.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json(testform);
    });
});
router.get('/reportList', verifyJWT, async (req, res) => {
    console.log('\n\nBBBBBBBBBBBBB\n\n');
    console.log(req.patient.report);

    const reportList = req.patient.report;

    let test_temp = [];
    for (let i = 0; i < reportList.length; i++) {
        const test = await Report.findById(reportList[i]);
        test_temp.push(test);
    }
    console.log(test_temp);
    res.json(test_temp);
});
//egula amader na
router.get('/:name', async (req, res) => {
    console.log(req.params.name);
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
    const doctor = await Doctor.find({
        specialization: req.params.at,
    });
    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');

    res.send(doctor);
});
router.get('/:id/showReport', async (req, res) => {
    const report = await Report.findById(req.params.id);
    res.send(report);
});
//new Added
router.post('/getpatient', async (req, res) => {
    const patient = await Patient.findById(req.body._id);
    if (!doctor)
        return res
            .status(404)
            .send('The patient with the given ID was not found.');

    res.send(patient);
});
router.get('/viewAppointmentDetails',verifyJWT,async (req, res) => {
    console.log("dhukseee");
    console.log(req);
    res.send(req.patient.appointmentDetails);


});
router.post('/addAppointment/:id', verifyJWT, async (req, res) => {
    const doctor1 = await Doctor.findById(req.params.id);
    console.log(doctor1._id);

    let appointment = {
        patientId: req.patient._id,
        patientName: req.patient.name,
        date: req.body.date,
    };
    const doctor = await Doctor.findByIdAndUpdate(
        doctor1._id,
        {
            $push: { appointmentList: appointment },
        },
        { new: true }
    );

    if (!doctor)
        return res
            .status(404)
            .send('The doctor with the given ID was not found.');
    let appointment1 = new Appointment();
    appointment1.patientId = req.patient._id;
    appointment1.doctorId = doctor1._id;
    (appointment1.doctorName = doctor1.name),
        (appointment1.patientName = req.patient.name),
        (appointment1.date = req.body.date);
    appointment1.payment = '1000';

    appointment1.save((err) => {
        if (err) return res.json({ success: false, error: err });
    });
    res.send(appointment1);
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
