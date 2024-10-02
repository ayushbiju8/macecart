import React from 'react'
import "./Login.css"
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</link>
function Login() {
  return (
    <div>
      <div className="body">

          <div className="LEFT">

          </div>
          <div className="RIGHT">
            <div className="title">
              <p className="subheadingoflogin">Welcome To</p>
              <p className="headingoflogin">MACEKART</p>      
          </div>

            <div className="containeroflogin">
              <div className="componentsoflogin">
                  <input type="text" id="usernameoflogin" name="usernameoflogin" placeholder="Username" />
                  <input type="password" id="passwordoflogin" name="passwordoflogin" placeholder="Password" />

              </div>
            </div>
            <div className="termsofLogin">
              <a href="#">Forgot Password</a>
            </div>

            <div className="LOGIN">
              <button className="Login-btn">LOGIN</button>
            </div>
          </div>

      </div>

    </div>
  )
}

export default Login
