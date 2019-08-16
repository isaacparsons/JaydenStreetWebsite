    
const Mail = require('../logic/mail')
const keys = require('../keys')
    
module.exports = (app) => {
    app.post('/sendemail', (req, res) => {
        var {email, password} = keys
        console.log(email)
        console.log(password)
        var mail = new Mail(email, password)

        var {firstName, lastName, senderEmail, subject, message} = req.body

        mail.setMailOptions({
            from: email,
            to: "skreet2x@gmail.com",
            subject: `${senderEmail} - ${subject}`,
            text: `${firstName} ${lastName} ${message}`
        })
        mail.sendMail()
        res.sendStatus(200)
    })
}