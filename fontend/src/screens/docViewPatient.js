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
            reportList: [],
        };
    }

    async componentDidMount() {
        //this.getTodos();
        //console.log('BBBBBBBBBBB');
        const data = {
            _id: this.props.match.params.id,
        };
        axios
            .post('http://localhost:5000/patient/getpatient',data)
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
        axios
            .get('http://localhost:5000/patient/reportList', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                //let obj = await response.data;
                console.log(response.data);
                this.setState({
                    reportList: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.reportList.map((d) => (
            <li>
                <a href={'/seereport/' + d._id} target="_blank">
                    <h3>
                        {d.patientName}
                        <br></br>
                        06-30-2021 <br></br>
                    </h3>
                    {d.testList.map((item, i) => (
                        <li key={i}> {item}</li>
                    ))}
                </a>
            </li>
        ));

        return (
            <div className="profile">
                <header className="row">
                    <div>
                        <a className="brand" href="/doctor">
                            Home
                        </a>
                    </div>
                    <div>
                        <Link to={'/makepres/' + this.props.match.params.id}>
                            + Add Prescription{'  '}
                        </Link>
                        <Link to="/">Log Out{'  '}</Link>
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

                                <div className="detail-box2">
                                    <ul className="ul-first">
                                        <li>Name : {this.state.name}</li>
                                        <li>Gender : {this.state.gender}</li>
                                        <li>Age : {this.state.age}</li>
                                        <li>Phone: {this.state.phone}</li>
                                        <li>Email : {this.state.email}</li>
                                        <li>Address : {this.state.address}</li>
                                        <li>
                                            Blood Group :{' '}
                                            {this.state.bloodGroup}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="scrollbox22">
                                <ul style={{ listStyle: 'none' }}>
                                    <h2> Reports</h2>
                                    {listItems}
                                </ul>
                            </div>
                        </div>

                        <div className="column3">
                            <br></br>
                            <div className="scrollbox22">
                                <ul style={{ listStyle: 'none' }}>
                                    <h2> Prescriptions</h2>

                                    <li>
                                        <a href="/seepres" target="_blank">
                                            <h3>
                                                Dr. Afzal Prescription<br></br>
                                                Cardiology<br></br>
                                                05-12-2020<br></br>{' '}
                                            </h3>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/seepres" target="_blank">
                                            <h3>
                                                Dr. Afzal Prescription<br></br>
                                                Cardiology<br></br>
                                                05-12-2020<br></br>{' '}
                                            </h3>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/seepres" target="_blank">
                                            <h3>
                                                Dr. Afzal Prescription<br></br>
                                                Cardiology<br></br>
                                                05-12-2020<br></br>{' '}
                                            </h3>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
