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
        <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            //onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="specialborder"
            required
           // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?{' '}
            <Link to="/register">
              Create your account
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