import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class ChooseDoctor extends Component {
    render() {
        return (
            <div className="profile2">
                <header className="row">
                    <div>
                        <a className="brand" href="/patienthome/:id">
                            Home
                        </a>
                    </div>
                    <div>
                        <Link to="/">Log Out{'  '}</Link>
                    </div>
                </header>

                <main>
                    <div className="grid-container1">
                        <div class="grid-item">
                            <div class="card">
                                <img
                                    src="http://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg"
                                    alt="Dr_Reza"
                                    style={{ width: '100%' }}
                                />
                                <h3>Dr Rezaul Karim</h3>
                                <p class="title">
                                    Assisstant Professor, DMC <br></br>
                                    MBBS, DTCH (DMC)
                                </p>
                                <p>
                                    {' '}
                                    <h2>Sun-Thurs: 6pm-9pm</h2>
                                </p>
                                <Link to="/doctordetails" className="book_btn">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="card">
                                <img
                                    src="http://www.shrimannhospitals.com/php/timthumb.php?src=http://www.shrimannhospitals.com/img/25568508.jpg&h=600&w=520&zc=1"
                                    alt="Dr_Reza"
                                    style={{ width: '100%' }}
                                />
                                <h3>Dr Afzal Khan</h3>
                                <p class="title">
                                    Assisstant Professor, DMC <br></br>
                                    MBBS, DTCH (DMC)
                                </p>
                                <p>
                                    {' '}
                                    <h2>Sun-Thurs: 6pm-9pm</h2>
                                </p>
                                <Link to="/doctordetails" className="book_btn">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_8XiCcp9-O1bS15XU7YGTdC4j1AkJNBkmSVOAmb4-xHSdhGX2SRFyC8HKbcQvyHOkKs&usqp=CAU"
                                    alt="Dr_Reza"
                                    style={{ width: '100%' }}
                                />
                                <h3>Dr Dipto Barua</h3>
                                <p class="title">
                                    Assisstant Professor, DMC <br></br>
                                    MBBS, DTCH (DMC)
                                </p>
                                <p>
                                    {' '}
                                    <h2>Sun-Thurs: 6pm-9pm</h2>
                                </p>
                                <Link to="/doctordetails" className="book_btn">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="card">
                                <img
                                    src="https://www.woodlandshospital.in/images/doctor-img/arup-halder.jpg"
                                    alt="Dr_Reza"
                                    style={{ width: '100%' }}
                                />
                                <h3>Dr Arif Hossain</h3>
                                <p class="title">
                                    Assisstant Professor, DMC <br></br>
                                    MBBS, DTCH (DMC)
                                </p>
                                <p>
                                    {' '}
                                    <h2>Sun-Thurs: 6pm-9pm</h2>
                                </p>
                                <Link to="/doctordetails" className="book_btn">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>

                        <div class="grid-item">
                            <div class="card">
                                <img
                                    src="https://st.depositphotos.com/1518767/1390/i/950/depositphotos_13909652-stock-photo-young-doctor-sitting-on-a.jpg"
                                    alt="Dr_Reza"
                                    style={{ width: '100%' }}
                                />
                                <h3>Dr Nasima Sultana</h3>
                                <p class="title">
                                    Assisstant Professor, DMC <br></br>
                                    MBBS, DTCH (DMC)
                                </p>
                                <p>
                                    {' '}
                                    <h2>Sun-Thurs: 6pm-9pm</h2>
                                </p>
                                <Link to="/doctordetails" className="book_btn">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
