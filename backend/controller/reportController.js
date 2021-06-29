const Report = require('../model/report');
const Patient = require('../model/patient');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var multer = require('multer');
router.get('/', (req, res) => {
    res.send('HomePage of Helathway');
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
var upload = multer({ storage: storage }).single('file');

router.post('/addReport', upload, async (req, res) => {
    console.log('AAAAAAAAAAAAAAAAAA');
    //console.log(req.body.patientId);

    let report = new Report();
    if (req.file) {
        console.log('Dukse :  ' + req.file.path);
        report.fileStorage = req.file.path;
        //report.patientName = 'Adiba';
        report.save((err) => {
            if (err) {
                console.log('error ' + err);
                return res.json({ success: false, error: err });
            }
            return res.json(report);
        });
    }
});

/*
router.post('/addReport', upload, async (req, res) => {
    console.log('AAAAAAAAAAAAAAAAAA');
    //
    //console.log(req.body.patientId);

    report = new Report({
        patientId: req.body.patientId,
    });
    if (req.file) {
        console.log('Dukse :  ' + req.file.path);
        report.fileStorage = req.file.path;
    }
    report.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json(report);
    });
});
*/
router.post('/:id/setThepatientId', async (req, res) => {
    console.log('setThepatientId');
    console.log(req.param.id);
    console.log(req.body.patientName);
    console.log(req.body.testList);
    const report = await Report.findByIdAndUpdate(
        req.params.id,
        {
            patientId: req.body.patientId,
            patientName: req.body.patientName,
            testList: req.body.testList,
        },
        { new: true }
    );
    let patient = await Patient.findByIdAndUpdate(
        req.body.patientId,
        {
            $push: { report: req.params.id },
        },
        { new: true }
    );
    if (!report)
        return res
            .status(404)
            .send('The report with the given ID was not found.');

    res.send('done');
});
router.get('/:id', async (req, res) => {
    let report = await Report.find({
        _id: req.params.id,
    });
    console.log(report);
    res.json(report);
});

router.put('/:id/edit', async (req, res) => {
    const report = await History.findByIdAndUpdate(
        req.params.id,
        {
            patientId: req.body.patientId,
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            date: req.body.date,
            testId: req.body.testId,
            testName: req.body.testName,
            details: req.body.details,
        },
        { new: true }
    );
    if (!report)
        return res
            .status(404)
            .send('The history with the given ID was not found.');

    res.send(report);
});

module.exports = router;
