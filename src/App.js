import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import React,{useEffect} from "react"

function App() {

  const[{user},dispatch] = useStateValue();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user is logged in...
        dispatch(
          {
            type:"SET_USER",
            user:authUser 
          }
        )
      }
      else{
        //user is logged out...
        dispatch(
          {
            type:"SET_USER",
            user:null
          }
        )
      }
    })

    return () => {
      //clean up code goes here
      unsubscribe();
    }

  }
    ,[]
  )

  console.log(user)
  
  return (
    <Router>
       <div className="App">
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
