import React, { Component } from 'react'
import PaypalBtn from 'react-paypal-checkout';
import CartContext from '../../Context/CartContext';

const success = {
  header: "Thank you for ordering!",
  body: "An email will be sent shortly to confirm your order"
}

const failure = {
  header: "Sorry",
  body: "There was an issue processing your order"
}

export default class OrderResult extends Component {
	static contextType = CartContext
	
    render() {	
		  var content = this.props.success ? success : failure
		return (
      <div class = "container" style = {{minHeight: window.innerHeight - 336}} >
        <div style = {{height: '80%'}}>
				  <h3>{content.header}</h3>
          <p>{content.body}</p>
        </div>
        <a class="waves-effect waves-light btn" onClick = {this.props.onFinish}>Finish</a>
      </div>);
	}
}
