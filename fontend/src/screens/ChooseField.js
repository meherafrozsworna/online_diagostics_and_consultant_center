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
                        <a className="brand" href="/patienthome/:id">
                            Home
                        </a>
                    </div>
                </header>
                <main className="lab">
                    <div className="rows">
                    <div className="row center">
                    <ul className="fields">
                        <h1>Choose A Field</h1>
                        <li> <Link to="/choosedoctor"><h6>General Practice</h6>  </Link> </li>
                        <li> <Link to="/choosedoctor"><h6>Cardiology</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Gynecology</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Nephrology</h6></Link> </li>
                        <li><Link to="/choosedoctor"> <h6>Radiology</h6></Link> </li>
                        <li> <Link to="/choosedoctor"><h6>Diabetics</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Skin And VD</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Eye</h6></Link> </li>
                        <li><Link to="/choosedoctor"> <h6>Ear, Nose, Throat (ENT)</h6> </Link></li>
                        <li><Link to="/choosedoctor"> <h6>Gastroenterology</h6></Link> </li>
                        <li><Link to="/choosedoctor"> <h6>Respiratory Medicine</h6> </Link></li>
                        <li><Link to="/choosedoctor"> <h6>General Surgery</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Cosmetic Surgery</h6> </Link></li>
                        <li> <Link to="/choosedoctor"><h6>Psychiatry</h6> </Link></li>
                        <li><Link to="/choosedoctor"> <h6>Hormone And Endocrinology</h6> </Link></li>


                    </ul>
                    </div>
                    </div>
                </main>
            </div>
        );
    }
}
