import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DoctorScreen from './screens/DoctorScreen';
import TestForm from './screens/TestForm';
import SampleCollector from './screens/SampleCollector';
import Admin from './screens/Admin';
import AdminTest from './screens/AdminTestApprove';
import ReportPrescription from './screens/ReportPrescription';
import SigninScreen from './screens/SigninScreen';
import PatientHomeScreen from './screens/PatientHomeScreen';
import RegisterScreen from './screens/RegisterScreen';

import DoctorSignin from './screens/DoctorSignin';
import CollectorSignin from './screens/CollectorSignin';

import ChooseField from './screens/ChooseField';
import ChooseDoctor from './screens/ChooseDoctor';

import seeReport from './screens/seeReport';



function App() {
    console.log(localStorage.getItem('name'));
    return (
        <BrowserRouter>
            <Route path="/about" component={AboutScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/samplecollector" component={SampleCollector}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/admintest" component={AdminTest}></Route>
            <Route path="/patienthome" component={PatientHomeScreen}></Route>
            <Route path="/testform" component={TestForm}></Route>
            <Route path="/reportpres" component={ReportPrescription}></Route>
            <Route path="/doctor" component={DoctorScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>

            <Route path="/signindoctor" component={DoctorSignin}></Route>
            <Route path="/signincollector" component={CollectorSignin}></Route>

            <Route path="/choosefield" component={ChooseField}></Route>
            <Route path="/choosedoctor" component={ChooseDoctor}></Route>

            <Route path="/seereport" component={seeReport}></Route>
        </BrowserRouter>
    );
}

export default App;
