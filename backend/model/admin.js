const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({

    password : {type: String},
    email: { type: String},
    doctorList :[mongoose.Schema.Types.ObjectId],
    sampleCollectorList :[mongoose.Schema.Types.ObjectId],
    appointmentList : [mongoose.Schema.Types.ObjectId],
    testList :[mongoose.Schema.Types.ObjectId],
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
