import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class AdminHome extends Component {

    /*
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
    */

    render() {
        //const data = localStorage.getItem('data');
        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/adminhome">
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Appointments |{' '}
                        </a>
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Sample Collection |{' '}
                        </a>
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Patients
                            {'  '} 
                            </a>
                    </div>
                                   </header>
                <main className="profile">
                    <div className="row2">
                        <div className="column">
                        Test collection notifications: 0<br></br>
                            Appointment Notification: 0<br></br>
                            <div class="row center">
                                <Link to="/adddoctor" className="btn3">
                                    Add/Remove Doctor
                                </Link>
                                </div>
                                <div class="row center">
                                <Link to="/addcollector" className="btn3">
                                    Add/Remove Sample Collector
                                </Link>
                                </div>
                                <div class="row center">
                                <Link to="/" className="btn3">
                                    View Appointments
                                </Link>
                            </div>
                                <div class="row center">
                                <Link to="/" className="btn3">
                                    Add New Report
                                </Link>
                            </div>
                            <div class="row center">
                                <Link to="/" className="btn3">
                                    Check Feedbacks
                                </Link>
                            </div>
                            
                        </div>
                        <div className="column2">
                            <div className="row center">
                                <div className="scrollbox">
                                <ul>

                                <h2>Sample Collection Requests</h2>
                                         <li>
                                        <Link to="/admintest">
                                        <h3>Abeda Sultana </h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        </Link>
                                        </li>

                                        <li>
                                        <Link to="/admintest">
                                        <h3>Abeda Sultana </h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        </Link>
                                        </li>

                                        <li>
                                        <Link to="/admintest">
                                        <h3>Abeda Sultana </h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        </Link>
                                        </li>

                                        <li>
                                        <Link to="/admintest">
                                        <h3>Abeda Sultana </h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        </Link>
                                        </li>
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
