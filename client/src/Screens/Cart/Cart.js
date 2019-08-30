import React, { Component } from 'react'
import CartSummary from './CartSummary'
import Checkout from './Checkout'
import OrderResult from './OrderResult';
import ProgressSteps from '../../Components/ProgressSteps';
import CartContext from '../../Context/CartContext';

export default class Cart extends Component {
	static contextType = CartContext

	state = {
		currentStep : 0,
		orderResultSuccess: false
	}

		render() {	
		return(
			<div>
				{/* <ProgressSteps	steps = {3}/> */}
				{this.currenStep()}
			</div>
		)	
	}

	checkout = () => {
		this.setState({currentStep: 1})
	}

	onBack = () => {
		this.setState({currentStep: 0})
	}
	

	successfulPayment = () => {
		this.setState({currentStep: 2, orderResultSuccess: true})

		// clear cart
		this.context.emptyCart()

		// send email to person
	}

	finishOrder = () => {
		this.setState({currentStep: 0})
		this.context.emptyCart()
	}

	currenStep(){
		switch(this.state.currentStep){
			case 0:
				return <CartSummary 
					onCheckout = {this.checkout}/>
			case 1:
				return <Checkout
					onSuccessfulPayment = {this.successfulPayment}
					onBack = {this.onBack}/>
			case 2: 
				return <OrderResult
					success = {this.state.orderResultSuccess}
					onFinish = {this.finishOrder}/>
			default: return <CartSummary/>
		}
	}
}
