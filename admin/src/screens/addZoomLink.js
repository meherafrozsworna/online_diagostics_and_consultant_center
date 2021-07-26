import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class TestForm extends Component {
    constructor(props) {
        super(props);

        //this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
        //this.onClickUploadHandler = this.onClickUploadHandler.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            zoomLink: '',
            pId: null,
            patientName: '',
            dId: null,
            dname: '',
            //testList: [],
        };
    }

    componentDidMount() {
        const data = {
            _id: this.props.match.params.id,
        };
        axios
            .post('http://localhost:5000/admin/getAppointment', data)
            .then((response) => {
                console.log('BBBBBBBBBBBBB');
                this.setState({
                    pId: response.data.patientId,
                    patientName: response.data.patientName,
                    dId: response.data.doctorId,
                    dname: response.data.doctorName,
                });

                const doctor = {
                    _id: response.data.doctorId,
                };
                axios
                    .post('http://localhost:5000/doctor/getdoctor', doctor)
                    .then((res) => {
                        console.log('XXXXXXXXXXXXX');
                        console.log(res.data.zoomlink);
                        this.setState({
                            zoomLink: res.data.zoomlink,
                        });
                    })
                    .catch(function (error) {
                        console.log('error');
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {
            _id: this.props.match.params.id,
        };
        axios
            .post('http://localhost:5000/admin/sendZoomlink', data)
            .then((res) => {
                console.log('ZZZZZZZZZZZ');
                console.log(res.data);
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });

        window.location = '/adminhome';
    }

    render() {
        return (
            <div className="grid-container">
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

                <main className="lab">
                    <div>
                        <h1 id="title">Add Appointment Link</h1>
                        <div id="container">
                            <p id="description">
                                Please fill up this form with the doctor's
                                appointment Link for the patient.
                            </p>
                            <form id="survey-form" onSubmit={this.onSubmit}>
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Patient Name"
                                            id="name"
                                            className="text-input"
                                            value={
                                                ' PATIENT NAME :  ' +
                                                this.state.patientName
                                            }
                                        />
                                    </div>
                                </div>
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Zoom Link"
                                            id="name"
                                            className="text-input"
                                            value={
                                                ' ZOOM APPOINTMENT LINK :  ' +
                                                this.state.zoomLink
                                            }
                                        />
                                    </div>
                                </div>

                                <div class="rows" id="submit-button">
                                    <button
                                        type="submit"
                                        id="submit"
                                        onClick={this.onSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
