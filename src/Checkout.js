import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"

import {useStateValue} from "./StateProvider"

function Checkout() {

  const[{basket}] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__banner">
        <h2>Pay faster for all your shopping needs <span className="checkout__amazonpay">with Amazon Pay balance</span></h2>
        <p>Get Instant refund on cancellations | Zero payment failures</p>
      </div>
      {basket?.length === 0 ?(
      <div>
        <h2>Your Shopping Basket is Empty</h2>
        <p>You have no items in your basket.To buy one or more items, click on "Add to Basket" next to the item</p>
      </div>
      )
      :(
      <div>          
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {
          basket.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            />
          ))
        }
      </div>
      )}
    </div>
  )
}

export default Checkout
