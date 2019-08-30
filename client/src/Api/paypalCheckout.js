import axios from 'axios'

const paypalCheckout = async () => {
    return await axios.post('/pay', {
      })
}

export default paypalCheckout