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
  const login = async ()=>{
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode=='auth/wrong-password') {
        alert("Wrong Password")
      }else if (errorCode === 'auth/user-not-found') {
        alert("User does not exist");
      }else {
        console.error("Error signing in: ", errorMessage);
        alert("Error signing in: ", errorMessage);
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
            <p className="subheading">Welcome To</p>
            <p className="heading">MACEKART</p>
          </div>

          <div className="container">
            <div className="componentsofsignup">
              <input type="text" id="email" name="email" placeholder="Email" 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              />
              <input type="password" id="password" name="password" placeholder="Password" 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </div>
          <div className="terms">
            <a href="#">Forgot Password</a>
          </div>
          <div className="LOGIN">
            <button className="register-btn" onClick={login}>LOGIN</button>
          </div>
        </div>

      </div>

    </div>
  )
}
export default Login
