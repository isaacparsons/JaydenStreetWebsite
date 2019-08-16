const nodemailer = require('nodemailer')

module.exports = class Mail {

    constructor(email, password){
        this.email = email
        this.password = password
        this.mailOptions = null
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: email,
              pass: password
            }
          });
    }

    setMailOptions(options){
        try {
            var {from, to, subject, text} = options
            this.mailOptions = {
                from: from,
                to: to,
                subject: subject,
                text: text
            }
        } catch {
            console.log("ERROR: error setting mail options")
        }
    }

    sendMail(){
        if(this.mailOptions){
            this.transporter.sendMail(this.mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        } else {
            console.log("ERROR: error sending email, mail options not set")
        }
    }
}

  
  