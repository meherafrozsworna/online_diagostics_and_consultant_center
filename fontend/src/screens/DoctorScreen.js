import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class DoctorScreen extends Component {
    constructor(props) {
        super(props);
        //this.addTestList = this.addTestList.bind(this);

        //this.state = { isToggleOn: false };
        this.state = {
            isToggleOn: false,
            name: '',
            phone: '',
            email: '',
            specialization: '',
            currentInstitution: '',
            degree: '',
            appointmentList: [],
        };

        this.notif_function = this.notif_function.bind(this);
        this.state = {
            appoint_notif: 6,
        };
    }

    notif_function() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

  async   componentDidMount() {
    axios
    .get('http://localhost:5000/doctor/showAppointmentList', {
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
    })
    .then((res) => {
        console.log('BBBBB');
        console.log(res.data);
        this.setState({
            appointmentList: res.data,
        });
        console.log('compoment did mount');
        console.log(this.state.appointmentList);
    })
    .catch(function (error) {
        console.log('error');
        console.log(error);
    });
        axios
            .get('http://localhost:5000/doctor/home', {
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
                    phone: response.data.phone,
                    email: response.data.email,
                    specialization: response.data.specialization,
                    degree: response.data.degree,
                    currentInstitution: response.data.currentInstitution,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
                console.log('MMMM');
              
           
           
    }

    render() {
       // const listItems = null;
        console.log('CCCCCCCCC');
        console.log(this.state.appointmentList);
        if (this.state.appointmentList) {
            var listItems = this.state.appointmentList.map((d) => (
                <li>
                <Link to={'/docViewPatient/' + d.patientId}>
                    {' '}
                    <h3>Patient Name : {d.patientName}</h3>{' '}
                </Link>
                <p style={{ color: 'red' }}>Time : {d.date}</p>
                <br></br>
            </li>
            ));
            
          }
       /* var listItems = this.state.appointmentList.map((d) => (
            <li>      
                    <h3>
                        {d.patientName}
                        <br></br>
                        06-30-2021 <br></br>
                    </h3>      
            </li>
        ));
        
  /*     const listItems = this.state.appointmentList.map((d) => (
            <li>
                <h3>d.patientName</h3>{' '}
                <Link to={'/docViewPatient/' + d.patientId}>
                    {' '}
                    <h3>d.patientName</h3>{' '}
                </Link>
                <p style={{ color: 'red' }}>d.date</p>
                <br></br>
            </li>
        ));*/

        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/samplecollector">
                            {' '}
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <ul id="nav">
                            <li>
                                <Link to="/makepres">
                                    + Add Prescription{'  '}
                                </Link>
                            </li>

                            <li id="notification_li">
                                <a
                                    href="javascript:void(0);"
                                    id="notificationLink"
                                    onClick={this.notif_function}
                                >
                                    Appointments
                                </a>

                                <span
                                    id="notification_count"
                                    className={
                                        this.state.isToggleOn ||
                                        this.state.appoint_notif == 0
                                            ? 'hidden'
                                            : ''
                                    }
                                >
                                    {this.state.appoint_notif}
                                </span>
                                <div
                                    id="notificationContainer"
                                    className={
                                        this.state.isToggleOn ? '' : 'hidden'
                                    }
                                >
                                    <div id="notificationTitle">
                                        Appointments
                                    </div>
                                    <div
                                        id="notificationsBody"
                                        class="notifications"
                                    >
                                        <ul>
                                            <li>
                                                {' '}
                                                <h5>
                                                    {this.state.appoint_notif}{' '}
                                                    Pending Appointment Bookings
                                                </h5>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="/" id="notificationLink">
                                    {' '}
                                    Log Out{' '}
                                </a>
                            </li>
                        </ul>
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
                                    <a href="/doceditprofile">
                                        {' '}
                                        Doctor Profile{' '}
                                    </a>{' '}
                                    |
                                    <a
                                        href="/doceditprofile"
                                        font-color="#9a65a5"
                                    >
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name : {this.state.name}</li>
                                        <li>Email : {this.state.email}</li>
                                        <li>
                                            Institution :{' '}
                                            {this.state.currentInstitution}
                                        </li>
                                        <li>Degree : {this.state.degree}</li>
                                        <li>Phone : 0{this.state.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="scrollbox_sample">
                                <ul style={{ listStyle: 'none' }}>
                                    <h2> Upcoming Appointments</h2>
                                    <br></br>
                                    <br></br>
                                  
                                 {listItems}
                                    {/*
                                    <li>
                                        <Link to="/docViewPatient">
                                            {' '}
                                            <h3>Abeda Sultana</h3>{' '}
                                        </Link>
                                        <p style={{ color: 'red' }}>
                                            19-06-21 8PM
                                        </p>
                                        <br></br>
                                    </li>

                                    <li>
                                        <Link to="/docViewPatient">
                                            {' '}
                                            <h3>Abeda Sultana</h3>{' '}
                                        </Link>
                                        <p style={{ color: 'red' }}>
                                            19-06-21 8PM
                                        </p>
                                        <br></br>
                                    </li>

                                    <li>
                                        <Link to="/docViewPatient">
                                            {' '}
                                            <h3>Abeda Sultana</h3>{' '}
                                        </Link>
                                        <p style={{ color: 'red' }}>
                                            19-06-21 8PM
                                        </p>
                                        <br></br>
                                    </li>

                                    <li>
                                        <Link to="/docViewPatient">
                                            {' '}
                                            <h3>Abeda Sultana</h3>{' '}
                                        </Link>
                                        <p style={{ color: 'red' }}>
                                            19-06-21 8PM
                                        </p>
                                        <br></br>
                                    </li>
                                */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
