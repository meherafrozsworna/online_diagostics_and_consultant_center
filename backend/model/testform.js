const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testformSchema = new Schema({
  patientName: { type: String, required: true },
  patientId: mongoose.Schema.Types.ObjectId,
  phoneNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  gender:{ type: String, required: true },
  location:{type: String, required: true},
  address:{type: String, required: true},
  pref_gender:{type: String, required: true},
  pref_time:{type: String, required: true},
  testName: { type: [String], required: true },
  ref_doctor:{type: String, required: true},
  instructions:{type: String, required: true},
  date: { type: Date, required: true },
  payment : {
    amount : Number,
    way :String,
},
});

const Testform = mongoose.model('Testform', testformSchema);

module.exports = Testform;