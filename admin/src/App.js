import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminHome from './screens/AdminHome';
import AdminTest from './screens/AdminTestApprove';
import AdminSignin from './screens/AdminSignin';


function App() {
  console.log(localStorage.getItem('name'));
    return (
        <BrowserRouter>
           
            <Route path="/" component={HomeScreen} exact></Route>  
            <Route path="/signinadmin" component={AdminSignin}></Route>  
            <Route path="/adminhome" component={AdminHome}></Route>
            <Route path="/admintest" component={AdminTest}></Route>          

        </BrowserRouter>
    );
}

export default App;
