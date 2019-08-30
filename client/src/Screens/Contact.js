import React, { Component } from 'react'
import { TextInput } from 'react-materialize';

import submitContactMeForm from '../Api/submitContactMeForm';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export default class Contact extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    }

    handleSubmitContact = async () => {
        toast("Email has been sent!", {type: "info", hideProgressBar: true})
        submitContactMeForm(this.state)
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    render() {
        return (
            <div style = {{minHeight: window.innerHeight - 427}}>
              <div class = "container">
                  <div className = "Padding-Main Background-Color-Dark">
                  <h2 className = "Font-Size-Heading Font-Color-White">Contact Me</h2>
                      <div style = {{marginTop: '80px', marginBottom: '80px'}}>
                          <div class = "row">
                                <TextInput 
                                    s={6} 
                                    label="First Name" 
                                    value = {this.state.firstName}
                                    onChange = {(e) => {this.setState({firstName: e.target.value})}}/>
                                <TextInput 
                                    s={6} 
                                    label="Last Name" 
                                    value = {this.state.lastName}
                                    onChange = {(e) => {this.setState({lastName: e.target.value})}}/>
                          </div>
                          <div class = "row">
                                <TextInput 
                                    s={12} 
                                    label="Email" 
                                    value = {this.state.email}
                                    onChange = {(e) => {this.setState({email: e.target.value})}}/>
                          </div>
                          <div class = "row">
                            <TextInput 
                                    s={12} 
                                    label="Subject" 
                                    value = {this.state.subject}
                                    onChange = {(e) => {this.setState({subject: e.target.value})}}/>
                          </div>
                          <div class = "row">
                              <TextInput 
                                    s={12} 
                                    label="Message" 
                                    value = {this.state.message}
                                    onChange = {(e) => {this.setState({message: e.target.value})}}/>
                          </div>
                          <a class="waves-effect waves-light btn" onClick = {this.handleSubmitContact}>Send</a>
                          
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}
