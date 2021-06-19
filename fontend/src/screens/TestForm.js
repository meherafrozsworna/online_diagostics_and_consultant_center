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
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePrefGender = this.onChangePrefGender.bind(this);
        this.onChangePrefTime = this.onChangePrefTime.bind(this);
        this.checkClick = this.checkClick.bind(this);
        this.onChangeRefDoctor = this.onChangeRefDoctor.bind(this);
        this.onChangeInstructions = this.onChangeInstructions.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            age: null,
            gender: '',
            location: '',
            address: '',
            prefGender: '',
            prefTime: null,
            checkedTestNames: [],
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
            refDoctor: '',
            instructions: '',
            date: null,
            payment: '',
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
    onChangeLocation(e) {
        this.setState({
            location: e.target.value,
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }
    onChangePrefGender(e) {
        this.setState({
            prefGen: e.target.value,
        });
    }
    onChangePrefTime(e) {
        this.setState({
            prefTime: e.target.value,
        });
    }
    onChangeRefDoctor(e) {
        this.setState({
            refDoctor: e.target.value,
        });
    }
    onChangeInstructions(e) {
        this.setState({
            instructions: e.target.value,
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }
    onChangePayment(e) {
        this.setState({
            payment: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const testdata = {
            patientName: this.state.name,
            number: this.state.numeber,
            age: this.state.age,
            gender: this.state.gender,
            location: this.state.location,
            address: this.state.address,
            prefGender: this.state.prefGender,
            prefTime: this.state.prefTime,
            checkedTestNames: this.state.checkedTestNames,
            refDoctor: this.state.refDoctor,
            instructions: this.state.instructions,
            date: this.state.date,
            payment: this.state.payment,
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

        window.location = '/patienthome';
    }

    render() {
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">
                            Home
                        </a>
                    </div>
                </header>

                <main>
                    <div>
                        <h1 id="title">Sample Collection Form</h1>
                        <div id="container">
                            <p id="description">
                                Please fill up this form with the information of
                                the person whose sample will be collected.
                            </p>
                            <form id="survey-form" onSubmit={this.onSubmit}>
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
                                    <div
                                        classNme="input"
                                        onChange={this.onChangeLocation}
                                    >
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
                                            <option value="Mirpur">
                                                Mirpur
                                            </option>
                                            <option value="Uttara">
                                                UttaraMirpur
                                            </option>
                                            <option value="Ramna">Ramna</option>
                                            <option value="Azimpur">
                                                zimpur
                                            </option>
                                            <option value="Rampura">
                                                Rampura
                                            </option>
                                            <option value="Khilgaon">
                                                Khilgaon
                                            </option>
                                            <option value="Farmgate">
                                                Farmgate
                                            </option>
                                            <option value="Gulshan">
                                                Gulshan
                                            </option>
                                            <option value="Banani">
                                                Banani
                                            </option>
                                            <option value="Badda">Badda</option>
                                            <option value="Cantonment">
                                                Cantonment
                                            </option>
                                            <option value="Bashabo">
                                                Bashabo
                                            </option>
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

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Address of Sample Collection"
                                            id="address"
                                            className="text-input"
                                            required
                                            value={this.state.address}
                                            onChange={this.onChangeAddress}
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="labels" id="radio-label">
                                        <label>
                                            Preferred Gender of Sample
                                            Collector:
                                        </label>
                                    </div>
                                    <div
                                        class="input"
                                        onChange={this.onChangePrefGender}
                                    >
                                        <input
                                            type="radio"
                                            name="cgender"
                                            value="male"
                                            id="male"
                                        />
                                        <label for="male">Male</label>
                                        <br></br>
                                        <input
                                            type="radio"
                                            name="cgender"
                                            value="female"
                                            id="female"
                                        />
                                        <label for="female">Female</label>
                                        <br></br>
                                        <input
                                            type="radio"
                                            name="cgender"
                                            value="any"
                                            id="any"
                                        />
                                        <label for="any">Any</label>
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="labels" id="radio-label">
                                        <label>Preferred Time:</label>
                                    </div>
                                    <div
                                        class="input"
                                        onChange={this.onChangePrefTime}
                                    >
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

                                <div class="rows">
                                    <div class="labels" id="checkboxes-label">
                                        <label>Required Tests:</label>
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
                                            placeholder="Name of Referring Doctor (If Any)"
                                            id="referringdoctor"
                                            className="text-input"
                                            value={this.state.refDoctor}
                                            onChange={this.onChangeRefDoctor}
                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <textarea
                                            id="text-area"
                                            placeholder="Instructions (If Any)"
                                            value={this.state.instructions}
                                            onChange={this.onChangeInstructions}
                                        ></textarea>
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
                                            id="casdh"
                                        />
                                        Cash to the Sample Collector<br></br>
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

                                <div class="rows">Payment amount : 500</div>
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
