const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientId: [mongoose.Schema.Types.ObjectId],
  doctorId: [mongoose.Schema.Types.ObjectId],
  doctorName : {type: String},
  patientName : {type: String},
  date: { type: String},
  payment : {type : Number}, 
  
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;