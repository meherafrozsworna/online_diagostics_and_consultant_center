import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBloodgroup = this.onChangeBloodgroup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: 'adiba',
            email: 'adiba@gmail.com',
            phone: '01992123456',
            age: 23,
            gender: 'Female',
            address: 'Khilgaon Dhaka',
            bloodgroup: 'B+',
        };
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value,
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value,
        });
    }
  
    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }
    onChangeBloodgroup(e) {
        this.setState({
            bloodgroup: e.target.value,
        });
    }

    

    onSubmit(e) {
        e.preventDefault();

        const testdata = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            age: this.state.age,
            gender: this.state.gender,
            address: this.state.address,
            bloodgroup: this.state.bloodgroup,
                       
        };

        /*
        console.log(testdata);

        axios
            .post('http://localhost:5000/patient/testform/submit', testdata, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log(res.data);

                axios
                    .post(
                        'http://localhost:5000/admin/addPendingTest',
                        res.data
                    )
                    .then((response) => {
                        console.log(response.data);
                    });
            });
            */

        window.location = '/patienthome';
    }

    

    render() {
        return (
            <div className="profile">

                <header className="row">
                    <div>
                        <a className="brand" href="/patienthome">
                            Home
                        </a>
                    </div>
                            <div>
                    <Link to="/">Log Out{'  '}</Link>
                </div>
                </header>
                <main
                    className="profile"
                    style={{ fontSize: 21 }}
                >
                    <br></br>
                    <div className="row center">

                        <h2  style={{marginBottom:"30px"}}> Edit Profile Information</h2>
                        <br></br><br></br>

                        <div className="detail-box">


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.name}
                                        id="name"
                                        className="text-input"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                            </div>


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="email"
                                        placeholder={this.state.email}
                                        id="email"
                                        className="text-input"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.phone}
                                        id="name"
                                        className="text-input"
                                        value={this.state.phone}
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                            </div>

                            <div class="rows">
                                    <div class="input">
                                        <input
                                            type="number"
                                            placeholder={this.state.age}
                                            min="1"
                                            max="100"
                                            id="number"
                                            class="text-input"
                                            value={this.state.age}
                                            onChange={this.onChangeAge}
                                        />
                                    </div>
                                </div>

                                <div class="rows2">
                                <div classNme="input" onChange={this.onChangeGender} >
                                    <select id="dropdown">
                                        <option value="Gender">
                                            Gender
                                        </option>
                                        <option value="Male">
                                            Male
                                        </option>
                                        <option value="Female">
                                            Female
                                        </option>
                                        <option value="Transgender">
                                            Transgender
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>
                                </div>
                            </div>

                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.address}
                                        id="name"
                                        className="text-input"
                                        value={this.state.address}
                                        onChange={this.onChangeAddress}
                                       
                                    />
                                </div>
                            </div>

                          

                            <div class="rows2">
                                <div classNme="input"  onChange={this.onChangeBloodgroup} >
                                    <select id="dropdown">
                                        <option value="bloodgroup">
                                            Blood Group
                                        </option>
                                        <option value="A+">
                                            A+
                                        </option>
                                        <option value="A-">
                                            A-
                                        </option>
                                        <option value="B+">
                                            B+
                                        </option>
                                        <option value="B-">
                                            B-
                                        </option>
                                        <option value="AB+">
                                            B+
                                        </option>
                                        <option value="AB-">
                                            B-
                                        </option>
                                        <option value="O+">
                                            B+
                                        </option>
                                        <option value="O-">
                                            B-
                                        </option>

                                    </select>
                                </div>
                            </div>

                           

                        </div>

                        <div class="rows" id="submit-button">
                                    <button type="submit" id="submit">
                                        Submit
                                    </button>
                                </div>
                    </div>
                </main>
            </div>
        );
    }
}
