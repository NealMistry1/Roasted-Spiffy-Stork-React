import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Roasted Spiffy Stork</title>
        <meta property="og:title" content="Roasted Spiffy Stork" />
      </Helmet>
      <div className="login-desktop4">
        <div className="login-frame152 input">
          <div className="login-search"></div>
        </div>
        <div className="login-frame153 input">
          <div className="login-search1"></div>
        </div>
        <span className="login-text">
          <span>Login</span>
        </span>
        <span className="login-text02">
          <span>username</span>
        </span>
        <span className="login-text04">
          <span>
            <span>password</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <Link to="/homepage" className="login-navlink">
          <div className="login-frame166">
            <span className="login-text09">
              <span>check credentials</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Login
