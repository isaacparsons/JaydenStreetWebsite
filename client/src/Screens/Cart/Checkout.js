import React, { Component } from 'react'
import { Select} from 'react-materialize';

import PaypalBtn from 'react-paypal-checkout';
import CartContext from '../../Context/CartContext';
import countryList from '../../Constants/CountryList'
import stateList from '../../Constants/StateList'

export default class Checkout extends Component {
    static contextType = CartContext

    state = {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        city: "",
        zip: "",
        state: ""
    }
    
    onSuccess = (payment) => {
        console.log("The payment succeeded!", payment);
        this.props.onSuccessfulPayment()
    }	

    onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
    }	

    onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);		
    }	
	
    render() {	
        
        var {onBack} = this.props

		let env = 'sandbox'; // you can set here to 'production' for production
		let currency = 'USD'; // or you can set this value from your props or state  
		let locale = 'en_US'; 
		// For Custom Style: https://developer.paypal.com/docs/checkout/how-to/customize-button/
		let style = {
			'label':'pay', 
			'tagline': false, 
			'size':'medium', 
			'shape':'pill', 
			'color':'gold'
		};

		const client = {
            sandbox:    'AT9hRombtdcQ89cfb1FfBk81XT1URQfLfIekQdSGA64GHHoal93x5fjxYT5yEKoKlxlriAkT6sB8c2jB',
            production: 'Abo9kBc-VzBUVfopDIwvfXClUlcEdWeZjj1jjA2GjEb8hMSJun0d2ZNkuIirJfVo-8q3lr6VWMi8sSRu',
        }
        var shippingPrice = 0
        var itemsPrice = this.getItemsTotalPrice()
        var totalPrice = itemsPrice + shippingPrice
		return (
            <div class="container" style = {{paddingBottom: 10}}>
                <div style = {{minHeight: window.innerHeight - 336}}>
                    <h5>Shipping Address</h5>
                    {this.userInput()}
                    <h5>Shipping Details</h5>
                    <ShippingDetails
                        shippingTitle = {"Fed ex (5-10 days)"}
                        price = {0}
                        currency = {"USD"}/>
                    <h5>Order Summary</h5>
                    <OrderSummary 
                        shippingTotal = {shippingPrice}
                        itemsTotal = {totalPrice}
                        currency = "USD"/>
                </div>
                <div style = {{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
                    <a class="waves-effect waves-light btn" onClick = {onBack}>Back</a>
                    <PaypalBtn 
                        env={env} 
                        // env = "production"
                        client={client} 
                        currency={currency} 
                        total={totalPrice} 
                        locale={locale} 
                        style={style}
                        onError={this.onError} 
                        onSuccess={this.onSuccess} 
                        onCancel={this.onCancel} />
                </div>
            </div>
			
        );
    }

    getItemsTotalPrice = () => {
        var value = this.context;
        var items = value.items
        var response = items.reduce((total, element) => {
            return total + element.price
        }, 0)
        return response
    }

    changeCountry = (e) => {
        this.setState({country: e.target.value})
    }
    changeStateProvince = (e) => {
        this.setState({state: e.target.value})
    }


    userInput() {
        return(
            <div>
                <div style = {{marginTop: '40px', marginBottom: '40px'}}>
                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "" id="email" type="text" class="validate"
                                onChange = {(e) => {this.setState({email: e.target.value})}}/>
                            <label class ="black-text" for ="email">Email</label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "input-field col s6">
                            <input placeholder = "" id="first_name" type="text" class="validate"
                                onChange = {(e) => {this.setState({firstName: e.target.value})}}/>
                            <label class ="black-text" for ="first_name">First Name</label>
                        </div>
                        <div class = "input-field col s6">
                            <input placeholder = "" id="last_name" type="text" class="validate"
                                onChange = {(e) => {this.setState({lastName: e.target.value})}}/>
                            <label class ="black-text" for ="last_name">Last Name</label>
                        </div>
                    </div>
                    
                    <div class = "row">
                        <div class = "input-field col s12">
                            <input placeholder = "" id="address" type="text" class="validate" 
                                onChange = {(e) => {this.setState({address: e.target.value})}}/>
                            <label class ="black-text" for ="address">Address</label>
                        </div>
                    </div>
                    <div class = "row">
                        <Select value={this.state.country} onChange = {this.changeCountry}>
                            <option value="" disabled>
                                Country
                            </option>
                            {countryList.map((element) => (
                                <option value={element}>
                                {element}
                                </option>
                            ))}
                        </Select>
                        <div class = "input-field col s6">
                            <input placeholder = "" id="city" type="text" class="validate"
                                onChange = {(e) => {this.setState({city: e.target.value})}}/>
                            <label class ="black-text" for ="city">City</label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "input-field col s6">
                            <input placeholder = "" id="zip" type="text" class="validate"
                                onChange = {(e) => {this.setState({zip: e.target.value})}}/>
                            <label class ="black-text" for ="zip">Zip/Postal Code</label>
                        </div>
                        <Select value={this.state.state} onChange = {this.changeStateProvince}>
                            <option value="" disabled>
                                State/Province
                            </option>
                            {stateList.map((element) => (
                                <option value={element}>
                                {element}
                                </option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        )
    }
}

const OrderSummary = (props) => {
    var {shippingTotal, itemsTotal, currency } = props
    return(
        <div style = {{marginTop: 10, marginBottom: 10}}>
            <h6>{`Shipping and Handling: ${currency}$${shippingTotal}`}</h6>
            <h6>{`Items: ${currency}$${itemsTotal}`}</h6>
            <h5>{`Total: ${currency}$${itemsTotal + shippingTotal}`}</h5>
        </div>)
}

const ShippingDetails = (props) => {
    var {shippingTitle, price, currency} = props
    var priceString = price == 0 ? "Free" : `${currency}$${price}`
    return(
        <div style = {{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            margin: 20, 
            width: 400}}>
            <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span></span>
            </label>
            <h6>{shippingTitle}</h6>
            <h6>Free</h6>
        </div>)
}
