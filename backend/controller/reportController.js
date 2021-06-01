const Report = require("../model/report");
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
 res.send("HomePage of Helathway");
});
router.post("/addReport", async(req, res) =>{
    report = new Report({
        patientId:req.body.patientId,
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        date:req.body.date,
        testId:req.body.testId,
        testName:req.body.testName,
        details:req.body.details
        });
        report.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });

});
router.put("/:id/edit", async(req, res) =>{
    const report = await History.findByIdAndUpdate(req.params.id,{
        patientId:req.body.patientId,
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone,
        date:req.body.date,
        testId:req.body.testId,
        testName:req.body.testName,
        details:req.body.details
    }, { new: true });
    if (!report) return res.status(404).send('The history with the given ID was not found.');

    res.send(report);

});
module.exports = router;