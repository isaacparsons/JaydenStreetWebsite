import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Divider, Icon } from 'react-materialize';

const activeTabColor = '#650200'

const Header = () => (
    <div class="navbar-fixed">
        <nav>
            <div style = {{paddingLeft: 15}}class="nav-wrapper grey darken-2">
                <NavLink class="brand-logo" to ="/">Skreet2x</NavLink>
                <MobileNavBar/>
                <DesktopNavBar/>
            </div>
        </nav>
    </div>
)

const MobileNavBar = () => {
    return(
        <div className = "hide-on-med-and-up">
            <Dropdown style = {{position: 'relative'}} trigger={<a><Icon>menu</Icon></a>}>
                <Link to ="/about">About</Link>
                <Divider/>
                <Link to ="/merch">Merch</Link>
                <Divider/>
                <Link to ="/contact">Contact</Link>
                <Divider/>
                </Dropdown>
            </div>
    )
}

const DesktopNavBar = () => {
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
        </ul>
    )
}
export default Header

