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
              <p className="subheading">Welcome To</p>
              <p className="heading">MACEKART</p>            </div>

            <div className="container">
              <div className="componentsofsignup">
                  <input type="text" id="username" name="username" placeholder="Username" />
                  <input type="password" id="password" name="password" placeholder="Password" />

              </div>
            </div>
            <div className="terms">
              <a href="#">Forgot Password</a>
            </div>

            <div className="LOGIN">
              <button className="register-btn">LOGIN</button>
            </div>
          </div>

      </div>

    </div>
  )
}

export default Login
