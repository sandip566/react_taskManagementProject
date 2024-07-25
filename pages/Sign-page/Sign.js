import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login-page/Login.css";
import './Sign.css'
        
export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  function validateEmail(value) {
    if (!value) {
      setEmailError("Email is required");
      setIsValid(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email address");
         setIsValid(false);
      return false;
    }
    setEmailError("");
    setIsValid(true);
    return true;
  }

  function validatePassword(value) {
    if (!value) {
      setPasswordError("Password is required");
      setIsValid(false);
      return false;
    } else if (value.length < 7) {
      setPasswordError("Password must be at least 7 characters long");
      setIsValid(false);
      return false;
    }
    setPasswordError("");
    setIsValid(true);
    return true;
  }

  function submit(e) {
    e.preventDefault();
    let isValidForm = true;

    // Validate email
    if (!validateEmail(email)) {
      isValidForm = false;
    }
    
    // Validate password
    if (!validatePassword(password)) {
      isValidForm = false;
    }

    // If form is valid, proceed with submitting the form
    if (isValidForm) {
      console.log("Form submitted successfully");
      // Add your form submission logic here, such as calling an API
    } else {
      console.log("Form contains validation errors");
      // Optionally, you can display a message to the user indicating validation errors
    }
  }

  return (
    <div className="container-fluid hidden">
      <div className="row">
        <div className="col-md-5 bg-img">
          <div style={{}}>
            <h2 className="image-css"
              style={{
               
                marginTop: "8vh",
                marginLeft: "6vh",
                fontSize: "30px",
                fontFamily: "Baloo 2, cursive",
              }}
            >
              Project management <br /> made easy
            </h2>
            <div></div>
          </div>
        </div>
         

        <div className="col-md-7">
          <div style={{ marginTop: "15vh" }}>
            <h2 style={{ textAlign: "center" }}>Welcome to baap</h2>
            <p style={{ textAlign: "center" }}>To get started please login</p>

            <form className="mx-auto" style={{ maxWidth: "400px" }} onSubmit={submit}>
             
              <div className="lineHeight3 " >
                <label htmlFor="email" className="form-label p-0 m-0" >
                  Email Address :
                </label>
                <input 
                  type="email" 
                  className="form-control form "  
                  id="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  required
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="lineHeight3" style={{ }}>
                <label htmlFor="password" className="form-label p-0 m-0" style={{}}>
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control form "
                  style={{}}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  required
                />
                {passwordError && (
                  <div className="text-danger">{passwordError}</div>
                )}
              </div>
              

              

              <div className="mt-2">
                <button type="button" disabled={!isValid} onClick={submit} className="btn  btn-block btn-info" style={{border:"1px solid skyblue"}}>
                  Login
                </button>
              </div>
              <label>Register new user <Link to="/LOGIN">sign up</Link></label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
