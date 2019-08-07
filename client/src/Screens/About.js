import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import M from 'materialize-css';

import cover from '../about.jpg'
import Footer from '../Components/Footer';

export default class About extends Component {
    
    render() {
        return (
            <div>
                <Parallax
                    blur={0}
                    bgImage={cover}
                    bgImageAlt="the cat"
                    strength={200}>
                    <div style={{ height: '600px' }} >
                        <h2 style = {{position: 'relative', top: 250, left: 60}}>About Me</h2>
                    </div>


                </Parallax>
                <div style = {{minHeight: 600, backgroundColor: '#2e2e2e', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div class="container" style = {{height: '100%'}}>
                        <p style = {{fontSize: 24, color: 'white'}}>Jayden Robert Gregory Street (born March 28th, 2001) professionally known as Skreet or Skreet2x, is a rapper from Bloomington, Indiana.
                            He first gained buzz via SoundCloud and Instagram with a variety of singles. And he first started to make noise with his song “Can’t Feel My Pain."
                            In March 2019, Skreet’s debut studio album “A Trip To The Moon” was released, not to be confused with any of his previous singles.
                            Skreet claims to be inspired by many other rappers and artists not limited to but including, Nas, J. Cole, Kendrick Lamar, and a mass variety of others.</p>
                    </div>
                
                </div>
                <Footer/>
            </div>
        )
    }
}
