import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function SigninScreen() {
export default class TestForm extends Component {

/*

        var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
*/


    /*
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBloodgroup = this.onChangeBloodgroup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: '',
            gender: '',
            age: null,
            phone: null,
            email: '',
            address: '',
            bloodGroup: '',
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
    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }
    onChangeBloodgroup(e) {
        this.setState({
            bloodGroup: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const patient = {
            name: this.state.name,
            password: this.state.password,
            gender: this.state.gender,
            age: this.state.age,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            bloodGroup: this.state.bloodGroup,
        };

        console.log(patient);

        axios
            .post('http://localhost:5000/patient/add', patient)
            .then((res) => console.log(res.data));

        window.location = '/signin';
    }
    */

    render() {
        return (
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">
                            Home
                        </a>
                    </div>
                    
                </header>

                <main>
                <div >
	<h1 id="title">Sample Collection Form</h1>
	<div id="container">
	  <p id="description">
	    Please fill up this form with the information of the person whose sample will be collected.
	  </p>
	  <form id="survey-form">

	    <div class="rows">
	      <div class="input">
	        <input type="text" placeholder="Name of Patient"id="name" className="text-input" required/>
	      </div> 
	    </div>
       
	    <div class="rows">
	      <div class="input">
	        <input type="phone" placeholder="Phone number"id="phone" className="text-input" required/>
	      </div> 
	    </div>
	    <div class="rows">
	      <div class="input">
	        <input type="number" placeholder="Age of Patient" min="1" max="100"id="number" class="text-input" required/>
	      </div> 
	    </div>

	    <div class="rows">
	      <div classNme="input">
	        <select id="dropdown">
            <option>Gender</option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
	          <option value="transgender">Transgender</option>
	          <option value="other">Other</option>
	        </select>
	      </div>
	    </div>

        <div class="rows">
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
        
        <div class="rows">
	      <div class="input">
	        <input type="text" placeholder="Address of Sample Collection"id="address" className="text-input" required/>
	      </div> 
	    </div>

	    <div class="rows">
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

        <div class="rows">
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

	    <div class="rows">
	      <div class="labels" id="checkboxes-label">
	        <label>
	        Required Tests:
	        </label>
	      </div>
	      
          <div id="list1" class="dropdown-check-list" tabindex="100">
  <span class="anchor">Select Test(s)</span>
  <ul class="items">
    <li><input type="checkbox" value="Bloodgrouping"/>Bloodgrouping </li>
    <li><input type="checkbox" value="T3 Test"/>T3 Test</li>
    <li><input type="checkbox" value="T4 Test"/>T4 Test </li>
    <li><input type="checkbox" value="Urine Test"/>Urine Test</li>
    <li><input type="checkbox" value="Haemoglobin"/>Haemoglobin Level</li>
    <li><input type="checkbox" value="Blood Sugar"/>Blood Sugar Level</li>
    <li><input type="checkbox" value="Insulin Level"/>Insulin Level</li>
    <li><input type="checkbox" value="Haemoglobin"/>Platelet Level</li>
    <li><input type="checkbox" value="Blood Sugar"/>Blood Chemistry</li>
    <li><input type="checkbox" value="Insulin Level"/>Saliva Test</li>
    <li><input type="checkbox" value="Blood Sugar"/>Transfuse Test</li>
    <li><input type="checkbox" value="Insulin Level"/>Pap Smear</li>
    <li><input type="checkbox" value="Haemoglobin"/>Lymph Test</li>
    <li><input type="checkbox" value="Blood Sugar"/>Blood Chemistry (Detailed)</li>
  </ul>
</div>
	    </div>

	    <div class="rows">
	      <div class="input">
	        <input type="text" placeholder="Name of Referring Doctor (If Any)"id="referringdoctor" className="text-input"/>
	      </div> 
	    </div>

        <div class="rows">
	      <div class="input">
	        <textarea id="text-area" placeholder="Instructions (If Any)"></textarea>
	      </div>
	    </div>

        <div class="rows">
	      <div class="labels" id="radio-label">
	        <label>
	        Payment Method:
	        </label>
	      </div>
	      <div class="input">
	        <input type="radio" value="cash" id="morning"/>Cash to the Sample Collector<br></br>
	        <input type="radio"  value="bkash" id="afternoon"/>Bkash<br></br>
	        <input type="radio" value="rocket" id="night"/>Rocket<br></br>
	      </div>
	    </div>   


	    <div class="rows" id="submit-button">
	      <button type="submit" id="submit">Submit</button>
	    </div>   
	  </form>
	</div>
    </div>

                </main>
            </div>
        );
    }
}
