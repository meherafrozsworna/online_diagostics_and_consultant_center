const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ObjectId = mongoose.Types.ObjectId;

const patientSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    historyId: mongoose.Schema.Types.ObjectId,
    bloodGroup: { type: String, required: true },
    appointmentDetails: [
        {
            doctorId: { type: mongoose.Schema.Types.ObjectId },
            doctorName: { type: String },
            link: { type: String },
            date: { type: String },
        },
    ],
    report: [mongoose.Schema.Types.ObjectId],
    prescription: [mongoose.Schema.Types.ObjectId],
});
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
