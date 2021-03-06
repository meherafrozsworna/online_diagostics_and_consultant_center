import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class AdminHome extends Component {
    constructor(props) {
        super(props);
        //this.addTestList = this.addTestList.bind(this);

        this.state = { isToggleOn: false };
        this.state = { isToggle2On: false };

        this.notif_function = this.notif_function.bind(this);
        this.notif_function2 = this.notif_function2.bind(this);

        this.state = {
            appointmentList: [],
            appoint_notif: 4,
            test_notif: 5,
        };
    }

    notif_function() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    notif_function2() {
        this.setState((prevState) => ({
            isToggle2On: !prevState.isToggle2On,
        }));
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/admin/appointmentList', {
                headers: {
                    'x-access-token': localStorage.getItem('admintoken'),
                },
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    appointmentList: response.data,
                });

                //this.setState({});
                console.log('appointmentList: ');
                console.log(this.state.appointmentList);
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.appointmentList.map((d) => (
            <li>
                <Link to={"/addZoomLink/"+d._id}>
                    Patient Name :{d.patientName} <br></br>
                    Doctor Name : {d.doctorName}<br></br>
                    Amount : Tk 1000
                    <h4>UNPAID</h4>
                    <button className="smallbtn">Add Appointment Link</button>
                </Link>

                <br></br>
            </li>
        ));
        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/adminhome">
                            {' '}
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <ul id="nav">
                            <li id="notification_li">
                                <a
                                    href="javascript:void(0);"
                                    id="notificationLink"
                                    onClick={this.notif_function2}
                                >
                                    Appointments{' '}
                                </a>

                                <span
                                    id="notification_count"
                                    className={
                                        this.state.isToggle2On ||
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
                                        this.state.isToggle2On ? '' : 'hidden'
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

                            <li id="notification_li">
                                <a
                                    href="javascript:void(0);"
                                    id="notificationLink"
                                    onClick={this.notif_function}
                                >
                                    {' '}
                                    | Sample Collection
                                </a>

                                <span
                                    id="notification_count"
                                    className={
                                        this.state.isToggleOn ||
                                        this.state.test_notif == 0
                                            ? 'hidden'
                                            : ''
                                    }
                                >
                                    {this.state.test_notif}
                                </span>
                                <div
                                    id="notificationContainer"
                                    className={
                                        this.state.isToggleOn ? '' : 'hidden'
                                    }
                                >
                                    <div id="notificationTitle">
                                        Sample Collections
                                    </div>
                                    <div
                                        id="notificationsBody"
                                        class="notifications"
                                    >
                                        <ul>
                                            <li>
                                                {' '}
                                                <h5>
                                                    {this.state.test_notif}{' '}
                                                    Pending Reports to add
                                                </h5>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="/" id="notificationLink">
                                    {' '}
                                    | Log Out{' '}
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>

                <main className="lab">
                    <div className="row2">
                        <div className="column">
                            <br></br>
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
                                <Link to="/reportList" className="btn3">
                                    Add New Report
                                </Link>
                            </div>
                            <div class="row center">
                                <Link to="/adminhome" className="btn3">
                                    Sample Collections
                                </Link>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="row center">
                                <div className="scrollbox">
                                    <ul style={{ listStyle: 'none' }}>
                                        <h2 style={{ marginLeft: '40px' }}>
                                            Appointment Requests
                                        </h2>
                                        {listItems}
                                        {/*<li>
                                            <Link to="/addZoomLink">
                                                <h3>Abeda Sultana </h3>
                                                Dr Afzal Hossain<br></br>
                                                Tk 1000
                                                <h4>UNPAID</h4>
                                                <h4>Approved</h4>
                                                <button className="smallbtn">
                                                    Add Appointment Link
                                                </button>
                                            </Link>

                                            <br></br>
                                        </li>

                                        <li>
                                            <Link to="/addZoomLink">
                                                <h3>Abeda Sultana </h3>
                                                Dr Afzal Hossain<br></br>
                                                Tk 560
                                                <h4>UNPAID</h4>
                                                <h4>Approved</h4>
                                                <button className="smallbtn">
                                                    Add Appointment Link
                                                </button>
                                            </Link>
                                            <br></br>
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
