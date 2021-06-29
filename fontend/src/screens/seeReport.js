import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            testList: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/report/' + this.props.match.params.id)
            .then((response) => {
                console.log(response.data[0]);
                console.log(response.data[0].testList);
                this.setState({
                    name: response.data[0].patientName,
                    testList: response.data[0].testList,
                });
                console.log('AAAAAAAAAAAAAAAA');
                console.log(this.state.name);
                console.log(this.state.testList);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.testList.map((d) => <li> {d}</li>);
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/patienthome/:id">
                            Home
                        </a>
                    </div>
                </header>

                <main className="lab" style={{ fontSize: 21 }}>
                    <br></br>
                    <div className="row center">
                        <h2> Test Report </h2>

                        <div id="container">
                            <br></br>Patient Name : {this.state.name}
                            <br></br>Reported Test: {listItems}
                            <br></br>
                            <br></br>
                            <a
                                href="https://drive.google.com/file/d/16ydAvrZ5lAYdcCAkj4j_ygulse_l1vqP/view"
                                target="_blank"
                                download
                            >
                                <h6>View / Download</h6>{' '}
                            </a>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
