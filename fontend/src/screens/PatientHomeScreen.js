import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientHomeScreen() {

    return(

        <div class="profile">
        <header class="row">
          <div>
            <a class="brand" href="/">Home</a>
          </div>
          <div class="row center">
            <a class="brand2" href="/about"> Appointments   | </a>
            <a class="brand2" href="/signin"> Sample Collection   | </a>
            <a class="brand2" href="/signin"> Feedback  </a>
          </div>
        </header>
        <main class="profile">

        <div class="row">
          <div class="column">

					    

            <div class="detail-box">

              <div class="user-image">
					      <img src="https://data.whicdn.com/images/345295536/original.jpg" alt="pp"></img>
				      </div>
              <div class="detail-box3">
                <a href="/patienthome">     My Profile   </a>     |
                <a href="/patienthome" font-color="#9a65a5">  Edit</a>
              </div>

              <div class="detail-box2">
              
					  	<ul class="ul-first">
                <li>Age</li>
                <li>Gender</li>
							  <li>Blood Group</li>
							  <li>Weight</li>
							  <li>Location</li>
						  </ul>
						  <ul class="ul-second">
							  <li>29</li>
                <li>Female</li>
                <li>B+</li>
                <li>51</li>
							  <li>Dhanmondi</li>
						  </ul>

              </div>

              <div class="detail-box2">

              <a href="/history">    Patient History</a>
              </div>

					  </div>
          </div>
          <div class="column">

            <div class="row center">

              <br></br><br></br><br></br><br></br><br></br>
              <Link to="/" className="btn2">Book Appointment</Link><br></br><br></br><br></br><br></br><br></br>
              <Link to="/testform" className="btn2">Need A Test?</Link><br></br><br></br><br></br><br></br><br></br>
              <Link to="/" className="btn2">Reports And Prescriptions</Link><br></br><br></br><br></br><br></br><br></br>

            </div>

           </div>
        </div>

        
  
        </main>
           
    
      </div>

    );
}