import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        this.notif_function = this.notif_function.bind(this);
        this.completeButton = this.completeButton.bind(this);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
            testListId: [],
            testList: [],
            test_notif: 5,
        };
    }

    notif_function() {

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/sampleCollector/screen', {
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
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });

        axios
            .get('http://localhost:5000/sampleCollector/alltheList', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log('BBBBBBBBBBB');
                console.log(response.data);
                this.setState({
                    testList: response.data,
                });
                /*let idList = response.data;
                console.log(idList);
                idList.forEach(this.addDoctorsList);
                */
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    change_text() {
        document.getElementById('paid').innerHTML = 'PAID';
    }

    completeButton = (d) => {
        console.log('comeplete test : ' + d._id);
        axios
            .post('http://localhost:5000/sampleCollector/deleteTest', d, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });

        axios
            .post('http://localhost:5000/admin/addReportList', d)
            .then((response) => {})
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
        /*
        axios
            .get('http://localhost:5000/sampleCollector/alltheList', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                console.log('BBBBBBBBBBB');
                console.log(response.data);
                this.setState({
                    testList: response.data,
                });
                
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
            */
        this.setState({
            testList: this.state.testList.filter((el) => el._id !== d._id),
        });
    };

    render() {
        //const data = localStorage.getItem('data');

        const listItems = this.state.testList.map((d) => (
            <li>
                <h3>{d.patientName}</h3>
                {d.address}
                <br></br>0{d.phoneNumber}
                <br></br>
                TestList : 
                <br></br>
                {d.testName.map((item) => (<li>{item}</li>))}
                <br></br>
                Tk 500
                <h4>UNPAID</h4>
                <button
                    className="smallbtn"
                    onClick={() => this.completeButton(d)}
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
                        <a className="brand" href="/samplecollector">
                            {' '} {' '} Home
                        </a>
                    </div>
                    <div className="row center">

                        <ul id="nav">

                            <li id="notification_li">
                                <a href="javascript:void(0);" id="notificationLink" onClick={this.notif_function}>Sample Collection</a>

                                <span id="notification_count" className={this.state.isToggleOn || this.state.testList.length == 0 ? 'hidden' : ''} >{this.state.testList.length}</span>
                                <div id="notificationContainer" className={this.state.isToggleOn ? '' : 'hidden'} >
                                    <div id="notificationTitle" >Sample Collections</div>
                                    <div id="notificationsBody" class="notifications">
                                        <ul>
                                            <li> <h5>{this.state.testList.length} Pending Samples to Collect</h5>  </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="/" id="notificationLink">{' '}
                                    Log Out{' '}</a>
                            </li>

                        </ul>
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
                                    <a href="/samplecollector">
                                        {' '}
                                        SampleCollector Profile{' '}
                                    </a>{' '}
                                    |
                                    <a
                                        href="/samplecollector"
                                        font-color="#9a65a5"
                                    >
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name : {this.state.name}</li>
                                        <li>Gender : {this.state.gender}</li>
                                        <li>Age : {this.state.age}</li>
                                        <li>Phone : 0{this.state.phone}</li>
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
                                            Pending Sample Collections
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
