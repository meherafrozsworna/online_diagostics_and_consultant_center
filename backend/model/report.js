const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    /*
  name: { type: String},
  email:{type:String},
  age: { type: Number },
  phone : {type: Number},
  date: { type: String},
  testName:{type : [String]},
  details : {type : [String]} ,  
  */
    fileStorage: { type: String },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
