import React from 'react';


function Contact() {
  return (
      <div style = {{minHeight: window.innerHeight - 427}}>
        <div class = "container">
            <div className = "Padding-Main Background-Color-Dark">
            <h2 className = "Font-Size-Heading Font-Color-White">Contact Me</h2>
                <div style = {{marginTop: '80px', marginBottom: '80px'}}>
                    <div class = "row">
                        <div class = "input-field col s6">
                            <input placeholder = "" id="first_name" type="text" class="validate"/>
                            <label class ="black-text" for ="first_name">First Name</label>
                        </div>
                        <div class = "input-field col s6">
                            <input placeholder = "" id="last_name" type="text" class="validate"/>
                            <label class ="black-text" for ="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "" id="email" type="text" class="validate"/>
                            <label class ="black-text" for ="email">Email</label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "" id="subject" type="text" class="validate"/>
                            <label class ="black-text" for ="subject">Subject</label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "" id="Message" type="text" class="validate"/>
                            <label class ="black-text" for ="Message">Message</label>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn">Send</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;