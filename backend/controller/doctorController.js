const router = require('express').Router();
const Doctor = require('../model/doctor');

/*
const doctorSchema = new Schema({
    name: { type: String, required: true },
    password : {type: String , required: true},
    gender: { type: String, required: true },
    degree: { type: String, required: true },
    currentInstitution: { type: String, required: false },
    specialization: { type: String, required: false },
    schedule: [
        {
            Start: Date,
            End: Date,
            limitation : Number, 
        }] ,
    appointmentList : [{
        patientId : ObjectId,
        date : Date,
    }],
    phone : { type: [Number], required: true },
    email: { type: email, required: true },
});
*/

router.route('/add').post((req, res) => {
    let doctor = new Doctor();
    doctor.name = req.body.name;
    doctor.password = req.body.password;
    doctor.gender = req.body.gender;
    doctor.degree = req.body.degree;
    doctor.phone = req.body.phone;
    doctor.email = req.body.email;

    doctor
        .save()
        .then(() => res.json('doctor added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

