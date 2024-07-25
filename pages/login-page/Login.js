import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false); // Define isValid state

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

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      isValidForm = false;
    } else {
      setPasswordError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValidForm = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValidForm = false;
    }

    setIsValid(isValidForm); // Update isValid state

    if (isValidForm) {
      console.log(email, password);
    }
  }

  return (
    <div className="container-fluid hidden">
      <div className="row">
        <div className="col-md-5 bg-img">
          <div style={{}}>
            <h2
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
          <div style={{ marginTop: "13vh" }}>
            <h2 style={{ textAlign: "center" }}>Welcome to baap</h2>
            <p style={{ textAlign: "center" }}>To get started please login</p>

            <form className="mx-auto" style={{ maxWidth: "400px" }}>
              <div className="lineHeight3">
                <label htmlFor="email" className="form-label p-0 m-0">
                  Email Address :
                </label>
                <input
                  type="email"
                  className="form-control"
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
              <div className="lineHeight3">
                <label htmlFor="password" className="form-label p-0 m-0">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
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
              <div className="lineHeight3">
                <label htmlFor="confirmPassword" className="form-label p-0 m-0">
                  Confirm Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                
                {confirmPassword !== password && (
                  <div className="text-danger">Passwords do not match</div>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="form-control btn btn-info"
                  onClick={submit}
                  disabled={!isValid} 
                >
                  <Link
                     to="/name"
                    style={{ color: "white", textDecoration: "none" }}
                  >

                    Login
                  </Link>
                </button>

                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
