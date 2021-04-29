const History = require("../model/history");
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
 res.send("HomePage of Helathway");
});
router.post("/addHistory", async(req, res) => {   
     history = new History({
        patientId:req.body.patientId,
        bloodGroup:req.body.bloodGroup,
        gender : req.body.gender,
        weight  :req.body.weight,
        height :req.body.height,
        pastDiseases: req.body.pastDiseases,
        currentDiseases:req.body.currentDiseases,
        drugHistory:req.body.drugHistory,
        familyHistory:req.body.familyHistory,
        tests:req.body.tests,
        dateofUpdate:req.body.dateofUpdate,
        doctorID:req.body.doctorID


        });
        history.save(err => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });



});
router.put("/:id/edit", async(req, res) => {   
    const history = await History.findByIdAndUpdate(req.params.id,
        {
            patientId:req.body.patientId,
            bloodGroup:req.body.bloodGroup,
            gender : req.body.gender,
            weight  :req.body.gender,
            height :req.body.height,
            pastDiseases: req.body.pastDiseases,
            currentDiseases:req.body.currentDiseases,
            drugHistory:req.body.drugHistory,
            familyHistory:req.body.familyHistory,
            tests:req.body.tests,
            dateofUpdate:req.body.dateofUpdate,
            doctorID:req.body.doctorID
        }, { new: true });
        if (!history) return res.status(404).send('The history with the given ID was not found.');
  
        res.send(history);

});
module.exports = router;