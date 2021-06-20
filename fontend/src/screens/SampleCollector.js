import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
        };
    }
    async componentDidMount() {
        //this.getTodos();
        console.log('BBBBBBBBBBB');
        axios
            .get('http://localhost:5000/sampleCollector/isUserAuth', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log('user auth');
                console.log(res);
            });

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
        }

    change_text(){
        document.getElementById("paid").innerHTML = "PAID";
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
                                    <a href="/samplecollector"> SampleCollector Profile </a> |
                                    <a href="/samplecollector" font-color="#9a65a5">
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name :   {this.state.name}</li>
                                        <li>Gender :   {this.state.gender}</li>
                                        <li>Age :   {this.state.age}</li>
                                        <li>Phone :   {this.state.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="row center">
                                <div className="scrollbox">
                                <ul>

                                <h2> Pending Sample Collections</h2>
                                         <li>
                                        <h3>Abeda Sultana</h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <p id="paid">
                                            UNPAID
                                        </p>
                                        <button className="smallbtn" onClick="change_text()">
                                            Completed
                                        </button>
                                        
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>PAID</h4>
                                        <button className="smallbtn" onClick="change_text()">
                                            Completed
                                        </button>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        <button className="smallbtn" onClick="change_text()">
                                            Completed
                                        </button>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>PAID</h4>
                                        <button className="smallbtn" onClick="change_text()">
                                            Completed
                                        </button>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        Khilgaon 204/A Road-10 House-2<br></br>
                                        01712345678<br></br>
                                        Tk 560
                                        <h4>UNPAID</h4>
                                        <button className="smallbtn" onClick="change_text()">
                                            Completed
                                        </button>
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
