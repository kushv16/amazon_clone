import React ,{useState} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom"
import {auth} from "./firebase"

function Login() {
  const history = useHistory()
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const login = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email,password)
      .then((auth) => {
        //logged in then redirect to homepage
        history.push('/')
      })
      .catch(e => alert(e.message))
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        //create user and then redirect to homepage
        history.push('/')

      })
      .catch(e => alert(e.message))
    
  }

  return (
    <div class="login">
      <Link to="/">
        <img class="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
      </Link>
      <div class="login__container">
        <h2>Sign-In</h2>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="login__signIn" onClick={login}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <small>New to Amazon?</small>
        <button className="login__register" onClick={register}>Create your Account</button>
      </div>
    </div>
  )
}

export default Login
