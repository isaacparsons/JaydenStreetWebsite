import React, { Component } from 'react'

import { NavLink, Link } from "react-router-dom";
import { Dropdown, Divider, Icon } from 'react-materialize';
import Logo from '../logo.svg'
import cartContext from '../Context/cartContext';

const activeTabColor = '#650200'


export default class Header extends Component {
    static contextType = cartContext;

    render() {
        var isCartEmpty = this.context.isEmpty
        console.log(isCartEmpty)
        return (
            <div class="navbar-fixed">
                <nav>
                    <div style = {{paddingLeft: 15}} class="nav-wrapper grey darken-2">
                        <Link class="brand-logo valign-wrapper" to ="/">
                            <img style = {{height: 50}} src = {Logo}/>
                        </Link>
                        <MobileNavBar/>
                        <DesktopNavBar/>
                    </div>
                </nav>
            </div>
        )
    }
}

const MobileNavBar = (props) => {
    return(
        <div className = "hide-on-med-and-up">
            <Dropdown style = {{position: 'relative'}} trigger={<a><Icon>menu</Icon></a>}>
                <Link to ="/about">About</Link>
                <Divider/>
                <Link to ="/merch">Merch</Link>
                <Divider/>
                <Link to ="/contact">Contact</Link>
                <Divider/>
                <Link to ="/cart">
                </Link>
                </Dropdown>
            </div>
    )
}

const DesktopNavBar = (props) => {
    return(
        <ul class="right hide-on-small-only">
            <li>
                <NavLink to ="/about" activeStyle={{color: activeTabColor}}>About</NavLink>
            </li>
            <li>
                <NavLink to ="/merch" activeStyle={{color: activeTabColor}}>Merch</NavLink>
            </li>
            <li>
                <NavLink to ="/contact" activeStyle={{color: activeTabColor}}>Contact</NavLink>
            </li>
            <li>
                <NavLink to ="/cart" activeStyle={{color: activeTabColor}}>
                    <div>
                        <div style = {{
                            paddingLeft: 5,
                            paddingRight: 5,
                            display: 'flex', 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            backgroundColor: 'white'}}>
                            <i style = {{color: 'black'}} class="material-icons left">shopping_cart</i>
                            <h6 style = {{color: 'black'}}>0</h6>
                        </div>
                    </div>
                </NavLink>
            </li>
        </ul>
    )
}

