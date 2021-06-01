const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/diagnostics";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const patientRouter = require('./controller/patientController');
const doctorRouter = require('./controller/doctorController');
const historyRouter=require('./controller/historyController');
const reportRouter=require('./controller/reportController');
const sampleCollectorRouter=require('./controller/sampleCollectorController');

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter) ;
app.use('/history',historyRouter);
app.use('/report',reportRouter);
app.use('/sampleCollector',sampleCollectorRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
  
 
