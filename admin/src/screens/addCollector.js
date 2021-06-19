import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);
        this.addCollectors = this.addCollectors.bind(this);

        this.state = {
            sampleCollector: [],
        };
    }

    addCollectors(item, index) {
        console.log('In add collector function ' + item);
        const id = item;
        axios
            .get('http://localhost:5000/sampleCollector/' + id)
            .then((response) => {
                console.log(response.data);
                this.setState((previousState) => ({
                    sampleCollector: [
                        ...previousState.sampleCollector,
                        response.data,
                    ],
                }));
                // this.setState({
                //     sampleCollector: this.state.sampleCollector.concat([
                //         response.data,
                //     ]),
                // });
                console.log(this.state.sampleCollector);
            })
            .catch(function (error) {
                console.log('In function : ');
                console.log(error);
            });
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/admin/sampleCollectorList', {
                headers: {
                    'x-access-token': localStorage.getItem('admintoken'),
                },
            })
            .then((response) => {
                console.log(response.data);
                const idlist = response.data;

                idlist.forEach(this.addCollectors);

                //this.setState({});
                console.log('Sample collectors : ');
                console.log(this.state.sampleCollector);
            })
            .catch(function (error) {
                console.log('error');
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
                Phone number : {d.phone} <br></br>
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
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Feedback{' '}
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
