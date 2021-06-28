import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class ReportList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportList: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/admin/reportList', {
                headers: {
                    'x-access-token': localStorage.getItem('admintoken'),
                },
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    reportList: response.data,
                });
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    }

    render() {
        const listItems = this.state.reportList.map((d) => (
            <li>
                <Link to={'/fileupload/' + d._id}>
                    {
                        //<h3>Name : {d.patientName} </h3>
                    }
                    Email: {d.email}
                    <br></br>
                    Phone Number : 0{d.phoneNumber}
                    <br></br>
                    <h4>Status : PAID</h4>
                </Link>
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
                        <a className="brand2" href="/adminhome_appointments">
                            {' '}
                            Appointments |{' '}
                        </a>
                        <a className="brand3" href="/adminhome">
                            {' '}
                            Sample Collection |{' '}
                        </a>
                        <a className="brand2" href="/adminhome">
                            {' '}
                            Patients
                            {'  '}
                        </a>
                    </div>
                </header>
                <main className="profile">
                    <div className="row2">
                        <div className="">
                            <div className="row center">
                                <div className="scrollbox">
                                    <ul>
                                        <h2>Pending Reports</h2>
                                        {listItems}
                                        {/*<li>
                                            <Link to="/admintest">
                                                <h3>Abeda Sultana </h3>
                                                Khilgaon 204/A Road-10 House-2
                                                <br></br>
                                                01712345678<br></br>
                                                Tk 560
                                                <h4>UNPAID</h4>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/admintest">
                                                <h3>Abeda Sultana </h3>
                                                Khilgaon 204/A Road-10 House-2
                                                <br></br>
                                                01712345678<br></br>
                                                Tk 560
                                                <h4>UNPAID</h4>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/admintest">
                                                <h3>Abeda Sultana </h3>
                                                Khilgaon 204/A Road-10 House-2
                                                <br></br>
                                                01712345678<br></br>
                                                Tk 560
                                                <h4>UNPAID</h4>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/admintest">
                                                <h3>Abeda Sultana </h3>
                                                Khilgaon 204/A Road-10 House-2
                                                <br></br>
                                                01712345678<br></br>
                                                Tk 560
                                                <h4>UNPAID</h4>
                                            </Link>
                                        </li>
                                        */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
