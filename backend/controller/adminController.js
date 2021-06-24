const bcrypt = require('bcrypt');
const Admin = require('../model/admin');
const Patient=require('../model/patient');
const Report = require("../model/report");
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const SampleCollector = require('../model/sampleCollector');
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
                req.admin = decoded.admin;
                next();
            }
        });
    }
};

router.get('/sampleCollectorList', verifyJWT, (req, res) => {
    res.json(req.admin.sampleCollectorList);
});

router.get('/testFormList', verifyJWT, (req, res) => {
    res.json(req.admin.testList);
});

router.get('/doctorList', verifyJWT, (req, res) => {
    res.json(req.admin.doctorList);
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

router.post("/addReport", async(req, res) =>{
    report = new Report({
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        date:req.body.date,
        testName:req.body.testName,
        details:req.body.details
        });
        report.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });

});
router.post('/:name/addtheReportToPatientProfile',async(req, res) =>{
    let patient = await Patient.find({
        name: req.params.name,
    });
    console.log(patient);
    let rep=[...patient[0].report,req.body.id];
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
module.exports = router;
