import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//export default function PatientHomeScreen() {
export default class FileUpload extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            selectedFile: null
        };
    }

    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

    /*
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
                    email: response.data.email,
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
                        <a className="brand" href="/adminhome">
                            Home
                        </a>
                    </div>

                </header>
                <main className="profile">

                    <div className="row center">
                        <h2> Upload Test Report</h2>

                        <div className="detail-box">


                            <br></br><br></br>

                            <form class="box" method="post" action="" enctype="multipart/form-data">

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="text"
                                            placeholder="Name of Patient"
                                            id="name"
                                            className="text-input"
                                            required
                                        //value={this.state.name}
                                        //onChange={this.onChangeName}

                                        />
                                    </div>
                                </div>

                                <div class="rows">
                                    <div class="input">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            id="email"
                                            className="text-input"
                                            required
                                        //value={this.state.number}
                                        //onChange={this.onChangeNumber}

                                        //<input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />

                                        />
                                    </div>
                                </div>

                                <div class="rows">


                                    <div class="box__input">
                                        <br></br>
                                        <input type="file" name="file" onChange={this.onChangeHandler} />
                                        <br></br><br></br>
                                        <button class="box__button" type="submit">Upload</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </main>
            </div>
        );
    }
}
