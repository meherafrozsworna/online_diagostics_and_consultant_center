import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class SigninScreen extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeCurrentInstitution = this.onChangeCurrentInstitution.bind(
            this
        );
        this.onChangeSpecialization = this.onChangeSpecialization.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: '',
            gender: '',
            //age: null,
            phone: null,
            email: '',
            degree: '',
            specialization: '',
            currentInstitution: '',
        };
    }

    // onChangeAge(e) {
    //     this.setState({
    //         age: e.target.value,
    //     });
    // }
    onChangeDegree(e) {
        this.setState({
            degree: e.target.value,
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
    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value,
        });
    }
    onChangeDegree(e) {
        this.setState({
            degree: e.target.value,
        });
    }
    onChangeInstitution(e) {
        this.setState({
            institution: e.target.value,
        });
    }
    onChangeSpecialization(e) {
        this.setState({
            specialization: e.target.value,
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const doctor = {
            name: this.state.name,
            password: this.state.password,
            gender: this.state.gender,
            degree: this.state.degree,
            currentInstitution: this.state.currentInstitution,
            specialization: this.state.specialization,
            phone: this.state.phone,
            email: this.state.email,
        };

        console.log('AAAAAAAAAA');
        console.log(doctor);

        axios.post('http://localhost:5000/doctor/add', doctor).then((res) => {
            console.log(res.data);
            axios
                .post('http://localhost:5000/admin/addDoctor', res.data)
                .then((res) => {
                    console.log(res.data);
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
                    <div>
                        <Link to="/">Log Out{'  '}</Link>
                    </div>
                </header>
                <main className="about">
                    <div>
                        <form className="form" onSubmit={this.onSubmit}>
                            <div>
                                <h1>Register A Doctor</h1>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className="specialborder"
                                    required
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="specialborder"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="gender"
                                    placeholder="Gender"
                                    className="specialborder"
                                    required
                                    value={this.state.gender}
                                    onChange={this.onChangeGender}
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="degree"
                                    placeholder="Degree"
                                    className="specialborder"
                                    required
                                    value={this.state.degree}
                                    onChange={this.onChangeDegree}
                                />
                            </div>

                            <div>
                                <div
                                    classNme="input2"
                                    //className="specialborder"
                                    onChange={this.onChangeSpecialization}
                                    placeholder="Specialization"
                                >
                                    <select id="dropdown2">
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
                                        <option value="Nephrology">
                                            Nephrology
                                        </option>
                                        <option value="Radiology">
                                            Radiology
                                        </option>
                                        <option value="Diabetics">
                                            Diabetics
                                        </option>
                                        <option value="Skin_And_VD">
                                            Skin And VD
                                        </option>
                                        <option value="Eye">Eye</option>

                                        <option value="ENT">
                                            Ear, Nose, Throat (ENT)
                                        </option>
                                        <option value="Gastroenterology">
                                            Gastroenterology
                                        </option>
                                        <option value="Respiratory">
                                            Respiratory
                                        </option>
                                        <option value="Surgery">Surgery</option>
                                        <option value="Cosmetic_Surgery">
                                            Cosmetic Surgery
                                        </option>
                                        <option value="Psychiatry">
                                            Psychiatry
                                        </option>
                                        <option value="Hormone_And_Endocrinology">
                                            Hormone And Endocrinology
                                        </option>
                                    </select>
                                </div>
                                <br></br>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="institution"
                                    placeholder="Institution"
                                    className="specialborder"
                                    required
                                    value={this.state.currentInstitution}
                                    onChange={this.onChangeCurrentInstitution}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Phone"
                                    className="specialborder"
                                    required
                                    value={this.state.phone}
                                    onChange={this.onChangePhone}
                                />
                            </div>

                            <div>
                                <label />
                                <button className="primary" type="submit">
                                    Register
                                </button>
                            </div>
                            <div>
                                <label />
                                <div>
                                    <Link to="/adddoctor">
                                        See Existing Doctors
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <footer></footer>
            </div>
        );
    }
}
