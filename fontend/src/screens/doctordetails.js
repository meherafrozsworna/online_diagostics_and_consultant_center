import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class ChooseDoctor extends Component {
    constructor(props) {
        super(props);
        this.BookAppointment = this.BookAppointment.bind(this);
        this.state = {
            name: '',
            currentInstitution: '',
            degree: '',
            specialization: '',
            gender: '',
        };
    }

    async componentDidMount() {
        axios
            .get('http://localhost:5000/doctor/' + this.props.match.params.id)
            .then((response) => {
                //let obj = await response.data;
                console.log('AAAAAA');
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    currentInstitution: response.data.currentInstitution,
                    degree: response.data.degree,
                    specialization: response.data.specialization,
                    gender: response.data.gender,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    BookAppointment(e)
    {
        e.preventDefault();
        /addAppointment/:id

        axios
            .put('http://localhost:5000/patient/addAppointment/'+
             this.props.match.params.id, testdata, {
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

        window.location = '/patienthome';
    }
    render() {
        return (
            <div className="profile2">
                <header className="row">
                    <div>
                        <a className="brand" href="/patienthome/:id">
                            Home
                        </a>
                    </div>
                    <div>
                        <Link to="/">Log Out{'  '}</Link>
                    </div>
                </header>

                <main className="about">
                    <div className="row center">
                        <div className="grid-container1">
                            <div class="grid-item">
                                <div class="card2">
                                    {this.state.gender.localeCompare(
                                        'Female'
                                    ) == 0 ? (
                                        <img
                                            src="https://st2.depositphotos.com/3889193/8319/i/600/depositphotos_83195332-stock-photo-smiling-female-doctor-holding-medical.jpg"
                                            alt={this.state.name}
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        <img
                                            src="http://hellojivan.com/assets/websites/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt={this.state.name}
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                    <h3>{this.state.name}</h3>
                                    <p class="title">
                                        Specialization At :
                                        {this.state.specialization}
                                        <br></br>
                                        {this.state.currentInstitution}
                                        <br></br>
                                        {this.state.degree}
                                    </p>
                                </div>
                            </div>

                            <div class="grid-item">
                                <div class="card3">
                                    <p>
                                        {' '}
                                        <h2>Available Time Slots</h2>
                                    </p>

                                    <div class="rows">
                                        <div
                                            classNme="input"
                                            //onChange={this.onChangeGender}
                                        >
                                            <select id="dropdown">
                                                <option>Time Slot</option>
                                                <option value="a1">
                                                    Thursday 1/7/21: 8pm-8:30pm
                                                </option>
                                                <option value="a2">
                                                    Thursday 1/7/21: 8:30pm-9pm
                                                </option>
                                                <option value="a3">
                                                    Sunday 4/7/21: 6pm-6:30pm
                                                </option>
                                                <option value="a4">
                                                    Moday 1/7/21: 6:30pm-7pm
                                                </option>
                                                <option value="a4">
                                                    Moday 1/7/21: 6:30pm-7pm
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="rows">
                                        <div class="labels" id="radio-label">
                                            <label>Payment Method:</label>
                                        </div>
                                        <div
                                            class="input"
                                            onChange={this.onChangePayment}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="cash"
                                                id="cash"
                                            />
                                            Cash on Visit<br></br>
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="bkash"
                                                id="bkash"
                                            />
                                            Bkash<br></br>
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="rocket"
                                                id="rocket"
                                            />
                                            Rocket<br></br>
                                        </div>
                                    </div>

                                    <div class="rows">
                                        Payment amount : 1000
                                    </div>

                                    <div class="rows" id="submit-button">
                                        <button
                                            type="submit"
                                            className="book_btn"
                                            onClick= "BookAppointment"
                                        >
                                            {' '}
                                            Book Appointment{' '}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
