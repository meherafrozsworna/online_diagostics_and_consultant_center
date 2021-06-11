import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (

    <div className="homescreen">
      <header className="row">
        <div>
          <Link className="brand" href="/">Healthway</Link>
        </div>
      </header>

      <main className="homescreen">

        <div className="rows center">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="loginbuttons">
            <Link to="/signinadmin" className="btn">Sign In As Admin</Link>
          </div>
        </div>

      </main>

    </div>


  );

}