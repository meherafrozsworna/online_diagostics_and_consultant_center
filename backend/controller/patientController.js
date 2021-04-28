const express = require("express");
//const mongoose = require('mongoose');
const Patient = require("../model/patient");
const router = express.Router();

//var ObjectId = mongoose.Types.ObjectId;

router.post("/add", (req, res) => { 

    let patient = new Patient();
    patient.name = req.body.name;
    patient.email = req.body.email;
    patient.password = req.body.password;
    patient.age=req.body.age;
    patient.address = req.body.address;
    patient.phone = req.body.phone;
    patient.gender = req.body.gender;
    patient.bloodGroup = req.body.bloodGroup;
    patient.historyId= null ;
    patient.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

});



router.get("/patients/:id/admit", function (req, res) {
    const id = { id: req.params.id };
    const update = {
        admitted: true,
        dateAdmitted: Date.now()
    };
    Patient.findOneAndUpdate(id, update, function (err, patient) {
        if (err) return res.json({ success: false, error: err });
        return res.json(patient);
    });
});

router.get("/patients/:id/discharge", function (req, res) {
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


module.exports = router;