import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class DoctorScreen extends Component {

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
                        <a className="brand" href="/">
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <a className="brand2" href="/makepres">
                            {' '}
                            + Add Prescription{' '}{' '}{' '}
                        </a>
                        <a className="brand2" href="/makepres">
                            {' '}{' '}{' '}{' '}{' '}{' '}{' '}
                            
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
                                    <a href="/samplecollector"> Doctor Profile </a> |
                                    <a href="/samplecollector" font-color="#9a65a5">
                                        {' '}
                                        Edit
                                    </a>
                                </div>

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name : {localStorage.getItem('name')}</li>
                                        <li>Position : {localStorage.getItem('name')}</li>
                                        <li>Institution : {localStorage.getItem('age')}</li>
                                        <li>Phone : {localStorage.getItem('phone')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            
                            
                            <div className="scrollbox22">
                                <ul>
                                <h2> Upcoming Appointments</h2>
                                         <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        </li>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        </li>  

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        </li>                                       
                                    </ul>
                                </div>


                        <div className="column3">
                            
                            <div className="scrollbox22">
                                <ul>
                                <h2>Pending Your Approval</h2>
                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        <a style={{color:"green"}} href="/">Approve </a>|
                                        <a style={{color:"red"}} href="/">  Reject </a>
                                        </li> <br></br>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        <a style={{color:"green"}} href="/">Approve </a>|
                                        <a style={{color:"red"}} href="/">  Reject </a>
                                        </li> <br></br>

                                        <li>
                                        <h3>Abeda Sultana</h3>
                                        <p style={{color:"red"}} >19-06-21 8PM</p>
                                        <a style={{color:"green"}} href="/">Approve </a>|
                                        <a style={{color:"red"}} href="/">  Reject </a>
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
