const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testformSchema = new Schema({
  patientName: { type: String, required: true },
  patientId: mongoose.Schema.Types.ObjectId,
  phoneNumber: { type: Number},
  age: { type: Number, required: true },
  gender:{ type: String },
  location:{type: String, required: true},
  address:{type: String, required: true},
  pref_gender:{type: String},
  pref_time:{type: String},
  testName: { type: [String]},
  ref_doctor:{type: String},
  instructions:{type: String},
  date: { type: Date},
 /* payment : {
    amount : Number,
    way :String,
},*/
payment:{type:String},
});

const Testform = mongoose.model('Testform', testformSchema);

module.exports = Testform;