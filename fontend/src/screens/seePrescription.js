import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {
    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            Pname:'',
            Dname:''
        };
    }

    componentDidMount() {
        axios
            .get(
                'http://localhost:5000/prescription/getPres/' +
                    this.props.match.params.id
            )
            .then((response) => {
                this.setState({
                    Pname: response.data.patientName,                    
                    Dname: response.data.doctorName
                });
            })
            .catch(function (error) {
                console.log(error);
            });

       
    }

    render() {

        return (
            <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/patienthome/:id">
                        Home
                    </a>
                </div>
                 <div>
                    <Link to="/">Log Out{'  '}</Link>
                </div>
            </header>

                <main
                    className="lab"
                    style={{ fontSize: 21 }}
                >
                    <br></br>
                    <div className="row center">

                        <h2> Doctor's Prescription</h2>

                        <div id="container">
                            <br></br>Patient Name : {this.state.Pname}
                            <br></br>Doctor Name : {this.state.Dname.toUpperCase() }

                            <br></br><br></br>
                            <a href="https://drive.google.com/file/d/1Lzo2WY6DzN_NXhcSfppsOrzKtLqD-l7w/view?usp=sharing" target="_blank" download><h6>View / Download</h6>  </a>
                           
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
