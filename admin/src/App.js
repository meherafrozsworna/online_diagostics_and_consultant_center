import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminHome from './screens/AdminHome';
import AdminTest from './screens/AdminTestApprove';
import AdminSignin from './screens/AdminSignin';
import addCollector from './screens/addCollector';
import registerCollector from './screens/registerCollector';
import addDoctor from './screens/addDoctor';
import registerDoctor from './screens/registerDoctor';


function App() {
  console.log(localStorage.getItem('name'));
    return (
        <BrowserRouter>
           
            <Route path="/" component={HomeScreen} exact></Route>  
            <Route path="/signinadmin" component={AdminSignin}></Route>  
            <Route path="/adminhome" component={AdminHome}></Route>
            <Route path="/admintest" component={AdminTest}></Route>          
            <Route path="/addcollector" component={addCollector}></Route>  
            <Route path="/registercollector" component={registerCollector}></Route>    
            <Route path="/adddoctor" component={addDoctor}></Route>  
            <Route path="/registerdoctor" component={registerDoctor}></Route>  

        </BrowserRouter>
    );
}

export default App;
