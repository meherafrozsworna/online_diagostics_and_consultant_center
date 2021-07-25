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
            id: this.props.match.params,
        };
        axios
            .post('http://localhost:5000/admin/appointment' , data)
            .then((response) => {
                console.log('BBBBBBBBBBBBB');
                this.setState({
                    pId: response.data.patientId,
                    patientName: response.data.patientName,
                    dId: response.data.doctorId,
                    dname: response.data.doctorName,
                });

                /*axios
                    .get(
                        'http://localhost:5000/doctor' + response.data.doctorId
                    )
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
                    });*/
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('File uploading ');
        const data = new FormData();
        //data.append('file', this.state.selectedFile);

        console.log(this.props.match.params.id);
        const object = {
            patientId: this.props.match.params.patientid,
            zoomLink: this.state.zoomLink,
            patientName: this.state.patientName,
        };

        //   /fileupload/:formid/patient/:patientid
        axios
            .post('http://localhost:5000/report/addReport', data)
            .then((res) => {
                console.log(res.data);
                const id = res.data._id;
                console.log(id);

                axios
                    .post(
                        'http://localhost:5000/report/' +
                            id +
                            '/setThepatientId',
                        object
                    )
                    .then((res) => console.log('done'))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

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
