const mongoose = require('mongoose');

const PatientRecordSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    PatientID: {
        type: String,
        required: true
    },
    CaseID: {
        type: String,
        required: true
    },
    Weight: {
        type: String,
        required: false
    },
    Height: {
        type: String,
        required: false
    },
    Symptoms: {
        type: Array,
        required: true
    },
    Diagnosis: {
        DrugName: {
            type: String,
            required: true
        },
        StartDate: {
            type: String,
            required: true
        },
        EndDate: {
            type: String,
            required: true
        },
        Repetition: {
            type: String,
            required: true
        }, 
        Quantity: {
            type: Number,
            required: true
        },
        HowToConsume: {
            type: String,
            required: false
        }
    },
    Medication: {
        type: Object,
        required: true
    },
    Advise: {
        type: Array,
        required: false
    },
    TestsAdvised: {
        type: Array,
        required: false
    },
    NextAppointment: {
        type: String,
        required: false
    }
}, {timestamps: true});

const PatientRecordSchemaModel = mongoose.model('patients_record', PatientRecordSchema);
module.exports = PatientRecordSchemaModel;