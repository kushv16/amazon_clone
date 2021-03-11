import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider.js"

function Header() {
  const[{basket}] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img className ="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
      </Link>
      <div className = "header__search">
        <input type="text" className = "header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className ="header__linksContainer">
        <Link className ="header__link" to="/login">
              <span className="header__linkFirstLine">Hello Kush</span>
              <span className="header__linkSecondLine">Sign in</span>
        </Link>
        <Link className ="header__link" to="/checkout">
              <span className="header__linkFirstLine">Returns</span>
              <span className="header__linkSecondLine">& Orders</span>
        </Link>
        <Link className ="header__link" to="/">
            <span className="header__linkFirstLine">Your</span>
            <span className="header__linkSecondLine">Prime</span>
        </Link>
        <Link className ="header__link header__basket">
            <ShoppingBasketIcon className="header__basketIcon"/>
            <span className="header__linkSecondLine header__basketCounter">{basket?.length}</span>
        </Link>
      </div>

    </nav>
  )
}

export default Header
