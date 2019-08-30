const paypal = require('paypal-rest-sdk');


paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AT9hRombtdcQ89cfb1FfBk81XT1URQfLfIekQdSGA64GHHoal93x5fjxYT5yEKoKlxlriAkT6sB8c2jB',
    'client_secret': 'EMkL_TUH-sllYROyVsWF8Xpx1x9nk-kV7aWndvuj57IsBpiC8wrU7Xlshl25QuYi2WxZVFs17m_GYJkq'
});

module.exports = (app) => {
    app.post('/pay', (req, res) => {

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:5001/success",
                "cancel_url": "http://localhost:5001/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Red Sox Hat",
                        "sku": "001",
                        "price": "25.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                },
                "description": "Hat for the best team ever"
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for(let i = 0;i < payment.links.length;i++){
                  if(payment.links[i].rel === 'approval_url'){
                    res.send({paypalLink: payment.links[i].href});
                  }
                }
            }
        });
    })
    
    app.get('/success', (req, res) => {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
      
        const execute_payment_json = {
          "payer_id": payerId,
          "transactions": [{
              "amount": {
                  "currency": "USD",
                  "total": "25.00"
              }
          }]
        };
      
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
          if (error) {
              console.log(error.response);
              throw error;
          } else {
              console.log(JSON.stringify(payment));
              res.redirect('localhost:3000/cart');
          }
      });
    });
}