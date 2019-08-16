import React, { Component } from 'react'
import { Modal, Slider,Slide } from 'react-materialize';

export default class MerchCard extends Component {

    state = {
        sizeColors : ['#9fa8da', '#9fa8da', '#9fa8da', '#9fa8da', '#9fa8da']
    }

    toggle = (position) => {
        var newColors = ['#9fa8da', '#9fa8da', '#9fa8da', '#9fa8da', '#9fa8da']
        this.state.sizeColors.forEach((element, index) => {
            if(index === position){
                newColors[index] = element == '#5c6bc0' ? '#9fa8da' : '#5c6bc0'
            }
        })
        this.setState({sizeColors: newColors})
    }
    render() {
        var {imgUrls, title, price} = this.props
        var {sizeColors} = this.state
        return (
            <Modal header={title} trigger={
                <div style = {{width: 300, margin: 10}}>
                    <div class="card z-depth-3">
                        <div class="card-image">
                            <img src={imgUrls[0]}/>
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20}}>
                            <span class="card-title">{title}</span>
                            <h5>{price}</h5>
                        </div>
                    </div>
                </div>}>

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
                        <a style = {{margin: 10, width: '100%'}} class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>add to cart</a>
                    </div>
                    
                </div>
            </Modal>
        )
    }
}
