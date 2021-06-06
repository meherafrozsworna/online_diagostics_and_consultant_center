const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ObjectId = mongoose.Types.ObjectId;

const historySchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    bloodGroup: { type: String, required: true },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    pastDiseases: [String],
    currentDiseases: [String],
    drugHistory: [String],
    familyHistory: [String],
    tests: [String],
    dateofUpdate: { type: Date, required: true },
    doctorIDd: [ObjectId],
});
const History = mongoose.model('History', historySchema);
module.exports = History;
