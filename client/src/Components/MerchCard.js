import React, { Component } from 'react'
import { Modal, Slider,Slide } from 'react-materialize';
import CartContext from '../Context/CartContext';

export default class MerchCard extends Component {
    static contextType = CartContext

    notActiveColor = '#9fa8da'
    activeColor = '#5c6bc0'
    sizes = ['S', 'M', 'L', 'XL', 'XXL']

    state = {
        isModalOpen : false,
        sizeColors : [this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor]
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    toggle = (position) => {
        var {sizeColors} = this.state
        var newColors = [this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor, 
            this.notActiveColor]
        newColors[position] = sizeColors[position] == this.activeColor ? this.notActiveColor : this.activeColor

        this.setState({sizeColors: newColors})
    }

    addToCart = () => {
        var selectedSizePosition = this.state.sizeColors.indexOf(this.activeColor)
        var selectedSize = this.sizes[selectedSizePosition]
        var {title, price, imgUrls} = this.props
        var quantity = 1
        var currency = "USD"
        this.context.addToCart({
            title,
            price,
            currency,
            size: selectedSize,
            quantity,
            img: imgUrls[0]
        })
        this.toggleModal()
    }

    addToCartBtn = () => {
        var {sizeColors} = this.state
        var noneSelected = sizeColors.reduce((result, element) => {
            return result && (element == this.notActiveColor)
          }, true)
        var style = noneSelected ? "waves-effect waves-light btn disabled" : "waves-effect waves-light btn"
        
        return <a style = {{margin: 10, width: '100%'}} class={style} onClick = {this.addToCart}>
            <i class="material-icons left">add_shopping_cart</i>add to cart</a>
    }

    
    render() {
        var {imgUrls, title, price} = this.props
        var {sizeColors, isModalOpen} = this.state
        return (
            <div>
                <div style = {{width: 300, margin: 10}} onClick = {this.toggleModal}>
                    <div class="card z-depth-3">
                        <div class="card-image">
                            <img src={imgUrls[0]}/>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20}}>
                            <span class="card-title">{title}</span>
                            <h5>{`$${price}`}</h5>
                        </div>
                    </div>
                </div>
                <Modal header={title} open = {isModalOpen}>
                    <div style = {{display: 'flex', flexWrap: 'wrap', height: '100%'}}>
                        <div style = {{width: 300, height: 'auto'}}>
                            <Slider>
                                <Slide image={<img src={imgUrls[0]}/>}/>
                                <Slide image={<img src={imgUrls[1]}/>}/>
                            </Slider>
                        </div>
                        <div style = {{padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <h5>{price}</h5>
                            <div>
                                <h5>size</h5>
                                <div>
                                    <a style ={{margin: 5, backgroundColor: sizeColors[0]}} class="waves-effect btn" onClick = {() => this.toggle(0)}>small</a>
                                    <a style ={{margin: 5, backgroundColor: sizeColors[1]}} class="waves-effect btn" onClick = {() => this.toggle(1)}>medium</a>
                                    <a style ={{margin: 5, backgroundColor: sizeColors[2]}} class="waves-effect btn" onClick = {() => this.toggle(2)}>large</a>
                                    <a style ={{margin: 5, backgroundColor: sizeColors[3]}} class="waves-effect btn" onClick = {() => this.toggle(3)}>x-large</a>
                                    <a style ={{margin: 5, backgroundColor: sizeColors[4]}} class="waves-effect btn" onClick = {() => this.toggle(4)}>xx-large</a>
                                </div>
                            </div>
                            {this.addToCartBtn()}
                        </div>
                        
                    </div>
                </Modal>
            </div>
        )
    }
}
