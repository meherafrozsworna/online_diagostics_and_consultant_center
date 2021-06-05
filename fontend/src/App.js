import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DoctorScreen from './screens/DoctorScreen';
import TestForm from './screens/TestForm';
import SampleCollector from './screens/SampleCollector';
import ReportPrescription from './screens/ReportPrescription';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import PatientHomeScreen from './screens/PatientHomeScreen';

function App() {
  console.log(localStorage.getItem('name'));
    return (
        <BrowserRouter>
            <Route path="/about" component={AboutScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/samplecollector" component={SampleCollector}></Route>
            <Route
                path="/patienthome/:id"
                
                  //component={PatientHomeScreen}}
                render={props => 
                  <PatientHomeScreen 
                    {...props} 
                    user={"Adiba"}/>
                  /*using render to send custom props*/
                } >
            </Route>
            <Route path="/testform" component={TestForm}></Route>
            <Route path="/reportpres" component={ReportPrescription}></Route>
            <Route path="/doctor" component={DoctorScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
        </BrowserRouter>
    );
}

export default App;
