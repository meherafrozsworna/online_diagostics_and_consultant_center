import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeZoomlink = this.onChangeZoomlink.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCurrentInstitution = this.onChangeCurrentInstitution.bind(
            this
        );
        this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
        //this.onChangeSchedule = this.onChangeSchedule.bind(this);
        this.checkClick = this.checkClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: 'Dr Afzal Khan',
            degree: 'MBBS(DMC), DTCD(RMC), FCPS',
            currentInstitution: 'Dhaka Medical College',
            specialization: 'Cardiology',
            schedule: [],

            email: 'akhan47@gmail.com',
            phone: '01992123456',
            gender: 'Male',
            zoomlink: '',
        };
    }

    async componentDidMount() {
        axios
            .get('http://localhost:5000/doctor/home', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((response) => {
                //let obj = await response.data;
                console.log('AAAAAA');
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    phone: response.data.phone,
                    email: response.data.email,
                    specialization: response.data.specialization,
                    degree: response.data.degree,
                    currentInstitution: response.data.currentInstitution,
                    gender: response.data.gender,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    checkClick = (e) => {
        var { value, checked } = e.target;
        console.log(e.target);

        if (checked) {
            let sch = this.state.schedule.concat(value);
            this.setState({
                schedule: sch,
            });
            console.log(this.state.schedule);
        } else {
            let sch = this.state.schedule;
            sch = sch.filter((e) => e != value);
            this.setState({
                schedule: sch,
            });
            console.log(this.state.schedule);
        }
    };

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeZoomlink(e) {
        this.setState({
            zoomlink: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeDegree(e) {
        this.setState({
            degree: e.target.value,
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value,
        });
    }

    onChangeSpecialization(e) {
        this.setState({
            specialization: e.target.value,
        });
    }
    onChangeCurrentInstitution(e) {
        this.setState({
            currentInstitution: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const doctor = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            degree: this.state.degree,
            gender: this.state.gender,
            specialization: this.state.specialization,
            schedule: this.state.schedule,
            currentInstitution: this.state.currentInstitution,
            zoomlink: this.state.zoomlink,
        };

        console.log(doctor);

        axios
            .put('http://localhost:5000/doctor/edit', doctor, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log(res.data);
            });

        window.location = '/doctor';
    }

    render() {
        return (
            <div className="profile">
                <header className="row">
                    <div>
                        <a className="brand" href="/doctor">
                            Home
                        </a>
                    </div>
                </header>
                <main className="profile" style={{ fontSize: 21 }}>
                    <br></br>
                    <div className="row center">
                        <h2 style={{ marginBottom: '30px' }}>
                            {' '}
                            Edit Doctor Profile
                        </h2>
                        <br></br>
                        <br></br>

                        <div className="detail-box">
                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.name}
                                        id="name"
                                        className="text-input"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                            </div>

                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="email"
                                        placeholder={this.state.email}
                                        id="email"
                                        className="text-input"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>

                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.phone}
                                        id="name"
                                        className="text-input"
                                        value={this.state.phone}
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                            </div>

                            <div class="rows2">
                                <div
                                    classNme="input"
                                    onChange={this.onChangeGender}
                                >
                                    <select id="dropdown">
                                        <option value="Gender">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">
                                            Transgender
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="rows">
                                <div class="input">
                                    <label>Degrees:</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        placeholder={this.state.degree}
                                        id="name"
                                        className="text-input"
                                        value={this.state.degree}
                                        onChange={this.onChangeDegree}
                                    />
                                </div>
                            </div>

                            <div class="rows2">
                                <div
                                    classNme="input"
                                    onChange={this.onChangeCurrentInstitution}
                                >
                                    <select id="dropdown">
                                        <option value="current">
                                            Institution
                                        </option>
                                        <option value="dmc">
                                            Dhaka Medical College
                                        </option>
                                        <option value="smc">
                                            Salimullah Medical College
                                        </option>
                                        <option value="bsmmu">BSMMU</option>
                                        <option value="birdem">BIRDEM</option>
                                        <option value="labaid">LABAID</option>
                                        <option value="hf">
                                            Holy Family Red Crescent Hospital
                                        </option>
                                        <option value="shl">
                                            Square Hospital Ltd
                                        </option>
                                        <option value="ahl">
                                            Apollo Hospital Ltd
                                        </option>
                                        <option value="bmch">
                                            BRB Medical College And Hospital
                                        </option>
                                        <option value="nimc">
                                            Kurmitola Gov. Hospital
                                        </option>
                                        <option value="nimc">
                                            Southeast International Medical
                                            College
                                        </option>
                                        <option value="cancer">
                                            Specailized Cancer Center
                                        </option>
                                        <option value="nimc">
                                            Insaf Barakah Hospital
                                        </option>
                                        <option value="nimc">
                                            Popular Medical Institute
                                        </option>
                                        <option value="nimc">
                                            Bangladesh National Hospital
                                        </option>
                                        <option value="nimc">
                                            Uttara Medical College And Hospital
                                        </option>
                                        <option value="other">Other</option>
                                        <option value="retired">Retired</option>
                                    </select>
                                </div>
                            </div>

                            <div class="rows2">
                                <div
                                    classNme="input"
                                    onChange={this.onChangeSpecialization}
                                >
                                    <select id="dropdown">
                                        <option value="current">
                                            Field of Specialization
                                        </option>

                                        <option value="Medicine">
                                            Medicine
                                        </option>
                                        <option value="Cardiology">
                                            Cardiology
                                        </option>
                                        <option value="Gynecology">
                                            Gynecology
                                        </option>
                                        <option value="Skin_And_VD">
                                            Skin And VD
                                        </option>
                                        <option value="Nephrology">
                                            Nephrology
                                        </option>
                                        <option value="Radiology">
                                            Radiology
                                        </option>
                                        <option value="Diabetics">
                                            Diabetics
                                        </option>
                                        <option value="Eye">Eye</option>
                                        <option value="ENT">
                                            Ear, Nose, Throat (ENT)
                                        </option>
                                        <option value="Respiratory">
                                            Respiratory
                                        </option>
                                        <option value="Gastroenterology">
                                            Gastroenterology
                                        </option>
                                        <option value="Surgery">Surgery</option>
                                        <option value="Cosmetic_Surgery">
                                            Cosmetic_Surgery
                                        </option>
                                        <option value="Hormone_And_Endocrinology">
                                            Hormone And Endocrine
                                        </option>
                                        <option value="Psychiatry">
                                            Psychiatry
                                        </option>

                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <br></br>
                            </div>

                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder="Zoom Link"
                                        id="zoomlink"
                                        className="text-input"
                                        value={this.state.zoomlink}
                                        onChange={this.onChangeZoomlink}
                                    />
                                </div>
                            </div>

                            <br></br>

                            <div class="rows">
                                <div
                                    id="list1"
                                    class="dropdown-check-list"
                                    tabindex="100"
                                >
                                    <span class="anchor">
                                        Select Available Slots (weekly)
                                    </span>
                                    <ul class="items">
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Sunday 5-6pm"
                                                onChange={this.checkClick}
                                            />
                                            Sunday 5-6pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Sunday 6-7pm"
                                                onChange={this.checkClick}
                                            />
                                            Sunday 6-7pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Sunday 7-8pm"
                                                onChange={this.checkClick}
                                            />
                                            Sunday 7-8pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Sunday 8-9pm"
                                                onChange={this.checkClick}
                                            />
                                            Sunday 8-9pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Sunday 9-10pm"
                                                onChange={this.checkClick}
                                            />
                                            Sunday 9-10pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Monday 5-6pm"
                                                onChange={this.checkClick}
                                            />
                                            Monday 5-6pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Monday 6-7pm"
                                                onChange={this.checkClick}
                                            />
                                            Monday 6-7pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Monday 7-8pm"
                                                onChange={this.checkClick}
                                            />
                                            Monday 7-8pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Monday 8-9pm"
                                                onChange={this.checkClick}
                                            />
                                            Monday 8-9pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Monday 9-10pm"
                                                onChange={this.checkClick}
                                            />
                                            Monday 9-10pm
                                        </li>

                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Tuesday 5-6pm"
                                                onChange={this.checkClick}
                                            />
                                            Tuesday 5-6pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Tuesday 6-7pm"
                                                onChange={this.checkClick}
                                            />
                                            Tuesday 6-7pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Tuesday 7-8pm"
                                                onChange={this.checkClick}
                                            />
                                            Tuesday 7-8pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Tuesday 8-9pm"
                                                onChange={this.checkClick}
                                            />
                                            Tuesday 8-9pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Tuesday 9-10pm"
                                                onChange={this.checkClick}
                                            />
                                            Tuesday 9-10pm
                                        </li>

                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Wednesday 5-6pm"
                                                onChange={this.checkClick}
                                            />
                                            Wednesday 5-6pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Wednesday 6-7pm"
                                                onChange={this.checkClick}
                                            />
                                            Wednesday 6-7pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Wednesday 7-8pm"
                                                onChange={this.checkClick}
                                            />
                                            Wednesday 7-8pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Wednesday 8-9pm"
                                                onChange={this.checkClick}
                                            />
                                            Wednesday 8-9pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Wednesday 9-10pm"
                                                onChange={this.checkClick}
                                            />
                                            Wednesday 9-10pm
                                        </li>

                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Thursday 5-6pm"
                                                onChange={this.checkClick}
                                            />
                                            Thursday 5-6pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Thursday 6-7pm"
                                                onChange={this.checkClick}
                                            />
                                            Thursday 6-7pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Thursday 7-8pm"
                                                onChange={this.checkClick}
                                            />
                                            Thursday 7-8pm{' '}
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Thursday 8-9pm"
                                                onChange={this.checkClick}
                                            />
                                            Thursday 8-9pm
                                        </li>
                                        <li>
                                            <input
                                                type="checkbox"
                                                value="Thursday9-10pm"
                                                onChange={this.checkClick}
                                            />
                                            Thursday 9-10pm
                                        </li>
                                    </ul>
                                </div>
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
                    </div>
                </main>
            </div>
        );
    }
}
