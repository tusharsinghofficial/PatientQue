const express = require('express');
const router = express.Router();
const PatientRecordSchema = require('../models/PatientRecords');


router.post('/', (request, response)=> {
    const data = new PatientRecordSchema({
        Name: request.Name,
        Age: request.Age,
        Gender: request.Gender,
        PatientID: request.PatientID,
        CaseID: request.CaseID,
        Weight: request.Weight,
        Height: request.Height,
        Symptoms: request.Symptoms,
        Diagnosis: {
            DrugName: request.Diagnosis.DrugName,
            StartDate: request.Diagnosis.StartDate,
            EndDate: request.Diagnosis.EndDate,
            Repetition: request.Diagnosis.Repetition, 
            Quantity: request.Diagnosis.Quantity,
            HowToConsume: request.Diagnosis.HowToConsume
        },
        Medication: request.Medication,
        Advise: request.Advise,
        TestsAdvised: request.TestsAdvised,
        NextAppointment: request.NextAppointment
    })
    try {
        await data.save();
        res.send('Saved Data!');
    } 
    catch (error) {
        console.log(error);
        console.log(response);
    }
})

module.exports = router;