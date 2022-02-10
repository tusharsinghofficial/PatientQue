const express = required('express');
const app = express();
require('dotenv/config');
const pushPatientRecord = require('./routes/PatientRecords');
const PatientRecord = require('./models/PatientRecords');

// Connecting to Database and Setting up sever.
const PORT = process.env.PORT || 5001;
const mongoose = require('mongoose')
mongoose.connect(process.env.db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> {
    console.log("Connect to DB", result);
})
.catch((error)=> console.log("Error =", error));


app.use('/publish-prescription', pushPatientRecord);

app.get('./add-record', (request, response)=> {
    const patientRecord = new PatientRecord({
        
    })
})
app.listen(PORT, ()=> console.log("Port Running on", PORT));