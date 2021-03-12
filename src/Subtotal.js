import React from 'react'
import {useStateValue} from "./StateProvider"
import "./Subtotal.css"
import {getBasketTotal} from "./Reducer"
import CurrencyFormat from "react-currency-format"

function Subtotal() {
  const[{basket}] = useStateValue();
  console.log(getBasketTotal(basket))
  return (
    <div className="subtotal">
        <CurrencyFormat
          thousandSpacing={'2s'}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={"₹"}
          renderText={ (value) => (
            <>
              <p>Subtotal ({basket.length} items):<strong className="subtotal__Price">{value}</strong></p>
              <small className="subtotal__gift">
                <input type="checkbox"/>This order contains a gift
              </small>
            </>
          )}
        />
      <button >Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
