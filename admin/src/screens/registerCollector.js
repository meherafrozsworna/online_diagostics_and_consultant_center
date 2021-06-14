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
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: null,
            phone: null,
            email: '',
        };
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
    onChangeAge(e) {
        this.setState({
            age: e.target.value,
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

        const sampleCollector = {
            name: this.state.name,
            password: this.state.password,
            gender: this.state.gender,
            age: this.state.age,
            phone: this.state.phone,
            email: this.state.email,
        };

        console.log(sampleCollector);

        axios
            .post('http://localhost:5000/sampleCollector/add', sampleCollector)
            .then((res) => console.log(res.data));

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
                        <form className="form" onSubmit={this.onSubmit}>
                            <div>
                                <h1>Register A Collector</h1>
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
                                    type="number"
                                    id="age"
                                    placeholder="Age"
                                    className="specialborder"
                                    required
                                    value={this.state.age}
                                    onChange={this.onChangeAge}
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
                                    <Link to="/addcollector">
                                        See Existing Sample Collectors
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
