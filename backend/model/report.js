const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    patientName: { type: String },
    testList: [String],
    fileStorage: { type: String },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
