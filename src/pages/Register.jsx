import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <nav class="nav-bar">
      <div class="dropbox-logo-container">
        <NavLink to="/" class="dropbox" title="Dropbox">
          <span class="span-logo">
            <svg
              width="26"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </span>
          <span class="dropbox-text">Dropbox</span>
        </NavLink>
      </div>
    </nav>

    <div class="container">
      <div class="header">Sign up or log in</div>
      <div class="sub-header">
        We recommend using your <strong>work email</strong>.
      </div>

      <div class="social-login">
        <button class="google-btn">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Google logo"
            width="23"
          />
          Continue with Google
        </button>
        <button class="apple-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple logo"
            width="20"
          />
          Continue with Apple
        </button>
      </div>

      <div class="or-divider">or</div>

      <form method="POST" novalidate="">
        <div class="auth-field">
          <label class="input-label" for="email">Email</label>
          <input
            id="email"
            type="email"
            class="input-field"
            name="susi_email"
            autocomplete="username"
            required
            placeholder="Enter your email"
          />
          <div
            id="email-error"
            class="error-message"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>
        <div class="submit-container">
          <button class="submit-button" type="submit">
            <NavLink href="/" class="button-link">
              <span class="button-text">Continue</span>
            </NavLink>
          </button>
        </div>
      </form>
    </div>
    <footer class="footer-register">
      <NavLink href="#">Privacy & terms</NavLink>
      <NavLink href="#">Cookie policy</NavLink>
      <NavLink href="#">Cookies & CCPA preferences</NavLink>
      <NavLink href="#">AI Principles</NavLink>
    </footer>
    <hr class="reg-hr" />

    </>
  )
}

export default Register;