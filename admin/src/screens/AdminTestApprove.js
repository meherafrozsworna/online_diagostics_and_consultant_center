import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //id: '',

            name: '',
            number: null,
            age: '',
            gender: '',
            location: '',
            address: '',
            prefGender: '',
            prefTime: '',
            checkedTestNames: [],
            refDoctor: '',
            instructions: '',
            date: '',
            payment: '',
            id: '',
            sampleCollector: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                'http://localhost:5000/patient/testform/' +
                    this.props.match.params.id
            )
            .then((response) => {
                this.setState({
                    name: response.data.patientName,
                    number: response.data.phoneNumber,
                    age: response.data.age,
                    gender: response.data.gender,
                    location: response.data.location,
                    address: response.data.address,
                    prefGender: response.data.pref_gender,
                    prefTime: response.data.pref_time,
                    checkedTestNames: response.data.testName,
                    refDoctor: response.data.ref_doctor,
                    instructions: response.data.instructions,
                    date: response.data.date,
                    payment: response.data.payment,
                    id: response.data._id,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get('http://localhost:5000/sampleCollector/getAllsampleCollector')
            .then((response) => {
                console.log(response.data);
                this.setState({ sampleCollector: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeID(e) {
        this.setState({
            id: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const testdata = {
            id: this.state.id,
            _id: this.props.match.params.id,
        };

        console.log(testdata);

        axios
            .post('http://localhost:5000/sampleCollector/addTest', testdata)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));

        /*axios
            .post('http://localhost:5000/admin/deletePendingTest', testdata)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        */
        window.location = '/adminhome';
    }

    render() {
        const tests = this.state.checkedTestNames.map((d) => <li>{d}</li>);
        const listItems = this.state.sampleCollector.map((d) => (
            <option value={d._id}>{d.name}</option>
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
                    <div>
                        <Link to="/">Log Out{'  '}</Link>
                    </div>
                </header>
                <main className="profile" style={{ fontSize: 21 }}>
                    <br></br>
                    <div className="row center">
                        <h2> Test Form Information</h2>
                        <div className="detail-box">
                            <br></br>Test Form ID : {this.state.id}
                            <br></br>Patient Name : {this.state.name}
                            <br></br>Phone Number : 0{this.state.number}
                            <br></br>Patient Age : {this.state.age}
                            <br></br>Patient Gender : {this.state.gender}
                            <br></br>Location : {this.state.location}
                            <br></br>Address : {this.state.address}
                            <br></br>Preferred Gender of Sample Collector :{' '}
                            {this.state.prefGender}
                            <br></br>Referring Doctor : {this.state.refDoctor}
                            <br></br>Required Tests :<ol>{tests}</ol>
                            <br></br>Payment Amount : 500 Tk
                            <br></br>Payment Method : {this.state.payment}
                            <br></br>Payment Status : Unpaid
                            <br></br>Instructions : {this.state.instructions}
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>

                        <h2> Assign Sample Collector</h2>

                        <div className="detail-box">
                            <div class="rows2">
                                <div classNme="input">
                                    <select id="dropdown">
                                        <option value="Location of Collection">
                                            Location of Collection
                                        </option>
                                        <option value="Dhanmondi">
                                            Dhanmondi
                                        </option>
                                        <option value="Mohammadpur">
                                            Mohammadpur
                                        </option>
                                        <option value="Mirpur">Mirpur</option>
                                        <option value="Uttara">
                                            UttaraMirpur
                                        </option>
                                        <option value="Ramna">Ramna</option>
                                        <option value="Azimpur">zimpur</option>
                                        <option value="Rampura">Rampura</option>
                                        <option value="Khilgaon">
                                            Khilgaon
                                        </option>
                                        <option value="Farmgate">
                                            Farmgate
                                        </option>
                                        <option value="Gulshan">Gulshan</option>
                                        <option value="Banani">Banani</option>
                                        <option value="Badda">Badda</option>
                                        <option value="Cantonment">
                                            Cantonment
                                        </option>
                                        <option value="Bashabo">Bashabo</option>
                                        <option value="Old Dhaka">
                                            Old Dhaka
                                        </option>
                                        <option value="Keraniganj">
                                            Keraniganj
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="rows2">
                                <div class="labels" id="radio-label">
                                    <label>
                                        Preferred Gender of Sample Collector:
                                    </label>
                                </div>
                                <div class="input">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                    />
                                    <label for="male">Male</label>
                                    <br></br>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        id="female"
                                    />
                                    <label for="female">Female</label>
                                    <br></br>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="any"
                                        id="any"
                                    />
                                    <label for="any">Any</label>
                                </div>
                            </div>

                            <div class="rows2">
                                <div class="labels" id="radio-label">
                                    <label>Preferred Time:</label>
                                </div>
                                <div class="input">
                                    <input
                                        type="radio"
                                        name="time"
                                        value="morning"
                                        id="morning"
                                    />
                                    Morning<br></br>
                                    <input
                                        type="radio"
                                        name="time"
                                        value="afternoon"
                                        id="afternoon"
                                    />
                                    Afternoon<br></br>
                                    <input
                                        type="radio"
                                        name="time"
                                        value="night"
                                        id="night"
                                    />
                                    Night<br></br>
                                    <input
                                        type="radio"
                                        name="time"
                                        value="any"
                                        id="any"
                                    />
                                    Any<br></br>
                                </div>
                            </div>

                            <div class="rows2">
                                <br></br>
                                <br></br>
                                Choose A Sample Collector from the matching
                                options:
                            </div>

                            <div className="rows2">
                                <div
                                    className="input"
                                    onChange={this.onChangeID}
                                >
                                    <select id="dropdown">{listItems}</select>
                                </div>
                            </div>

                            <div class="rows2">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>

                            <div class="rows2">
                                <br></br>
                                <button
                                    className="primary"
                                    type="submit"
                                    onClick={this.onSubmit}
                                >
                                    {' '}
                                    Assign{' '}
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </main>
            </div>
        );
    }
}
