import React from 'react';

const ContactMe = () => {
    return (
      <div className = "Padding-Main Background-Color-Dark">
      <h2 className = "Font-Size-Heading Font-Color-White">Contact Me</h2>
        <div style = {{marginTop: '80px'}}>
          <div class = "row">
            <div class = "input-field col s6">
              <input placeholder = "First Name" id="first_name" type="text" class="validate"/>
              <label class ="white-text" for ="first_name">First Name</label>
            </div>
            <div class = "input-field col s6">
              <input placeholder = "Last Name" id="last_name" type="text" class="validate"/>
              <label class ="white-text" for ="last_name">Last Name</label>
            </div>
          </div>
          <div class = "row">
            <div class = "input-field col s12">
              <input placeholder = "Subject" id="subject" type="text" class="validate"/>
              <label class ="white-text" for ="subject">Subject</label>
            </div>
          </div>
          <div class = "row">
            <div class = "input-field col s12">
              <input placeholder = "Message" id="Message" type="text" class="validate"/>
              <label class ="white-text" for ="Message">Message</label>
            </div>
          </div>
          <a class="waves-effect waves-light btn">Send</a>
        </div>
      </div>
    )
  }