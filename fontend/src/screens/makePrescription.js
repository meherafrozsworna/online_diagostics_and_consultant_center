import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class TestForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
        };
    }
    async componentDidMount() {
        const data = {
            _id: this.props.match.params.id,
        };
        axios
            .post('http://localhost:5000/patient/getpatient', data)
            .then((res) => {
                console.log('BBBBBBBB');
                console.log(res.data);
                this.setState({
                    id: res.data._id,
                    name: res.data.name,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }
    onChangeFileHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            //loaded: 0,
        });
    };

    /*onClickUploadHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post('http://localhost:5000/upload', data, {
            // receive two    parameter endpoint url ,form data
        });
    };
*/
    onSubmit(e) {
        e.preventDefault();
        console.log('File uploading ');
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        console.log(this.props.match.params.id);
        const object = {
            


            patientId: this.props.match.params.id,
            patientName: this.state.name,
            //doctorName: req.body.doctorName,
        };

        //   /fileupload/:formid/patient/:patientid
        axios
            .post('http://localhost:5000/prescription/addPrescription', data)
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
                        <a className="brand" href="/doctor">
                            Home
                        </a>
                    </div>
                    <div>
                        <Link to="/">Log Out{'  '}</Link>
                    </div>
                </header>

                <main className="testform">
                    <div>
                        <h1 id="title">Prescription</h1>
                        <div id="container">
                            <form id="survey-form" onSubmit={this.onSubmit}>
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Patient ID"
                                            id="id"
                                            className="text-input"
                                            value={
                                                'Patient ID : ' + this.state.id
                                            }
                                            onChange={this.onChangeID}
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Name of Patient"
                                            id="name"
                                            className="text-input"
                                            value={
                                                'Patient Name : ' +
                                                this.state.name
                                            }
                                            onChange={this.onChangeName}
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <br></br>Add A Scanned Prescription File:
                                    <br></br>
                                    <div class="box__input">
                                        <br></br>
                                        <input
                                            type="file"
                                            name="file"
                                            //onChange={this.onChangeFileHandler}
                                        />
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>

                                <div class="rows" id="submit-button">
                                    <button type="submit" id="submit">
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
