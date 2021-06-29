import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//export default function PatientHomeScreen() {
export default class PatientHomeScreen extends Component {
    constructor(props) {
        super(props);

        
    this.state = {isToggleOn: false};
    this.state = {isToggle2On: false};
    this.state = {isToggle3On: false};

        this.notif_function= this.notif_function.bind(this);
        this.notif_function2= this.notif_function2.bind(this);
        this.notif_function3= this.notif_function3.bind(this);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
            address: '',
            bloodGroup: '',

            report_notif: 1,
            appoint_notif: 1,
            test_notif: 1,
        };
    }

    notif_function(){

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }))
      }

      notif_function2(){

        this.setState(prevState => ({
            isToggle2On: !prevState.isToggle2On
          }))
      }

      notif_function3(){

        this.setState(prevState => ({
            isToggle3On: !prevState.isToggle3On,
            report_notif:0
          }))
      }

    async componentDidMount() {
        //this.getTodos();
        console.log('BBBBBBBBBBB');
        axios
            .get('http://localhost:5000/patient/isUserAuth', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log('user auth');
                console.log(res);
            });

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
                        <a className="brand" href="/patienthome">
                            {' '} {' '} Home
                        </a>
                    </div>
                    <div className="row center">

                        <ul id="nav">


                            <li id="notification_li">
                                <a href="javascript:void(0);" id="notificationLink" onClick={this.notif_function2}>Appointments</a>

                                <span id="notification_count" className={this.state.isToggle2On  || this.state.appoint_notif==0 ? 'hidden' : ''} >{this.state.appoint_notif}</span>
                                <div id="notificationContainer"  className={this.state.isToggle2On ? '' : 'hidden'} >
                                    <div id="notificationTitle" >Appointments</div>
                                    <div id="notificationsBody" class="notifications">
                                        <ul>
                                            <li> <h3> Pending Appointment: 4/07/21 8PM Dr. Afzal Khan </h3></li>

                                        </ul>
                                    </div>
                                    <div id="notificationFooter"><a href="/">See All</a></div>
                                </div>
                                </li>

                                <li id="notification_li">
                                <a href="javascript:void(0);" id="notificationLink" onClick={this.notif_function}>Sample Collection</a>

                                <span id="notification_count" className={this.state.isToggleOn || this.state.test_notif==0 ? 'hidden' : ''} >{this.state.test_notif}</span>
                                <div id="notificationContainer"  className={this.state.isToggleOn ? '' : 'hidden'} >
                                    <div id="notificationTitle" >Sample Collections</div>
                                    <div id="notificationsBody" class="notifications">
                                        <ul>
                                            <li> <h3> Pending Sample Collection 26/06/21: A Sample collector will visit you within 2 days.</h3>  </li>

                                        </ul>
                                    </div>
                                    <div id="notificationFooter"><a href="/">See All</a></div>
                                </div>
                                </li>

                                <li id="notification_li">
                                <a href="javascript:void(0);" id="notificationLink" onClick={this.notif_function3}>Reports</a>

                                <span id="notification_count" className={this.state.isToggle3On || this.state.report_notif==0  ? 'hidden' : ''} >{this.state.report_notif}</span>
                                <div id="notificationContainer"  className={this.state.isToggle3On ? '' : 'hidden'} >
                                    <div id="notificationTitle" >New Reports</div>
                                    <div id="notificationsBody" class="notifications">
                                        <ul>
                                            <li> <Link to="/reportpres"> <h3> New Report Added on 24/06/21 </h3>  </Link></li>

                                        </ul>
                                    </div>
                                    <div id="notificationFooter"><a href="/">See All</a></div>
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
                                            <a href="/editprofile"> My Profile </a> |
                                            <a href="/editprofile"font-color="#9a65a5">
                                                {' '}
                                                Edit
                                            </a>
                                        </div>

                                        <div className="detail-box2">
                                            <ul className="ul-first">
                                                <li>Name :  {this.state.name}</li>
                                                <li>Gender :  {this.state.gender}</li>
                                                <li>Age :  {this.state.age}</li>
                                                <li>Phone:  {this.state.phone}</li>
                                                <li>Email :  {this.state.email}</li>
                                                <li>Address :  {this.state.address}</li>
                                                <li>Blood Group :  {this.state.bloodGroup}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column2">
                              
                                    <div class="row center">
                                        <br></br>
                                        <Link to="/choosefield" className="btnIcon1">
                                           {' '}
                                        </Link>
                                        <br></br>
                                        <Link to="/testform" className="btnIcon2">
                                            {' '}
                                        </Link>
                                        <br></br>
                                        <Link to="/reportpres" className="btnIcon3">
                                            {' '}
                                        </Link>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    );
    }
}
