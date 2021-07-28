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
            testList: [],
            appoint_notif: 7,
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

    /*
    addTestList(item, index) {
        console.log('In add collector function ' + item);
        const id = item;
        axios
            .get('http://localhost:5000/patient/testform/' + id)
            .then((response) => {
                console.log(response.data);
                this.setState((previousState) => ({
                    testList: [...previousState.testList, response.data],
                }));
                // this.setState({
                //     sampleCollector: this.state.sampleCollector.concat([
                //         response.data,
                //     ]),
                // });
                console.log(this.state.testList);
            })
            .catch(function (error) {
                console.log('In function : ');
                console.log(error);
            });
    }
*/
    componentDidMount() {
        axios
            .get('http://localhost:5000/admin/getid', {
                headers: {
                    'x-access-token': localStorage.getItem('admintoken'),
                },
            })
            .then((response) => {
                console.log(response.data);
                const data = {
                    _id: response.data,
                };
                axios
                    .post('http://localhost:5000/admin/testFormList',data)
                    .then((response) => {
                        console.log(response.data);
                        this.setState({
                            testList: response.data,
                        });

                        //this.setState({});
                        console.log('test collectors : ');
                        console.log(this.state.testList);
                    })
                    .catch(function (error) {
                        console.log('error');
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    removeButton = (d) => {
        axios
            .post('http://localhost:5000/admin/deletePendingTest', d)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        this.setState({
            testList: this.state.testList.filter((el) => el._id !== d._id),
        });
    };

    render() {
        const listItems = this.state.testList.map((d) => (
            <li>
                <Link to={'/admintest/' + d._id}>
                    <h3>Name : {d.patientName} </h3>
                    Address : {d.address}
                    <br></br>
                    Phone Number : 0{d.phoneNumber}
                    <br></br>
                    Amount : 500 Tk
                    <h4>Status : UNPAID</h4>
                </Link>
                <button
                    className="smallbtn"
                    onClick={() => this.removeButton(d)}
                >
                    Completed
                </button>
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
                                <Link
                                    to="/adminhome_appointments"
                                    className="btn3"
                                >
                                    Appointments
                                </Link>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="row center">
                                <div className="scrollbox">
                                    <ul>
                                        <h2 style={{ marginLeft: '40px' }}>
                                            Sample Collection Requests
                                        </h2>
                                        {listItems}
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
