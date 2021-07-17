const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const prescriptionSchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    patientName: { type: String },
    suggestionList: [String],
    mediciniList:[String],
    fileStorage: { type: String },
    
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
