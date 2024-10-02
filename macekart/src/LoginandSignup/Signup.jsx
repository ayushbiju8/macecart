import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "../firebase/Firbase"
import { collection,addDoc } from 'firebase/firestore';

function Signup() {
  const navigate = useNavigate();
  const userRef = collection(db,"userdetails");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [username,setUsername]=useState("");
  
  const signup = async ()=>{
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      const newUser = {
        email : email,
        firstname :firstname,
        lastname :lastname,
        username :username,
      }
      const createdUser = await addDoc(userRef,newUser);
      console.log("Data Added");
      navigate("/")
    }catch(err){
      const errorCode = err.code;
      const errorMessage = err.Message;
      console.log(errorCode);
    }
  };

  return (
    <div>
      <div className="body">
        <div className="comp">
          <div className="LeftofSignup">

          </div>
          <div className="RightofSignup">
            
            <div className="title">
              <h1>SIGNUP</h1>
            </div>
            <div className="subtitle">
              <h4>Create your account</h4>
            </div>
            <div className="container">
              <div className="componentsofsignup">
                <div className="componentsofsignupleftside">
                  <input type="text" id="firstname" name="firstname" placeholder="First Name" 
                  value={firstname}
                  onChange={(e)=>{setFirstname(e.target.value)}}
                  />
                  <input type="text" id="username" name="username" placeholder="Username" 
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  />
                  <input type="password" id="password" name="password" placeholder="Password" 
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
                <div className="componentsofsignuprightside">
                  <input type="text" id="lastname" name="lastname" placeholder="Last Name" 
                  value={lastname}
                  onChange={(e)=>{setLastname(e.target.value)}}
                  />
                  <input type="email" id="email" name="email" placeholder="Email" 
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  <input type="password" id="repassword" name="repassword" placeholder="Re-enter Password" 
                  value={confirmpassword}
                  onChange={(e)=>{setConfirmpassword(e.target.value)}}
                  />
                </div>
              </div>
            </div>
            <div className="terms">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            <div className="signin">
              <button className="Signup-btn" onClick={signup}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
