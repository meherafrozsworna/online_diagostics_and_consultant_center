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
        };
    }

    async componentDidMount() {
        //this.getTodos();
        //console.log('BBBBBBBBBBB');
        let data = await axios
            .get('http://localhost:5000/patient/' + this.props.match.params.id)
            .then((response) => {
                //let obj = await response.data;
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
                console.log(error);
            });
    }

    render() {
        const data = localStorage.getItem('data');
        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/">
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <a className="brand2" href="/about">
                            {' '}
                            Appointments |{' '}
                        </a>
                        <a className="brand2" href="/signin">
                            {' '}
                            Sample Collection |{' '}
                        </a>
                        <a className="brand2" href="/signin">
                            {' '}
                            Feedback{' '}
                        </a>
                    </div>
                </header>
                <main className="profile">
                    <div className="row2">
                        <div className="column">
                            <div className="detail-box">
                                <div className="user-image">
                                    <img
                                        src="https://data.whicdn.com/images/345295536/original.jpg"
                                        alt="pp"
                                    ></img>
                                </div>
                                <div className="detail-box3">
                                    <a href="/patienthome"> My Profile </a> |
                                    <a href="/patienthome" font-color="#9a65a5">
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name</li>
                                        <li>Gender</li>
                                        <li>Age</li>
                                        <li>Phone</li>
                                        <li>Email</li>
                                        <li>Address</li>
                                        <li>Blood Group</li>
                                    </ul>
                                    <ul className="ul-second">
                                        <li>{localStorage.getItem('name')}</li>
                                        <li>
                                            {localStorage.getItem('gender')}
                                        </li>
                                        <li>{localStorage.getItem('age')}</li>
                                        <li>{localStorage.getItem('phone')}</li>
                                        <li>{localStorage.getItem('email')}</li>
                                        <li>
                                            {localStorage.getItem('address')}
                                        </li>
                                        <li>
                                            {localStorage.getItem('bloodGroup')}
                                        </li>
                                    </ul>
                                </div>

                                <div className="detail-box2">
                                    <a href="/history"> Patient History</a>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <br></br><br></br>
                            <div className="scrollbox2">
                                <ul>
                                <h2> Reports</h2>
                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Haemoglobin Report of Abeda Sultana<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>
                                    </ul>
                                </div>
                        </div>


                        <div className="column2">
                            <br></br><br></br>
                            <div className="scrollbox2">
                                <ul>
                                    <h2> Prescriptions</h2>
                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>

                                        <li>Dr. Afzal Prescription<br></br>
                                        Cardiology<br></br>
                                        05-12-2020<br></br><br></br>
                                        </li>
                                    </ul>
                                </div>
                        </div>

                    </div>
                </main>
            </div>
        );
    }
}