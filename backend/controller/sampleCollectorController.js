//const sampleCollector = require('../model/sampleCollector');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const SampleCollector = require('../model/sampleCollector');
const TestForm = require('../model/testform');
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
                req.sampleCollector = decoded.scollector;

                next();
            }
        });
    }
};
router.get('/isUserAuth', verifyJWT, async (req, res) => {
    res.send('you are authenticated');
});
router.get('/', (req, res) => {
    res.send('HomePage of Helathway');
});
router.post('/add', async (req, res) => {
    let scollector = new SampleCollector();
    scollector.name = req.body.name;
    scollector.email = req.body.email;
    const salt = await bcrypt.genSalt(10);
    scollector.password = await bcrypt.hash(req.body.password, salt);
    scollector.age = req.body.age;
    scollector.phone = req.body.phone;
    scollector.gender = req.body.gender;
    scollector.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: scollector });
    });
});
router.post('/login', async (req, res) => {
    let scollector = await SampleCollector.findOne({ email: req.body.email });
    if (!scollector)
        return res.status(400).send({ auth: false, message: 'Invalid Email' });
    const validPassword = await bcrypt.compare(
        req.body.password,
        scollector.password
    );
    if (validPassword) {
        const token = jwt.sign({ scollector }, 'jwtSecrete', {
            expiresIn: 30000000,
        });
        console.log();
        res.send({ auth: true, token: token, result: scollector });
    } else {
        return res.status(400).send({
            auth: false,
            message: 'wrong username/password combination',
        });
    }
});
router.put('/:id/edit', async (req, res) => {
    const scollector = await SampleCollector.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            password: req.body.password,
            phone: req.body.phone,
            age: req.body.age,
            email: req.body.email,
            gender: req.body.password,
        },
        { new: true }
    );
    if (!scollector)
        return res
            .status(404)
            .send('The samplecollector with the given ID was not found.');

    res.send(scollector);
});
router.get('/screen', verifyJWT, async (req, res) => {
    console.log('Ashche');
    console.log(req.sampleCollector);
    res.send(req.sampleCollector);
    if (!req.sampleCollector)
        return res
            .status(404)
            .send('The sampleCollector with the given ID was not found.');

    console.log('In server home');
    //console.log(req.patient);
    res.send(req.sampleCollector);
});
/*
router.get('/:id', async (req, res) => {
    try {
        console.log('IIIIIIIIIIIIIIIDDDDDDDDDDDDDDDDD : ');
        console.log(req.params.id);
        const sc = await SampleCollector.findById(req.params.id);
        if (!sc)
            return res
                .status(404)
                .send('The sampleCollector with the given ID was not found.');

        res.send(sc);
    } catch (err) {
        console.log(err);
    }
});
*/
router.get('/getAllsampleCollector', async (req, res) => {
    let sc = await SampleCollector.find({});
    res.send(sc);
});
//testlistgula ekjon samplecollector er jonne pawa jabe
router.get('/alltheList', verifyJWT, async (req, res) => {
    const testList = req.sampleCollector.testList;
    let test_temp=[];
    for (let i = 0; i < testList.length; i++){
      const test=await TestForm.findById(testList[i]);
      test_temp.push(test);
    }
    console.log(test_temp);
    res.json(test_temp);
});
//jokhon done payment button e press korbe tokhon test ta delete hobe list theke
router.post('/deleteTest', verifyJWT, async (req, res) => {
    const sc = await SampleCollector.findByIdAndUpdate(
        req.sampleCollector._id,
        {
            $pull: { testList: req.body._id },
        },
        { new: true }
    );
    res.send('done');
});

router.post('/addTest', async (req, res) => {
    const sc = await SampleCollector.findByIdAndUpdate(
        req.body.id,
        {
            $push: { testList: req.body._id },
        },
        { new: true }
    );
    res.send(sc);
});

router.get('/testform/:id', (req, res) => {
    TestForm.findById(req.params.id)
        .then((tf) => res.json(tf))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// router.route('/allSampleCollectors').get((req, res) => {
//     SampleCollector.find()
//         .then((sc) => res.json(sc))
//         .catch((err) => res.status(400).json('Error: ' + err));
// });

module.exports = router;
