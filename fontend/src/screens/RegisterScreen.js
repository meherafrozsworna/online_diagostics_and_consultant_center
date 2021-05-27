import React from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {

    return (

        <div className="grid-container">
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
      <main>

      <div>
      <form className="form">
        <div>
        <h1>Register</h1>
        </div>
        <div>
          <input
            type="text"
            id="password"
            placeholder="Name"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            //onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        
        <div>
          <input
            type="dropdown"
            id="gender"
            placeholder="Gender"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="date"
            id="dob"
            placeholder="Date of Birth"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="dropdown"
            id="address"
            placeholder="Location"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
      
          
        </main>
      <footer>


      </footer>
    </div>

        

    );

}