import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,title,price,rating,image}) {

  const[{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type:"DELETE_FROM_BASKET",
      id:id,
    })
  }

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image}/>
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__title">
              {title}
          </div>  
          <div className="checkoutProduct__price">
              <small>₹</small>
              <strong>{price}</strong>
          </div>
          <div className="checkProduct__rating">
            {
              Array(rating).
              fill().
              map((_) => (
                <StarIcon className="checkoutProduct__ratingStar"/>
              ))
            }
          </div>
          <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
