import React, { Component } from 'react'

import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Components/Header';
import Home from './Screens/Home'

import './App.css';


import About from './Screens/About'
import Merch from './Screens/Merch'
import Contact from './Screens/Contact'
import Cart from './Screens/Cart/Cart'
import YoutubeFooter from './Components/YoutubeFooter';
import Footer from './Components/Footer';
import YoutubeFooterContext from './Context/YoutubeFooterContext';
import CartContext from './Context/CartContext';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.updateYoutubeFooter = (details) => {
      this.setState({
        youtubeFooter : {...details, updateYoutubeFooter: this.updateYoutubeFooter}
      })
    }

    this.addToCart = (item) => {
      var newItems = this.state.cart.items
      item.id = newItems.length
      newItems.push(item)
      this.setState({
        cart: {
          ...this.state.cart,
          items: newItems
        }
      })
    }

    this.changeQuantity = (updatedItem) => {
      var updatedItems = this.state.cart.items
      updatedItems.forEach((element, index) => {
        if(element.id == updatedItem.id){
          if(updatedItem.quantity == 0){
            updatedItems.splice(index, 1)
          } else {
            element.quantity = updatedItem.quantity
          }
        }
      })
      this.setState({
        cart: {
          ...this.state.cart,
          items: updatedItems
        }
      })
    }

    this.emptyCart = () => {
      this.setState({
        cart: {
          ...this.state.cart,
          items: []
        }
      })
    }

    this.state = {
      youtubeFooter : {
        title: "Upbringing",
        author: "skreet2x",
        url: "https://www.youtube.com/watch?v=7Auf9rBvNbY",
        isVisible: false,
        updateYoutubeFooter: this.updateYoutubeFooter
      },
      cart: {
        items: [],
        addToCart : this.addToCart,
        emptyCart: this.emptyCart,
        changeQuantity: this.changeQuantity
      }
    }
  }

  render() {

    var {isVisible, updateYoutubeFooter, title, author, url} = this.state.youtubeFooter
    return (
      <YoutubeFooterContext.Provider value = {this.state.youtubeFooter}>
        <CartContext.Provider value = {this.state.cart}>
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
          </CartContext.Provider>
      </YoutubeFooterContext.Provider>
    );
  }
}
