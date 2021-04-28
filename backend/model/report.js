const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  patientId: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone : {type: Number , required: true},
  date: { type: Date, required: true },
  details : {type : [String], required : true}   //String rakhbo?
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;