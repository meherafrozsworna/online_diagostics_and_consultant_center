const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name: { type: String, required: true },
    password : {type: String , required: true},
    phone : { type: [Number], required: true },
    email: { type: email, required: true },
    doctorList : mongoose.Schema.Types.ObjectId,
    sampleCollectorList :mongoose.Schema.Types.ObjectId,
    appointmentList : [string],
    testList :[string],
});

const Admin = mongoose.model('Admin', doctorSchema);

module.exports = Doctor;
