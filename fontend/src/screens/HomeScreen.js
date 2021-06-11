import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return (

        <div className="homescreen">
      <header className="row">
        <div>
          <Link className="brand" href="/">Healthway</Link>
        </div>
        <div>
          <Link to="/about">About</Link>   |  
          <Link to="/patienthome">Services</Link>   | 

          {
              <Link to="/signin" >Sign In         </Link>  
          }
                  
        </div>
      </header>
      <main className="homescreen">

     
        </main>
      <footer>
<div className="rows3">

  <div className="loginbuttons">

   <Link to="/signin" className="btn">Sign In</Link>
   <Link to="/register" className="btn">Register</Link>

  </div>

</div>
<div className="rows3">

  <div className="extrlogins">

   <Link to="/signindoctor"  className="spacedLink">    Doctor Sign In              </Link>              
   <Link to="/signincollector"  className="spacedLink">    Collector Sign In</Link>    

  </div>

</div>


      </footer>
    </div>


    );

}
