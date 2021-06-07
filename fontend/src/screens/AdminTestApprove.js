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

    render() {
        //const data = localStorage.getItem('data');
        return (
            <div className="profile">
                {
                    //<h1>{this.props.id}</h1>
                }

                <header className="row">
                    <div>
                        <a className="brand" href="/admin">
                            Home
                        </a>
                    </div>
                    
                </header>
                <main className="profile" style={{fontSize:22, paddingLeft:200}}>
                    <br></br>
                    <h2> Test Form Information</h2>
                    <br></br>Test Form ID:
                    <br></br>Patient Name:
                    <br></br>Phone Number:
                    <br></br>Patient Age:
                    <br></br>Patient Gender:
                    <br></br>Location:
                    <br></br>Address:
                    <br></br>Preferred Gender of Sample Collector:
                    <br></br>Referring Doctor:
                    <br></br>Required Tests:
                    <ol>
                        <li>Test1</li>
                        <li>Test1</li>
                        <li>Test1</li>
                        <li>Test1</li>
                    </ol>
                    <br></br>Payment Amount:
                    <br></br>Payment Method: Cash
                    <br></br>Payment Status: Unpaid
                    <br></br>Instructions:
                    <br></br><br></br><br></br>

                    <h2> Assign Sample Collector</h2>
                    
          <div class="rows2">
	      <div classNme="input">
	        <select id="dropdown">
	          <option value="Location of Collection">Location of Collection</option>
	          <option value="Dhanmondi">Dhanmondi</option>
	          <option value="Mohammadpur">Mohammadpur</option>
	          <option value="Mirpur">Mirpur</option>
              <option value="Uttara">UttaraMirpur</option>
              <option value="Ramna">Ramna</option>
              <option value="Azimpur">zimpur</option>
              <option value="Rampura">Rampura</option>
              <option value="Khilgaon">Khilgaon</option>
              <option value="Farmgate">Farmgate</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Banani">Banani</option>
              <option value="Badda">Badda</option>
              <option value="Cantonment">Cantonment</option>
              <option value="Bashabo">Bashabo</option>
              <option value="Old Dhaka">Old Dhaka</option>
              <option value="Keraniganj">Keraniganj</option>
              <option value="Other">Other</option>

	        </select>
	      </div>
	    </div>

        <div class="rows2">
	      <div class="labels" id="radio-label">
	        <label>
	        Preferred Gender of Sample Collector:
	        </label>
	      </div>
	      <div class="input">
	        <input type="radio" name="positions" value="male" id="male"/><label for="male">Male</label><br></br>
	        <input type="radio" name="positions" value="female" id="female"/><label for="female">Female</label><br></br>
	        <input type="radio" name="positions" value="any" id="any"/><label for="any">Any</label>
	      </div>
	    </div>    

        <div class="rows2">
	      <div class="labels" id="radio-label">
	        <label>
	        Preferred Time:
	        </label>
	      </div>
	      <div class="input">
	        <input type="radio" name="positions" value="morning" id="morning"/>Morning<br></br>
	        <input type="radio" name="positions" value="afternoon" id="afternoon"/>Afternoon<br></br>
	        <input type="radio" name="positions" value="night" id="night"/>Night<br></br>
            <input type="radio" name="positions" value="any" id="any"/>Any<br></br>
	      </div>
	    </div>    
        
         <div class="rows2">
	      <div classNme="input">
	        <select id="dropdown">
            <option>Select Sample Collector</option>
	          <option value="asad">Asad</option>
	          <option value="asad">Alamin</option>
	          <option value="asad">Mokammel</option>
	          <option value="asad" value="other">Nazia</option>
              <option value="asad">Joti</option>
	        </select>
	      </div>
          </div>
          <br></br><br></br><br></br>

                </main>
            </div>
        );
    }
}
