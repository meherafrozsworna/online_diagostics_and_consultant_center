const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ObjectId = mongoose.Types.ObjectId;

const doctorSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    degree: { type: String, required: true },
    currentInstitution: { type: String, required: false },
    specialization: { type: String, required: false },
    /*schedule: [
        {
            date:String,
            limitation: Number,
        },
    ],
    */
    schedule:[String],
    appointmentList: [
        {
            patientId: String,
            date: String,
        },
    ],
    phone: { type: [Number], required: true },
    email: { type: String, required: true },
    zoomlink : {String} 
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
