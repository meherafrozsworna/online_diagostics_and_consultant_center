const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
 
  name: { type: String},
  age: { type: Number },
  phone : {type: Number},
  date: { type: String},
  testName:{type : [String]},
  details : {type : [String]}   //String rakhbo?
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;