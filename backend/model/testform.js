const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testformSchema = new Schema({
  patientName: { type: String, required: true },
  patientId: { type: ObjectId, required: true },
  phoneNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  testName: { type: [String], required: true },
  address : { type: String, required: true },
  date: { type: Date, required: true },
  payment : {
    amount : Double,
    type :String,
    status : Boolean,
},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;