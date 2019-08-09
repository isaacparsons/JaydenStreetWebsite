const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const nodemailer = require('nodemailer')



app.post('/sendemail', (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: user,
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data
    let mailOptions = {
        from: user,
        to: 'isaac.2962@gmail.com',
        subject: 'Hello there Google API...',
        text: 'Hello Google API',
        html: '<b>Hello Google API</b>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send({error: error})
            return console.log(error);
        }
        res.send({success: "message sent"})
        console.log('Message sent: ', info.messageId);
    });
})

const PORT = process.env.PORT || 5000
app.listen(PORT)