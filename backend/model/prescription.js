const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const prescriptionSchema = new Schema({
    appointmentId: { type: ObjectId, required: true },
    doctorId: { type: ObjectId, required: true },
    patientId : { type: ObjectId, required: true },
    doctorName: { type: String, required: true },
    patientName: { type: String, required: true },
    patientAge: { type: String, required: true },
    patientGender: { type: String, required: true },
    date : {type: String, required: true },
    testList: [String] ,
    medicineList : [{
        name : String,
        schedule :String,
        amount : String,
        duration : String,
    }],
    suggestionList : [String],
    comments : [String],
    
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
