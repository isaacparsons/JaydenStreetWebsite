import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from '../Components/Footer';
import MerchCard from '../Components/MerchCard'

import merchItem from '../sample-merch-item.jpg'


function Merch() {
  return (
        <div>
            <div class="container" style = {{height: 850}}>
                <h3>Merch</h3>
                <div style = {{marginTop: 30, marginBottom: 30}}>
                <div class="row" style = {{display: 'flex', flexDirection: 'row'}}>
                    <MerchCard 
                        imgUrl = {merchItem}
                        title = "Long Sleeve Shirt"
                        price = "$32.00"/>
                    <MerchCard 
                        imgUrl = {merchItem}
                        title = "Long Sleeve Shirt"
                        price = "$32.00"/>

                    <MerchCard 
                        imgUrl = {merchItem}
                        title = "Long Sleeve Shirt"
                        price = "$32.00"/>          
                </div>
                </div>
            </div>
            <Footer/>
        </div>
  );
}

export default Merch;