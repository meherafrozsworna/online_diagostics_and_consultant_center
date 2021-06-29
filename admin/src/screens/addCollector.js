import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleCollector: [],
        };
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/sampleCollector/getAllsampleCollector')
            .then((response) => {
                console.log(response.data);
                this.setState({ sampleCollector: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    removeCollector() {
        //
    }

    render() {
        //const data = localStorage.getItem('data');
        const listItems = this.state.sampleCollector.map((d) => (
            <li>
                Name : {d.name} <br></br>
                Phone number : 0{d.phone} <br></br>
                <button className="smallbtn" onClick="removeCollector()">
                    Remove
                </button>
                <br></br>
                <br></br>
                <br></br>
            </li>
        ));
        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/adminhome">
                            Home
                        </a>
                    </div>
                    <div className="row center">
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Sample Collection |{' '}
                        </a>
                        <a className="brand2" href="/">
                            {' '}
                            Log Out{' '}
                        </a>
                    </div>
                </header>
                <main className="profile">
                    <div className="row center">
                        <br></br>
                        <br></br>
                        <div className="rows2">
                            <Link to="/registercollector" className="btn4">
                                + Add New Collector
                            </Link>
                        </div>

                        <div className="scrollbox3">
                            <ul className="ul-first">
                                {listItems}
                                {/*<li>
                                    Name : Azad <br></br>
                                    Phone number : 000 <br></br>
                                    <button
                                        className="smallbtn"
                                        onClick="removeCollector()"
                                    >
                                        Remove
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </li>

                                <li>
                                    Name : Alim <br></br>
                                    Phone number : 000 <br></br>
                                    <button
                                        className="smallbtn"
                                        onClick="removeCollector()"
                                    >
                                        Remove
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </li>

                                <li>
                                    Name : Alim <br></br>
                                    Phone number : 000 <br></br>
                                    <button
                                        className="smallbtn"
                                        onClick="removeCollector()"
                                    >
                                        Remove
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </li>

                                <li>
                                    Name : Alim <br></br>
                                    Phone number : 000 <br></br>
                                    <button
                                        className="smallbtn"
                                        onClick="removeCollector()"
                                    >
                                        Remove
                                    </button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </li>
                                */}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
