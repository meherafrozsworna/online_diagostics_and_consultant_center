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

        const patient = {
            email: this.state.email,
            password: this.state.password,
        };

        console.log(patient);

        axios
            .post('http://localhost:5000/patient/login', patient)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    status: true,
                    id: res.data._id,
                });
                console.log(this.state.id);
                /*
                name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
            address: '',
            bloodGroup: '',
                */
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('password', res.data.password);
                localStorage.setItem('gender', res.data.gender);
                localStorage.setItem('age', res.data.age);
                localStorage.setItem('phone', res.data.phone);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('address', res.data.address);
                localStorage.setItem('bloodGroup', res.data.bloodGroup);
                window.location = '/patienthome/' + this.state.id;
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
                <main>
                    <div>
                        <form className="form" onSubmit={this.onSubmit}>
                            <div>
                                <h1>Sign In</h1>
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
                                    SignIn
                                </button>
                            </div>
                            <div>
                                <label />
                                <div>
                                    New customer?{' '}
                                    <Link to="/register">
                                        Create your account
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
