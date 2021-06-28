import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class ChooseDoctor extends Component {


    render() {
        return (


            <div className="profile2">
                {

                }

                <header className="row">
                    <div>
                        <a className="brand" href="/patienthome/:id">
                            Home
                        </a>
                    </div>
                </header>
                <main className="profile">


                    <div class="card">
                    <img src="http://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg" alt="Dr_Reza" style={{width:"100%"}}/> 
                        <h3>Dr Rezaul Karim</h3>
                        <p class="title">
                            Assisstant Professor, DMC <br></br>
                            MBBS, DTCH (DMC) 
                        </p>

                        <p> <h2>
                            Sun-Thurs: 6pm-9pm
                        </h2></p>
                       
                        <Link to="/signin" className="book_btn">Book Appointment</Link>
                    </div>

                </main>
            </div>
        );
    }
}
