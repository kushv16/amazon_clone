import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
            <Route path="/login">
              Login Page
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
