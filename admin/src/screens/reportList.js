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
            //   "/fileupload/:formid/patient/:patientid"
            <li>
                <Link to={'/fileupload/' +d._id + '/patient/' + d.patientId}>
                    {
                        //<h3>Name : {d.patientName} </h3>
                    }
                    Form Id  : {d._id}
                    <br></br>
                    Patient Name : {d.patientName}
                    <br></br>
                    Phone Number : 0{d.phoneNumber}
                    <br></br>
                    <h4>Status : PAID</h4>
                </Link>
            </li>
        ));
        return (
            <div className="profile">
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
                                <h6>Pending Reports</h6>
                                <div className="scrollbox3">
                                    <ul className="ul-first">{listItems}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}