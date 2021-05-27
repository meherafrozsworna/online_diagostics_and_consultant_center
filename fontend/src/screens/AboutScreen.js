import React from 'react';

export default function AboutScreen() {
    return (

        <div class="grid-container">
        <header className="row">
        <div>
          <a className="brand" href="/">Healthway</a>
        </div>
        <div>
          <a href="/about">About</a>   |  
          <a href="/about">Services</a>   | 
          <a href="/signin">Sign In         </a>          
        </div>
      </header>
        <main class="about">
            <br></br>
           ABOUT
           <br></br> <br></br> <br></br>
           Official website of Healthway Diagnostic Center.
           <br></br>
           Contact:  <br></br> <br></br>
           01712345678 <br></br>
           019112223334 <br></br>
           healthway@gmail.com <br></br> <br></br>
           Address: <br></br>
           28/C, Outer Circlar Road, Dhaka 1217 <br></br>
  
  
        </main>
  
        <footer class="row center">All right reserved</footer>
      </div>

    );

}