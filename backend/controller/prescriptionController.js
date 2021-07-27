const Prescription = require('../model/prescription');
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

router.post('/addPrescription', upload, async (req, res) => {
    console.log('addPrescription');
    let prescription = new Prescription();
    //console.log(req);
    if (req.file) {
        console.log('Dukse :  ' + req.file.path);
        prescription.fileStorage = req.file.path;
        //report.patientName = 'Adiba';
        prescription.save((err) => {
            if (err) {
                console.log('error ' + err);
                return res.json({ success: false, error: err });
            }
            return res.json(prescription);
        });
    }
});
//id ta hocche prescription er
router.post('/:id/setThepatientId', async (req, res) => {
    console.log('setThepatientId');
    const prescription = await Prescription.findByIdAndUpdate(
        req.params.id,
        {
            patientId: req.body.patientId,
            patientName: req.body.patientName,
            doctorName: req.body.doctorName,
        },
        { new: true }
    );
    console.log("patient id pres.......");
    console.log(req.body.patientId);
    let patient = await Patient.findByIdAndUpdate(
        req.body.patientId,
        {
            $push: { prescription: req.params.id },
        },
        { new: true }
    );
    if (!prescription)
        return res
            .status(404)
            .send('The report with the given ID was not found.');

    res.send('done');
});
router.get("/getPres/:id",async(req,res)=>{
    const pres= await Prescription.findById(req.params.id);
    res.json(pres);

})
module.exports = router;
