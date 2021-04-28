const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientId: { type: ObjectId, required: true },
  doctorId: { type: ObjectId, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  payment : {
    amount : Double,
    type :String,
    status : Boolean,
},
  
});

const Appointment = mongoose.model('Appointment', exerciseSchema);

module.exports = Appointment;