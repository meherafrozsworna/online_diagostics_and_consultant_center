import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DoctorScreen from './screens/DoctorScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import TestFormScreen from './screens/TestFormScreen';
import PatientHomeScreen from './screens/PatientHomeScreen';

function App() {
  console.log(localStorage.getItem('name'));
    return (
        <BrowserRouter>
            <Route path="/about" component={AboutScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
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
            <Route path="/testform" component={TestFormScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
        </BrowserRouter>
    );
}

export default App;
