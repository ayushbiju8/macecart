import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/Firbase"
import {useNavigate} from "react-router-dom"
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</link>
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const [errormessage,setErrormessage]=useState("");
  const login = async ()=>{
    try {
      await signInWithEmailAndPassword(auth,email,password);
      setErrormessage("")
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        setErrormessage("Wrong Password")
      }
      if (errorCode === 'auth/user-not-found') {
        setErrormessage("Create an Account")
      }else {
        console.error("Error signing in: ", errorMessage);
        setErrormessage("Invalid Credentials")
      }
    }
  };
  return (
    <div>
      <div className="body">

          <div className="LEFT">

          </div>
          <div className="RIGHT">
            <div className="title">
              <p className="subheadingoflogin">Welcome To</p>
              <p className="headingoflogin">MACEKART</p>            </div>

            <div className="containeroflogin">
              <div className="componentsoflogin">
                  <input type="text" id="username" name="username" placeholder="email" 
                   value={email}
                   onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  <input type="password" id="password" name="password" placeholder="Password" 
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  />
              </div>
            </div>
            <div className="termsoflogin">
              <a href="#">Forgot Password</a>
            </div>
            <div className="LOGIN">
              <button className="Login-btn" onClick={login}>LOGIN</button>
              <div className="login-result">{errormessage}</div>
            </div>
          </div>

      </div>

    </div>
  )
}
export default Login
