import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class addDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorList: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/doctor/getAlldoctor')
            .then((response) => {
                //console.log(response.data);
                this.setState({ doctorList: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    removeDoctor() {
        //
    }

    render() {
        //const data = localStorage.getItem('data');
        const listItems = this.state.doctorList.map((d) => (
            <li>
                Name : {d.name.toUpperCase()} <br></br>
                Phone number : 0{d.phone} <br></br>
                <button className="smallbtn" onClick="removeDoctor()">
                    Remove
                </button>
                <br></br>
                <br></br>
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
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <a className="brand2" href="/">
                            {' '}
                           Log Out{' '}
                        </a>
                    </div>
                </header>
                <main className="profile">
                    <div className="row center">
                        <br></br>
                        <br></br>
                        <div className="rows2">
                            <Link to="/registerdoctor" className="btn4">
                                + Add New Doctor
                            </Link>
                        </div>

                        <div className="scrollbox3">
                            <ul className="ul-first">
                                {listItems}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
