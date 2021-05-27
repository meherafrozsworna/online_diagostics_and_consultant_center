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
      <main>

     
        </main>
      <footer>
      <div className="row center">
<div >

  <div className="loginbuttons">

   <Link to="/signin" className="btn">Sign In</Link>
   <Link to="/register" className="btn">Register</Link>

  </div>

</div>
</div>


      </footer>
    </div>


    );

}