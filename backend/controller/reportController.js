const Report = require("../model/report");
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var multer = require('multer');
router.get("/",(req,res)=>{
 res.send("HomePage of Helathway");
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file');
router.post("/addReport",upload,async(req, res) =>{
    report = new Report({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        phone:req.body.phone, 
        date:req.body.date,
        testName:req.body.testName,
        details:req.body.details
        });
        if(req.file){
            report.fileStorage=req.file.path;
        }
        report.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });

});
router.get('/:id/filelocation',async(req, res) =>{
    let report = await Report.find({
        id: req.params.id,
    });
    res.json(report);

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