import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class PatientHomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
            address: '',
            bloodGroup: '',
            appointmentList: [],
        };
    }

    async componentDidMount() {
        //this.getTodos();
        //console.log('BBBBBBBBBBB');
        axios
            .get('http://localhost:5000/patient/home', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                //let obj = await response.data;
                console.log('AAAAAA');
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    password: response.data.password,
                    gender: response.data.gender,
                    age: response.data.age,
                    phone: response.data.phone,
                    email: response.data.email,
                    address: response.data.address,
                    bloodGroup: response.data.bloodGroup,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
        axios
            .get('http://localhost:5000/patient/getAppointmentDetails', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                //let obj = await response.data;
                console.log(response.data);
                this.setState({
                    appointmentList: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.appointmentList.map((d) => (
            <li>
                <h3>
                    {d.doctorName}
                    <br></br>
                    {d.date}
                    <br></br>
                    <br></br>
                    <button className="smallbtn">
                        <a
                            href={d.link}
                            target="_blank"
                            style={{ color: 'white' }}
                        >
                            {/*<p style={{ color: 'white' }}>Go To Zoom Link</p>*/}
                            Go To Zoom Link
                        </a>
                    </button>
                </h3>
            </li>
        ));

        return (
            <div className="profile">
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

                <main className="profile">
                    <div className="row2">
                        <div className="column">
                            <div className="detail-box1">
                                <div className="user-image">
                                    <img
                                        src="https://data.whicdn.com/images/345295536/original.jpg"
                                        alt="pp"
                                    ></img>
                                </div>
                                <div className="detail-box3">
                                    <a href="/editprofile"> My Profile </a> |
                                    <a href="/editprofile" font-color="#9a65a5">
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name : {this.state.name}</li>
                                        <li>Gender : {this.state.gender}</li>
                                        <li>Age : {this.state.age}</li>
                                        <li>Phone: {this.state.phone}</li>
                                        <li>Email : {this.state.email}</li>
                                        <li>Address : {this.state.address}</li>
                                        <li>
                                            Blood Group :{' '}
                                            {this.state.bloodGroup}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="column2">
                            <div className="row center">
                                <div className="scrollbox_sample">
                                    <ul>
                                        <h2 style={{ marginLeft: '40px' }}>
                                            {' '}
                                            Pending Appointments
                                        </h2>
                                        <br></br>
                                        {listItems}
                                        {/*
                                        <li>
                                            <h3>
                                                Dr. Afzal Khan<br></br>
                                                Cardiology<br></br>
                                                05-12-2020 8:00 PM<br></br> Zoom
                                                Link:<br></br>
                                                <button className="smallbtn">
                                                    Go to Link
                                                </button>
                                            </h3>
                                        </li>
*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
