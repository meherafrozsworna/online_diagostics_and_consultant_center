import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SigninScreen extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            id: '',
        };
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    async onSubmit(e) {
        e.preventDefault();

        const doctor = {
            email: this.state.email,
            password: this.state.password,
        };

        console.log(doctor);

        axios.post('http://localhost:5000/doctor/login', doctor).then((res) => {
            console.log(res.data);
            if (res.data.auth) {
                this.setState({ login: true });
                localStorage.setItem('token', res.data.token);
            } else {
                this.setState({ login: false });
            }

            window.location = '/doctor';
        });
    }

    render() {
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">
                            Healthway
                        </a>
                    </div>
                    <div>
                        <a href="/about">About</a> |
                        <a href="/about">Services</a> |
                        <a href="/signin">Sign In </a>
                    </div>
                </header>
                <main className="about">
                    <div>
                        <form className="form" onSubmit={this.onSubmit}>
                            <div>
                                <h1>Doctor Sign In</h1>
                            </div>
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                    className="specialborder"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>
                            <div>
                                <label />
                                <button className="primary" type="submit">
                                    Sign In
                                </button>
                            </div>
                            <div>
                                <label />
                            </div>
                        </form>
                    </div>
                </main>
                <footer>
                    <div class="row center">
                        {' '}
                        <br></br>Copyight by Healthway 2021{' '}
                    </div>
                </footer>
            </div>
        );
    }
}
