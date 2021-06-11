import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {

    /*
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: 0,
            phone: 0,
            email: '',
            address: '',
            bloodGroup: '',
        };
    }

    async componentDidMount() {
        //this.getTodos();
        //console.log('BBBBBBBBBBB');
        let data = await axios
            .get('http://localhost:5000/patient/' + this.props.match.params.id)
            .then((response) => {
                //let obj = await response.data;
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    password: response.data.password,
                    gender: response.data.gender,
                    age: response.data.age,
                    phone: response.data.phone,
                    email: response.data.email,
                    address: response.data.address,
                    bloodGroup: response.data.bloodGroup,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    */

    removeDoctor(){
        //
    }


    render() {
        //const data = localStorage.getItem('data');
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

                    <br></br><br></br>
                    <div className="rows2">
                    <Link to="/registerdoctor" className="btn4">
                                   + Add New Doctor
                     </Link>
                    </div>

                    <div className="scrollbox3">
                    

                    <ul className="ul-first">
                        <li> 
                            Name : Azad  <br></br>
                            Phone number : 000 <br></br>
                            <button className="smallbtn" onClick="removeDoctor()">
                                Remove
                            </button>
                            <br></br><br></br><br></br>
                        </li>


                        <li> 
                            Name : Alim <br></br>
                            Phone number : 000 <br></br>
                            <button className="smallbtn" onClick="removeDoctor()">
                                Remove
                            </button>
                            <br></br><br></br><br></br>
                        </li>

                        <li> 
                            Name : Alim <br></br>
                            Phone number : 000 <br></br>
                            <button className="smallbtn" onClick="removeDoctor()">
                                Remove
                            </button>
                            <br></br><br></br><br></br>
                        </li>

                        <li> 
                            Name : Alim <br></br>
                            Phone number : 000 <br></br>
                            <button className="smallbtn" onClick="removeDoctor()">
                                Remove
                            </button>
                            <br></br><br></br><br></br>
                        </li>



                    </ul>
                    </div>

                    </div>
                </main>
            </div>
        );
    }
}
