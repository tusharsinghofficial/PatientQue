const mongoose = require('mongoose');

const DoctorsRecordSchema = new mongoose.Schema({
    PatientID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('doctors_record', DoctorsRecordSchema);