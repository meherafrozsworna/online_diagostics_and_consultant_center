const bcrypt = require('bcrypt');
const Admin= require('../model/admin');
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
router.post('/add', async (req, res) => {
    let admin = new Admin();
    admin.email="healthway123@gmail.com";
    admin.password="admin123";
    admin.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
router.post('/login', async (req, res) =>{
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });

 if (req.body.password == admin.password) {
    const validPassword=true;
} else {
    return res.status(400).send('Invalid password.');
}
    if (validPassword) {
        const token = jwt.sign({ admin }, 'jwtSecrete', {
            expiresIn: 300,
        });
        res.send({ auth: true, token: token, result: admin });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }

});
router.post('/addSampleCollector',async(req, res) => {
    const admin_temp = await Admin.findByIdAndUpdate(
        req.admin._id,
        {
            sampleCollectorList:req.body.scId,
            
        },
        { new: true }
    );
  //  req.admin.sampleCollectorList=req.body.scId;
    res.send(admin);
});
router.post('/deleteSampleCollector',verifyJWT,(req, res) => {

    const admin_temp =  Admin.findByIdAndUpdate(
        req.admin._id, 
        
            { $pull: { sampleCollectorList: req.body.scId } },
                   
            { new: true }
    );
    console.log(admin.sampleCollectorList),
    res.send("Done");
        });
  


router.post('/addDoctor',verifyJWT,(req, res) => {
    const admin_temp = Admin.findByIdAndUpdate(
        req.admin._id,
        {
            doctorList:req.body.doctorId,
            
        },
        { new: true }
    );
  //  req.admin.sampleCollectorList=req.body.scId;
    res.send(admin);
});
router.post('/addPendingTest',verifyJWT,(req, res) => {
    const admin_temp =  Admin.findByIdAndUpdate(
        req.admin._id,
        {
            testList:req.body.testId,
            
        },
        { new: true }
    );
  //  req.admin.sampleCollectorList=req.body.scId;
    res.send(admin);
});
router.post('/deletePendingTest',verifyJWT,(req, res) => {
    const admin_temp =  Admin.findByIdAndUpdate(
        req.admin._id,
        { $pull: { testList: req.body.testId } },
                   
            { new: true }
       
    );
  //  req.admin.sampleCollectorList=req.body.scId;
    res.send(admin);
});

module.exports = router;