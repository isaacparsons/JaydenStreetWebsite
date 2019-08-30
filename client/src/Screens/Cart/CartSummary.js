import React, { Component } from 'react'
import CartContext from '../../Context/CartContext';
import QuantitySelector from '../../Components/QuantitySelector';

export default class CartSummary extends Component {
	static contextType = CartContext
    

    increaseQuantity = (item) => {
        var value = this.context;
        value.changeQuantity({
            ...item,
            quantity: item.quantity + 1
        })
    }

    decreaseQuantity = (item) =>{
        var value = this.context;
        value.changeQuantity({
            ...item,
            quantity: item.quantity - 1
        })
    }

    render() {		
        var value = this.context;
        var items = value.items

        var {onCheckout} = this.props
        
		return (
            <div class="container" style = {{paddingBottom: 10}}>
                <div style = {{minHeight: window.innerHeight - 336}} >
                    <h4>CART</h4>
                    {items.map((element) => {
                        var {img, quantity, title, size, currency, price} = element
                        return(
                            <div style = {{height: 200, display: 'flex'}} class="card z-depth-3">
                                <img style = {{height: '100%', padding: 10}}src={img}/>
                                <div style = {{display: 'flex', flexDirection: 'row', flex: 1}}>
                                    <div style = {{display: 'flex', flex: 1, flexDirection: 'column'}}>
                                        <h5 style = {{fontSize: 24}}>{title}</h5>
                                        <h5 style = {{fontSize: 16}}>{`Size: ${size}`}</h5>
                                        <div>
                                            <h5 style = {{fontSize: 16}}>{`Quantity:`}</h5>
                                            <QuantitySelector 
                                                value = {quantity}
                                                addOne = {() => this.increaseQuantity(element)}
                                                subtractOne = {() => this.decreaseQuantity(element)}/>
                                        </div>
                                    </div>
                                    <div style = {{display: 'flex', flex: 1, alignItems: 'center'}}>
                                        <h5 style = {{fontSize: 20}}>{`Price: ${currency}$${price}`}</h5>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                <a class="waves-effect waves-light btn" onClick = {onCheckout}>Checkout</a>
            </div>
			
        );
	}
}
