import React, { Component } from 'react'
import submitContactMeForm from '../Api/submitContactMeForm';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export default class Contact extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        subject: null,
        message: null
    }

    handleSubmitContact = async () => {
        // do some sort of validation
        toast("Email has been sent!", {type: "info", hideProgressBar: true})
        // submitContactMeForm(this.state)
    }

    render() {
        return (
            <div style = {{minHeight: window.innerHeight - 427}}>
              <div class = "container">
                  <div className = "Padding-Main Background-Color-Dark">
                  <h2 className = "Font-Size-Heading Font-Color-White">Contact Me</h2>
                      <div style = {{marginTop: '80px', marginBottom: '80px'}}>
                          <div class = "row">
                              <div class = "input-field col s6">
                                  <input placeholder = "" id="first_name" type="text" class="validate"
                                        onChange = {(e) => {this.setState({firstName: e.target.value})}}/>
                                  <label class ="black-text" for ="first_name">First Name</label>
                              </div>
                              <div class = "input-field col s6">
                                  <input placeholder = "" id="last_name" type="text" class="validate"
                                        onChange = {(e) => {this.setState({lastName: e.target.value})}}/>
                                  <label class ="black-text" for ="last_name">Last Name</label>
                              </div>
                          </div>
                          <div class = "row">
                              <div class = "input-field col s12">
                                  <input placeholder = "" id="email" type="text" class="validate"
                                        onChange = {(e) => {this.setState({email: e.target.value})}}/>
                                  <label class ="black-text" for ="email">Email</label>
                              </div>
                          </div>
                          <div class = "row">
                              <div class = "input-field col s12">
                                  <input placeholder = "" id="subject" type="text" class="validate" 
                                        onChange = {(e) => {this.setState({subject: e.target.value})}}/>
                                  <label class ="black-text" for ="subject">Subject</label>
                              </div>
                          </div>
                          <div class = "row">
                              <div class = "input-field col s12">
                                  <input placeholder = "" id="Message" type="text" class="validate"
                                        onChange = {(e) => {this.setState({message: e.target.value})}}/>
                                  <label class ="black-text" for ="Message">Message</label>
                              </div>
                          </div>
                          <a class="waves-effect waves-light btn" onClick = {this.handleSubmitContact}>Send</a>
                          
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
