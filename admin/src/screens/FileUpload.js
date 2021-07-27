import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class TestForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
        //this.onClickUploadHandler = this.onClickUploadHandler.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            selectedFile: null,
            pId: null,
            patientName: null,
            testList: [],
        };
    }

    componentDidMount() {
        const object = {
            formid: this.props.match.params.formid,
        };

        axios
            .post('http://localhost:5000/admin/test_by_Id', object, {
                headers: {
                    'x-access-token': localStorage.getItem('admintoken'),
                },
            })
            .then((response) => {
                console.log("report e dhuksee...");
                console.log(response.data);
                this.setState({
                    pId: response.data.patientId,
                    patientName: response.data.patientName,
                    testList: response.data.testName,
                });
                console.log('this.state.patientName');
                console.log(this.state.patientName);
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

        console.log(this.props.match.params.patientid);
        const object = {
            patientId: this.props.match.params.patientid,
            testList: this.state.testList,
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
                        <h1 id="title">Make A Test Report</h1>
                        <div id="container">
                            <p id="description">
                                Please fill up this form with the reported
                                information of the tested patient.
                            </p>
                            <form id="survey-form" onSubmit={this.onSubmit}>
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Report Name"
                                            id="name"
                                            className="text-input"
                                            value={
                                                ' FORM ID :  ' + this.state.pId
                                            }
                                        />
                                    </div>
                                </div>
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Report Name"
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
                                            placeholder="Report Name"
                                            id="name"
                                            className="text-input"
                                            value={
                                                ' TESTS  :  ' +
                                                this.state.testList
                                            }
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="box__input">
                                        <br></br>
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={this.onChangeFileHandler}
                                        />
                                        <br></br>
                                        <br></br>
                                        {/*<button
                                            class="box__button"
                                            type="submit"
                                            onClick={this.onClickHandler}
                                        >
                                            Upload
                                        </button>
                                        */}
                                    </div>
                                </div>

                                <div class="rows" id="submit-button">
                                    <button
                                        type="submit"
                                        id="submit"
                                        onClick={this.onSubmit}
                                    >
                                        Upload
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
