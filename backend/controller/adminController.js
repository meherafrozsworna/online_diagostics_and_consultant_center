const bcrypt = require('bcrypt');
const Admin = require('../model/admin');
const Patient = require('../model/patient');
const Report = require('../model/report');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const SampleCollector = require('../model/sampleCollector');
const Testform = require('../model/testform');
const Appointment = require('../model/appointment');
const Doctor = require('../model/doctor');
const router = express.Router();
const verifyJWT = async (req, res, next) => {
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
                req.admin = decoded.admin;
                next();
            }
        });
    }
};
//list show er jonne
router.get('/appointmentList', verifyJWT, async (req, res) => {
    const testList = req.admin.appointmentList;
    console.log(testList);
    let test_temp = [];
    for (let i = 0; i < testList.length; i++) {
        const test = await Appointment.findById(testList[i]);
        test_temp.push(test);
    }

    res.json(test_temp);
});
router.post('/getAppointment', async (req, res) => {
    const appointment = await Appointment.findById(req.body._id);
    res.send(appointment);
});
router.get('/sampleCollectorList', verifyJWT, async (req, res) => {
    const testList = req.admin.sampleCollectorList;
    let test_temp = [];
    for (let i = 0; i < testList.length; i++) {
        const test = await Testform.findById(testList[i]);
        test_temp.push(test);
    }

    res.json(test_temp);
});

router.get('/testFormList', verifyJWT, async (req, res) => {
    console.log(req.admin);
    const testList = req.admin.testList;
    let test_temp = [];
    for (let i = 0; i < testList.length; i++) {
        const test = await Testform.findById(testList[i]);
        test_temp.push(test);
    }

    res.json(test_temp);
});

router.get('/doctorList', verifyJWT, async (req, res) => {
    const doctorList = req.admin.doctorList;
    let test_temp = [];
    for (let i = 0; i < doctorList.length; i++) {
        const test = await Report.findById(doctorList[i]);
        test_temp.push(test);
    }
    console.log(test_temp);
    res.json(test_temp);
});

router.get('/reportList', verifyJWT, async (req, res) => {
    const reportList = req.admin.reportList;
    console.log(reportList);
    let test_temp = [];
    for (let i = 0; i < reportList.length; i++) {
        const test = await Testform.findById(reportList[i]);
        test_temp.push(test);
    }
    console.log(test_temp);
    res.json(test_temp);
});

router.post('/test_by_Id', verifyJWT, async (req, res) => {
    const test = await Testform.findById(req.body.formid);
    res.json(test);
});
router.post('/add', (req, res) => {
    let admin = new Admin();
    admin.email = 'healthway123@gmail.com';
    admin.password = 'admin123';
    admin.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
router.post('/login', async (req, res) => {
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });

    let validPassword;
    if (req.body.password == admin.password) {
        validPassword = true;
    } else {
        return res.status(400).send('Invalid password.');
    }
    if (validPassword) {
        const token = jwt.sign({ admin }, 'jwtSecrete', {
            expiresIn: 3000000,
        });
        res.send({ auth: true, token: token, result: admin });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }
});
router.post('/addSampleCollector', async (req, res) => {
    let admins = await Admin.find({});
    console.log(admins.length);
    console.log(req.body._id);
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $push: { sampleCollectorList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
router.post('/deleteSampleCollector', async (req, res) => {
    let admins = await Admin.find({});
    console.log(admins.length);
    console.log(req.body._id);
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $pull: { sampleCollectorList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});

router.post('/addDoctor', async (req, res) => {
    let admins = await Admin.find({});
    console.log(admins.length);
    console.log(req.body._id);
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $push: { doctorList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
router.post('/addPendingTest', async (req, res) => {
    let admins = await Admin.find({});
    console.log(admins.length);
    console.log(req.body._id);
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $push: { testList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
router.post('/deletePendingTest', async (req, res) => {
    let admins = await Admin.find({});
    console.log(admins.length);
    console.log(req.body._id);
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $pull: { testList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});

//asad jokhon ekta payment complete dibe ekhane eshe add hobe report generation er jonne
router.post('/addReportList', async (req, res) => {
    let admins = await Admin.find({});
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $push: { reportList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
//report submit hoye gele delete hobe
router.post('/deleteReportList', async (req, res) => {
    let admins = await Admin.find({});
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $pull: { reportList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
//ekta book appointment e call korle etao call hobe
router.post('/addAppoinmentList', async (req, res) => {
    console.log('XXXXXXXXXXXX');
    console.log(req.body._id);
    let admins = await Admin.find({});
    for (let i = 0; i < admins.length; i++) {
        const admin_temp = await Admin.findByIdAndUpdate(
            admins[i]._id,
            {
                $push: { appointmentList: req.body._id },
            },
            { new: true }
        );
    }
    res.send('Done');
});
router.post('/addReport', async (req, res) => {
    report = new Report({
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone,
        date: req.body.date,
        testName: req.body.testName,
        details: req.body.details,
    });
    report.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
router.post('/:email/addtheReportToPatientProfile', async (req, res) => {
    let patient = await Patient.find({
        email: req.params.email,
    });
    console.log(patient);
    let rep = [...patient[0].report, req.body.id];
    console.log(rep);

    patient = await Patient.findByIdAndUpdate(
        patient[0]._id,
        {
            report: rep,
        },
        { new: true }
    );
    res.send(patient);
});
//doctor er id req body te ashbe sheta diye oi patient er appointment ta khuje ber kore oita te zoom link dibo doctor tar
router.post('/sendZoomlink', async (req, res) => {
    let appointment = await Appointment.findById(req.body._id);
    let doctor = await Doctor.findById(appointment.doctorId);
    console.log(doctor.name);
    let apdetails={
        doctorId: appointment.doctorId[0],
        doctorName: doctor.name,
        link: doctor.zoomlink,
        date: appointment.date,
    }
    const patient = await Patient.findByIdAndUpdate(
        appointment.patientId[0],
        {
            $push: { appointmentDetails: apdetails },
            
        },
        { new: true }
    );
    if (!patient)
        return res
            .status(404)
            .send('The patient with the given ID was not found.');
    res.send('done');
});
module.exports = router;
