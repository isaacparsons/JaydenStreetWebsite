import React, { Component } from 'react'

import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Components/Header';
import Home from './Screens/Home'

import './App.css';


import About from './Screens/About'
import Merch from './Screens/Merch'
import Contact from './Screens/Contact'
import Cart from './Screens/Cart'
import YoutubeFooter from './Components/YoutubeFooter';
import Footer from './Components/Footer';
import YoutubeFooterContext from './Context/YoutubeFooterContext';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateYoutubeFooter = (details) => {
      this.setState({
        youtubeFooter : {...details, updateYoutubeFooter: this.updateYoutubeFooter}
      })
    }

    this.state = {
      youtubeFooter : {
        title: null,
        author: null,
        url: null,
        isVisible: false,
        updateYoutubeFooter: this.updateYoutubeFooter
      }
    }
  }

  render() {

    var {isVisible, updateYoutubeFooter, title, author, url} = this.state.youtubeFooter
    return (
      <YoutubeFooterContext.Provider value = {this.state.youtubeFooter}>
        <Router>
          <div>
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/merch" component={Merch} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
          </div>
        </Router>
        <Footer/>
        <YoutubeFooter 
            title = {title}
            author = {author}
            url = {url}
            isVisible = {isVisible}
            updateDetails = {updateYoutubeFooter}/>
      </YoutubeFooterContext.Provider>
    );
  }
}
