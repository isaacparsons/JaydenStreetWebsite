import React from 'react';
import MerchCard from '../Components/MerchCard'

import merchItem from '../sample-merch-item.jpg'
import whiteHoodieFront from '../merch/hoodie-white-front.jpeg'
import whiteHoodieBack from '../merch/hoodie-white-back.jpeg'
import redHoodieFront from '../merch/hoodie-red-front.jpeg'
import redHoodieBack from '../merch/hoodie-red-back.jpeg'
import blackHoodieFront from '../merch/hoodie-black-front.jpeg'
import blackHoodieBack from '../merch/hoodie-black-back.jpeg'
import blueHoodieFront from '../merch/hoodie-blue-front.jpeg'
import blueHoodieBack from '../merch/hoodie-blue-back.jpeg'


function Merch() {
  return (
        <div>
            <div class="container" style = {{minHeight: 850}}>
                <h3>Merch</h3>
                <div style = {{marginTop: 30, marginBottom: 30, display: 'flex', flexWrap: 'wrap'}}>
                    <MerchCard 
                        imgUrls = {[whiteHoodieFront, whiteHoodieBack]}
                        title = "White Hoodie"
                        price = {59.99}/>
                        
                    <MerchCard 
                        imgUrls = {[redHoodieFront, redHoodieBack]}
                        title = "Red Hoodie"
                        price = {59.99}/>

                    <MerchCard 
                        imgUrls = {[blackHoodieFront, blackHoodieBack]}
                        title = "Black Hoodie"
                        price = {59.99}/>      

                    <MerchCard 
                        imgUrls = {[blueHoodieFront, blueHoodieBack]}
                        title = "Blue Hoodie"
                        price = {59.99}/>       
                </div>
            </div>
        </div>
  );
}

export default Merch;