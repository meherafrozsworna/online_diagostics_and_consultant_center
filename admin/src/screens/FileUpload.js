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
        this.onChangeDetails = this.onChangeDetails.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            number: '',
            age: null,
            gender: '',
            testName: {
                Bloodgrouping: false,
                T3Test: false,
                T4Test: false,
                UrineTest: false,
                HaemoglobinLevel: false,
                BloodSugarLevel: false,
                InsulinLevel: false,
                PlateletLevel: false,
                BloodChemistry: false,
                SalivaTest: false,
                TransfuseTest: false,
                PapSmear: false,
                LymphTest: false,
                BloodSugar: false,
            },
            details: '',
            date: null,
        };
    }

    checkClick = (e) => {
        var { value, checked } = e.target;
        console.log('muri kha ');
        console.log(e.target);

        if (checked) {
            let tests = this.state.checkedTestNames.concat(value);
            this.setState({
                checkedTestNames: tests,
            });
            console.log(this.state.checkedTestNames);
        } else {
            let tests = this.state.checkedTestNames;
            tests = tests.filter((e) => e != value);
            this.setState({
                checkedTestNames: tests,
            });
            console.log('else e ashche...');
            console.log(this.state.checkedTestNames);
        }
    };

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
    onChangeDetails(e) {
        this.setState({
            details: e.target.value,
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
            details: this.state.details,
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
                </header>

                <main className="lab">
                    <div>
                        <h1 id="title">Make A Test Report</h1>
                        <div id="container">
                            <p id="description">
                                Please fill up this form with the reported information of the tested patient.
                            </p>
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
                                    <div class="labels" id="checkboxes-label">
                                        <label>Reported Test:</label>
                                    </div>

                                    <div
                                        id="list1"
                                        class="dropdown-check-list"
                                        tabindex="100"
                                    >
                                        <span class="anchor">
                                            Select Test(s)
                                        </span>
                                        <ul class="items">
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Bloodgrouping"
                                                    onChange={this.checkClick}
                                                />
                                                Bloodgrouping{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="T3Test"
                                                    onChange={this.checkClick}
                                                />
                                                T3 Test
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="T4Test"
                                                    onChange={this.checkClick}
                                                />
                                                T4 Test{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="UrineTest"
                                                    onChange={this.checkClick}
                                                />
                                                Urine Test
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Haemoglobin"
                                                    onChange={this.checkClick}
                                                />
                                                Haemoglobin Level
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="BloodSugarLevel"
                                                    onChange={this.checkClick}
                                                />
                                                Blood Sugar Level
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="InsulinLevel"
                                                    onChange={this.checkClick}
                                                />
                                                Insulin Level
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="PlateletLevel"
                                                    onChange={this.checkClick}
                                                />
                                                Platelet Level
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="BloodChemistry"
                                                    onChange={this.checkClick}
                                                />
                                                Blood Chemistry
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="SalivaTest"
                                                    onChange={this.checkClick}
                                                />
                                                Saliva Test
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="TransfuseTest"
                                                    onChange={this.checkClick}
                                                />
                                                Transfuse Test
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="PapSmear"
                                                    onChange={this.checkClick}
                                                />
                                                Pap Smear
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="LymphTest"
                                                    onChange={this.checkClick}
                                                />
                                                Lymph Test
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="BloodSugar"
                                                    onChange={this.checkClick}
                                                />
                                                Blood Chemistry (Detailed)
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Test Result/Comments"
                                            id="details"
                                            className="text-input"
                                            value={this.state.details}
                                            onChange={this.onChangeDetails}
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="box__input">
                                        <br></br>
                                        <input type="file" name="file" onChange={this.onChangeHandler} />
                                        <br></br><br></br>
                                        <button class="box__button" type="submit" onClick={this.onClickHandler}>Upload</button>
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
