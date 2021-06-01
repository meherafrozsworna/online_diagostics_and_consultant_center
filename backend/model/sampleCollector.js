const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const samplecollectorSchema = new Schema({
    name: { type: String, required: true },
    password : {type: String , required: true},
    phone : { type: [Number], required: true },
    age: { type: [Number], required: true },
    email: { type: String, required: true },
    gender:{ type: String, required: true },

});
const SampleCollector = mongoose.model('SampleCollector', samplecollectorSchema);
module.exports = SampleCollector;
