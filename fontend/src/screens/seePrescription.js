import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            name: '',
            age: null,
            gender: '',
            diagnosis: '',
            medicines:'',
            suggestions: '',
            date: null,
            id: '',
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
                    age: response.data.age,
                    gender: response.data.gender,
                    diagnosis: response.data.diagnosis,
                    suggestions: response.data.suggestions,
                    medicines:  response.data.medicines,
                    date: response.data.date,
                    id: response.data._id,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get('http://localhost:5000/users/')
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map((user) => user.username),
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return (
            <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/patienthome/:id">
                        Home
                    </a>
                </div>
            </header>

                <main
                    className="lab"
                    style={{ fontSize: 21 }}
                >
                    <br></br>
                    <div className="row center">

                        <h2> Doctor's Prescription</h2>

                        <div id="container">
                            <br></br>Patient ID : {this.state.id}
                            <br></br>Patient Name : {this.state.name}
                            <br></br>Patient Age : {this.state.age}
                            <br></br>Patient Gender : {this.state.gender}
                            <br></br>Date : {this.state.date}
                            <br></br>Diagnosis: {this.state.diagnosis}
                            <br></br>Medicines: {this.state.medicines}
                            <br></br><br></br>Suggestions/Comments : {this.state.suggestions}
                           
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
