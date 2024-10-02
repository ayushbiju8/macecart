import React from 'react'
import "./Signup.css"
function Signup() {
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
                  <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                  <input type="text" id="username" name="username" placeholder="Username" />
                  <input type="password" id="password" name="password" placeholder="Password" />
                </div>
                <div className="componentsofsignuprightside">
                  <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                  <input type="email" id="email" name="email" placeholder="Email" />
                  <input type="password" id="repassword" name="repassword" placeholder="Re-enter Password" />
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
              <button className="Signup-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
