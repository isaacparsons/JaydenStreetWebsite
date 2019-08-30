import axios from 'axios'

const submitContactMeForm = async (body) => {
    var {firstName, lastName, email, subject, message} = body
    await axios.post('/sendemail', {
        firstName: firstName,
        lastName: lastName,
        senderEmail: email, 
        subject: subject, 
        message: message
      })
}

export default submitContactMeForm