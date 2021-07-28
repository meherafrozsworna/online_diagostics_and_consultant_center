import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class ChooseDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorList: [],
        };
    }

    async componentDidMount() {
        console.log('MMMMMMMMMMMMMMM  ' + this.props.match.params.field);
        axios
            .get(
                'http://localhost:5000/doctor/specialization/' +
                    this.props.match.params.field
            )
            .then((response) => {
                //let obj = await response.data;
                console.log('AAAAAA');
                console.log(response.data);
                this.setState({
                    doctorList: response.data,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.doctorList.map((d) => (
            <div class="grid-item">
                <div class="card">
                    {(d.gender.localeCompare('female') == 0) |
                    (d.gender.localeCompare('Female') == 0) ? (
                        <img
                            src="https://st2.depositphotos.com/3889193/8319/i/600/depositphotos_83195332-stock-photo-smiling-female-doctor-holding-medical.jpg"
                            alt={d.name}
                            style={{ width: '100%' }}
                        />
                    ) : (
                        <img
                            src="http://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg"
                            alt={d.name}
                            style={{ width: '100%' }}
                        />
                    )}
                    <h3>{d.name.toUpperCase()}</h3>
                    <p class="title">
                        {d.currentInstitution} <br></br>
                        {d.degree}
                    </p>
                    <p>
                        {' '}
                        <h2>Sun-Thurs: 6pm-9pm</h2>
                    </p>
                    <Link to={'/doctordetails/' + d._id} className="book_btn">
                        Book Appointment
                    </Link>
                </div>
            </div>
        ));
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
                        {listItems}
                        {/*<div class="grid-item">
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
        */}
                    </div>
                </main>
            </div>
        );
    }
}
