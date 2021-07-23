import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class SampleCollector extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCurrentInstitution = this.onChangeCurrentInstitution.bind(this);
        this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
        //this.onChangeSchedule = this.onChangeSchedule.bind(this);
        this.checkClick = this.checkClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: 'Dr Afzal Khan',
            degree: 'MBBS(DMC), DTCD(RMC), FCPS',
            currentInstitution: 'Dhaka Medical College',
            specialization: 'Cardiology',
            schedule: [],

            email: 'akhan47@gmail.com',
            phone: '01992123456',
            gender: 'Male',
        };
    }

    checkClick = (e) => {
        var { value, checked } = e.target;
        console.log(e.target);

        if (checked) {
            let sch = this.state.schedule.concat(value);
            this.setState({
                schedule: sch,
            });
            console.log(this.state.schedule);
        } else {
            let sch = this.state.schedule;
            sch = sch.filter((e) => e != value);
            this.setState({
                schedule: sch,
            });
            console.log(this.state.schedule);
        }
    };


    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeDegree(e) {
        this.setState({
            degree: e.target.value,
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value,
        });
    }
  
    onChangeSpecialization(e) {
        this.setState({
            specialization: e.target.value,
        });
    }
    onChangeCurrentInstitution(e) {
        this.setState({
            currentInstitution: e.target.value,
        });
    }

    

    onSubmit(e) {
        e.preventDefault();

        const testdata = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            degree: this.state.degree,
            gender: this.state.gender,
            specialization: this.state.specialization,
            schedule: this.state.schedule,
            currentInstitution: this.state.currentInstitution,
                       
        };

        /*
        console.log(testdata);

        axios
            .post('http://localhost:5000/patient/testform/submit', testdata, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log(res.data);

                axios
                    .post(
                        'http://localhost:5000/admin/addPendingTest',
                        res.data
                    )
                    .then((response) => {
                        console.log(response.data);
                    });
            });
            */

        window.location = '/doctor';
    }

    

    render() {
        return (
            <div className="profile">

                <header className="row">
                    <div>
                        <a className="brand" href="/doctor">
                            Home
                        </a>
                    </div>
                </header>
                <main
                    className="profile"
                    style={{ fontSize: 21 }}
                >
                    <br></br>
                    <div className="row center">

                        <h2  style={{marginBottom:"30px"}}> Edit Doctor Profile</h2>
                        <br></br><br></br>

                        <div className="detail-box">


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.name}
                                        id="name"
                                        className="text-input"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                            </div>


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="email"
                                        placeholder={this.state.email}
                                        id="email"
                                        className="text-input"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>


                            <div class="rows">
                                <div class="input">
                                    <input
                                        type="text"
                                        placeholder={this.state.phone}
                                        id="name"
                                        className="text-input"
                                        value={this.state.phone}
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                            </div>

                                <div class="rows2">
                                <div classNme="input" onChange={this.onChangeGender} >
                                    <select id="dropdown">
                                        <option value="Gender">
                                            Gender
                                        </option>
                                        <option value="Male">
                                            Male
                                        </option>
                                        <option value="Female">
                                            Female
                                        </option>
                                        <option value="Transgender">
                                            Transgender
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>
                                </div>
                            </div>

                            <div class="rows">
                                <div class="input">
                                <label>
                                            Degrees:
                                        </label>
                                        <br></br>
                                    <input
                                        type="text"
                                        placeholder={this.state.degree}
                                        id="name"
                                        className="text-input"
                                        value={this.state.degree}
                                        onChange={this.onChangeDegree}
                                       
                                    />
                                </div>
                            </div>

                          

                            <div class="rows2">
                                <div classNme="input"  onChange={this.onChangeCurrentInstitution} >
                                    <select id="dropdown">
                                        <option value="current">
                                            Institution
                                        </option>
                                        <option value="dmc">
                                            Dhaka Medical College
                                        </option>
                                        <option value="smc">
                                            Salimullah Medical College
                                        </option>
                                        <option value="bsmmu">
                                            BSMMU
                                        </option>
                                        <option value="birdem">
                                            BIRDEM
                                        </option>
                                        <option value="labaid">
                                            LABAID
                                        </option>
                                        <option value="hf">
                                            Holy Family Red Crescent Hospital
                                        </option>
                                        <option value="shl">
                                            Square Hospital Ltd
                                        </option>
                                        <option value="ahl">
                                            Apollo Hospital Ltd
                                        </option>
                                        <option value="bmch">
                                            BRB Medical College And Hospital
                                        </option>
                                        <option value="nimc">
                                            Kurmitola Gov. Hospital
                                        </option>
                                        <option value="nimc">
                                            Southeast International Medical College
                                        </option>
                                        <option value="cancer">
                                            Specailized Cancer Center
                                        </option>
                                        <option value="nimc">
                                            Insaf Barakah Hospital
                                        </option>
                                        <option value="nimc">
                                            Popular Medical Institute
                                        </option>
                                        <option value="nimc">
                                            Bangladesh National Hospital
                                        </option>
                                        <option value="nimc">
                                            Uttara Medical College And Hospital
                                        </option>
                                        <option value="other">
                                            Other
                                        </option>
                                        <option value="retired">
                                            Retired
                                        </option>

                                    </select>
                                </div>
                            </div>

                            <div class="rows2">
                                <div classNme="input"  onChange={this.onChangeSpecialization} >
                                    <select id="dropdown">
                                        <option value="current">
                                            Field of Specialization
                                        </option>
                                        <option value="general">
                                            General Practice
                                        </option>
                                        <option value="cardio">
                                            Cardiology
                                        </option>
                                        <option value="gyn">
                                            Gynaecology
                                        </option>
                                        <option value="skin">
                                            Skin And Sexual Diseases
                                        </option>
                                        <option value="neuro">
                                            Neurology
                                        </option>
                                        <option value="uro">
                                            Urology
                                        </option>
                                        <option value="shl">
                                            Kidney
                                        </option>
                                        <option value="ahl">
                                            Eye
                                        </option>
                                        <option value="bmch">
                                            ENT
                                        </option>
                                        <option value="nimc">
                                            Respiratory Medicine
                                        </option>
                                        <option value="nimc">
                                            Surgery
                                        </option>
                                        <option value="cancer">
                                            Plastic Surgery
                                        </option>
                                        <option value="nimc">
                                            Nutritionist
                                        </option>
                                        <option value="nimc">
                                            Hormone And Endocrine
                                        </option>
                                        <option value="nimc">
                                            Psychiatry
                                        </option>
                                        <option value="nimc">
                                            Nephrology
                                        </option>
                                        <option value="other">
                                            Other
                                        </option>

                                    </select>
                                </div>
                                <br></br>
                            </div>

                            <br></br>

                            <div class="rows">

                                    <div
                                        id="list1"
                                        class="dropdown-check-list"
                                        tabindex="100"
                                    >
                                        <span class="anchor">
                                            Select Available Slots (weekly)
                                        </span>
                                        <ul class="items">
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Sunday 5-6pm"
                                                    onChange={this.checkClick}
                                                />
                                                Sunday 5-6pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Sunday 6-7pm"
                                                    onChange={this.checkClick}
                                                />
                                               Sunday 6-7pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Sunday 7-8pm"
                                                    onChange={this.checkClick}
                                                />
                                                Sunday 7-8pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Sunday 8-9pm"
                                                    onChange={this.checkClick}
                                                />
                                                Sunday 8-9pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Sunday 9-10pm"
                                                    onChange={this.checkClick}
                                                />
                                                Sunday 9-10pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Monday 5-6pm"
                                                    onChange={this.checkClick}
                                                />
                                                Monday 5-6pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Monday 6-7pm"
                                                    onChange={this.checkClick}
                                                />
                                               Monday 6-7pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Monday 7-8pm"
                                                    onChange={this.checkClick}
                                                />
                                                Monday 7-8pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Monday 8-9pm"
                                                    onChange={this.checkClick}
                                                />
                                                Monday 8-9pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Monday 9-10pm"
                                                    onChange={this.checkClick}
                                                />
                                                Monday 9-10pm
                                            </li>
                                            
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Tuesday 5-6pm"
                                                    onChange={this.checkClick}
                                                />
                                               Tuesday 5-6pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Tuesday 6-7pm"
                                                    onChange={this.checkClick}
                                                />
                                               Tuesday 6-7pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Tuesday 7-8pm"
                                                    onChange={this.checkClick}
                                                />
                                                Tuesday 7-8pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Tuesday 8-9pm"
                                                    onChange={this.checkClick}
                                                />
                                                Tuesday 8-9pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Tuesday 9-10pm"
                                                    onChange={this.checkClick}
                                                />
                                                Tuesday 9-10pm
                                            </li>

                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Wednesday 5-6pm"
                                                    onChange={this.checkClick}
                                                />
                                               Wednesday 5-6pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Wednesday 6-7pm"
                                                    onChange={this.checkClick}
                                                />
                                               Wednesday 6-7pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Wednesday 7-8pm"
                                                    onChange={this.checkClick}
                                                />
                                                Wednesday 7-8pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Wednesday 8-9pm"
                                                    onChange={this.checkClick}
                                                />
                                                Wednesday 8-9pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Wednesday 9-10pm"
                                                    onChange={this.checkClick}
                                                />
                                                Wednesday 9-10pm
                                            </li>

                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Thursday 5-6pm"
                                                    onChange={this.checkClick}
                                                />
                                               Thursday 5-6pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Thursday 6-7pm"
                                                    onChange={this.checkClick}
                                                />
                                               Thursday 6-7pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Thursday 7-8pm"
                                                    onChange={this.checkClick}
                                                />
                                                Thursday 7-8pm{' '}
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Thursday 8-9pm"
                                                    onChange={this.checkClick}
                                                />
                                                Thursday 8-9pm
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    value="Thursday9-10pm"
                                                    onChange={this.checkClick}
                                                />
                                                Thursday 9-10pm
                                            </li>

                                            

                                        
                                        </ul>
                                    </div>
                                </div>

                        </div>

                        <div class="rows" id="submit-button">
                                    <button type="submit" id="submit">
                                        Submit
                                    </button>
                                </div>
                    </div>
                </main>
            </div>
        );
    }
}
