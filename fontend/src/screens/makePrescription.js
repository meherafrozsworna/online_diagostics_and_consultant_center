import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class TestForm extends Component {


    
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDiagnosis = this.onChangeDiagnosis.bind(this);
        this.onChangeMedicines = this.onChangeMedicines.bind(this);
        this.onChangeSuggestions = this.onChangeSuggestions.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            number: '',
            age: null,
            gender: '',
            diagnosis: '',
            medicines: '',
            suggestions: '',
            date: null,
        };
    }

    onChangeID(e) {
        this.setState({
            id: e.target.value,
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeNumber(e) {
        this.setState({
            number: e.target.value,
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value,
        });
    }

    onChangeGender(e) {
        this.setState({
            prefGender: e.target.value,
        });
    }
    onChangeDiagnosis(e) {
        this.setState({
            diagnosis: e.target.value,
        });
    }
    onChangeMedicines(e) {
        this.setState({
            medicines: e.target.value,
        });
    }
    onChangeSuggestions(e) {
        this.setState({
            suggestions: e.target.value,
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const testdata = {
            id: this.state.id,
            patientName: this.state.name,
            number: this.state.numeber,
            age: this.state.age,
            gender: this.state.gender,
            diagnosis: this.state.diagnosis,
            medicines: this.state.medicines,
            suggestions: this.state.suggestions,
            date: this.state.date,
        };

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

        window.location = '/doctor';
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
                                            value={this.state.id}
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
                                            value={this.state.name}
                                            onChange={this.onChangeName}
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="phone"
                                            placeholder="Phone number"
                                            id="phone"
                                            className="text-input"
                                            required
                                            value={this.state.number}
                                            onChange={this.onChangeNumber}
                                        />
                                    </div>
                                </div>
                                
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="number"
                                            placeholder="Age of Patient"
                                            min="1"
                                            max="100"
                                            id="number"
                                            class="text-input"
                                            required
                                            value={this.state.age}
                                            onChange={this.onChangeAge}
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div
                                        classNme="input"
                                        onChange={this.onChangeGender}
                                    >
                                        <select id="dropdown">
                                            <option>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                            <option value="transgender">
                                                Transgender
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Diagnosis"
                                            id="details"
                                            className="text-input"
                                            value={this.state.diagnosis}
                                            onChange={this.onChangeDiagnosis}
                                        />
                                    </div>
                                </div>
                               

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Medicines"
                                            id="details"
                                            className="text-input"
                                            value={this.state.medicines}
                                            onChange={this.onChangeMedicines}
                                        />
                                    </div>
                                </div>
                                
                                
                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Suggestions/Comments"
                                            id="details"
                                            className="text-input"
                                            value={this.state.suggestions}
                                            onChange={this.onChangeSuggestions}
                                        />
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
