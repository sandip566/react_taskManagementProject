import React, { useState, useRef } from "react";
import "./Whatsappotp.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Whatsapp() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpSent, setOtpSent] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const otpInputRefs = useRef([]);
  const navigate = useNavigate(); // Initialize navigate

  function validateMobile(value) {
    if (!value) {
      setMobileError("Mobile number is required");
      setIsValid(false);
      return false;
    } else if (!/^\d{10}$/.test(value)) {
      setMobileError("Invalid mobile number");
      setIsValid(false);
      return false;
    }
    setMobileError("");
    setIsValid(true);
    return true;
  }

  async function sendOtp() {
    try {
      const waitingToastId = toast.info("Sending OTP...", { autoClose: false });

      const response = await fetch("https://gxppcdmn7h.execute-api.ap-south-1.amazonaws.com/authgw/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: mobile,
          groupId: 1703228300417
        })
      });

      toast.dismiss(waitingToastId);

      if (response.ok) {
        setOtpSent(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again later.");
    }
  }

  async function submitOtp() {
    try {
      const response = await fetch("https://4r4iwhot12.execute-api.ap-south-1.amazonaws.com/auth/auth/validateOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: mobile,
          otp: parseInt(otp.join(""), 10),
        })
      });

      if (response.ok) {
        console.log("OTP is correct. Proceed to next page.");
        // Navigate to '/name' route
        navigate("/name");
      } else {
        setOtpError("Incorrect OTP");
        toast.error("Incorrect OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error validating OTP:", error);
      toast.error("Failed to validate OTP. Please try again later.");
    }
  }

  function handleOtpChange(index, value) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1].focus();
    }
  }

  function handleOtpKeyPress(e, index) {
    if (e.key === 'Enter' && index === otp.length - 1) {
      submitOtp();
    }
  }

  return (
    <div className="container-fluid hidden">
      <ToastContainer />
      <div className="row">
        <div className="col-md-5 bg-img">
          {/* Your image or content */}
        </div>

        <div className="col-md-7">
          <div style={{ marginTop: "13vh" }}>
            {!otpSent ? (
              <form className="mx-auto" style={{ maxWidth: "400px" }}>
                <div className="lineHeight3">
                  <label htmlFor="mobile" className="form-label p-0 mar">
                    Enter your Mobile Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      validateMobile(e.target.value);
                    }}
                    required
                  />
                  {mobileError && <div className="text-danger">{mobileError}</div>}
                </div>

                <div className="mt-4 ">
                  <button
                    type="button"
                    className="form-control btn btn-info"
                    onClick={sendOtp}
                    disabled={!isValid}
                  >
                    Send OTP
                  </button>
                </div>
              </form>
            ) : (
              <form className="mx-auto" style={{ maxWidth: "400px" }}>
                <div className="lineHeight3">
                  <label htmlFor="otp" className="form-label p-0 mt-5 ">
                    Enter OTP
                  </label>
                  <div className="otp-input-container">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type={showOtp ? "text" : "password"}
                        className="otp-input"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyPress={(e) => handleOtpKeyPress(e, index)}
                        ref={(ref) => (otpInputRefs.current[index] = ref)}
                      />
                    ))}
                    <span className="otp-icon" onClick={() => setShowOtp(!showOtp)}>
                      {showOtp ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {otpError && <div className="text-danger">{otpError}</div>}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="form-control btn btn-info"
                    onClick={submitOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
