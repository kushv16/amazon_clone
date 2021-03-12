import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider.js"
import {auth} from "./firebase"
function Header() {
  const[{user,basket}] = useStateValue();

  const login = () =>
  {
    if(user){
      auth.signOut();
    }
  }
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
        <Link className ="header__link" to={!user && "/login"}>
              <span className="header__linkFirstLine">Hello {user?.email}</span>
              <span className="header__linkSecondLine" onClick={login}>{user?"Sign out":"Sign in"}</span>
        </Link>
        <Link className ="header__link" to="/checkout">
              <span className="header__linkFirstLine">Returns</span>
              <span className="header__linkSecondLine">& Orders</span>
        </Link>
        <a href="https://www.primevideo.com/region/eu/ref=dv_web_force_root" className="header__link">
            <span className="header__linkFirstLine">Your</span>
            <span className="header__linkSecondLine">Prime</span>
        </a>
        <Link className ="header__link header__basket" to="/checkout">
            <ShoppingBasketIcon className="header__basketIcon"/>
            <span className="header__linkSecondLine header__basketCounter">{basket?.length}</span>
        </Link>
      </div>

    </nav>
  )
}

export default Header
