const express = require('express');
const router = express.Router();
const DoctorsRecordSchema = require('../models/DoctorsRecord')

router.post('/', (request, response)=> {
    const data = new DoctorsRecordSchema({
        PatientID: request.PatientID
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