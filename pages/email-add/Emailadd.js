import React, { useState } from "react";
import axios from 'axios';
import "./Emailadd.css";
import frontimg from '../../Assets/Group 41.png';
import backimg from '../../Assets/Group 30.png';
import { Link } from "react-router-dom";
function Emailadd() {
  const [email, setEmail] = useState("");
  const [teammateEmail1, setTeammateEmail1] = useState("");
  const [teammateEmail2, setTeammateEmail2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [teammateEmail1Error, setTeammateEmail1Error] = useState("");
  const [teammateEmail2Error, setTeammateEmail2Error] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const navigate = useNavigate(); 
  const validateEmail = (value) => {
    if (!value) {
      return false; // Empty email is considered invalid
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return false; // Invalid email format
    }
    return true; // Email is valid
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    const isEmailValid = validateEmail(email);
    const isTeammateEmail1Valid = validateEmail(teammateEmail1);
    const isTeammateEmail2Valid = validateEmail(teammateEmail2);

    setEmailError(isEmailValid ? "" : "Invalid email address");
    setTeammateEmail1Error(isTeammateEmail1Valid ? "" : "Invalid email address");
    setTeammateEmail2Error(isTeammateEmail2Valid ? "" : "Invalid email address");

    if (formSubmitted && isEmailValid && isTeammateEmail1Valid && isTeammateEmail2Valid) {
      const formData = {
        email: email,
        teammateEmail1: teammateEmail1,
        teammateEmail2: teammateEmail2
      };

      axios.post('https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/', formData)
        .then(response => {
          console.log('Form submitted successfully!', response.data);
          alert('Data posted successfully....');
          
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h4><b>Baap</b></h4>
          <div className="margin-left">
            <div className="font">
              <p>Invite a teammate to try Baap together</p>
            </div>
            <div>
              <p>You can start small by inviting a trusted teammate to learn how Baap works with you.</p>
            </div>
            <div style={{ marginTop: "2vw" }}>
              <input
                type="text"
                placeholder="Your Email"
                className="setInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formSubmitted && !email && <div className="text-danger">Please enter your email</div>}
              {formSubmitted && emailError && <div className="text-danger">{emailError}</div>}
              <br />
              <input
                type="text"
                placeholder="Teammate's Email"
                className="setInput"
                value={teammateEmail1}
                onChange={(e) => setTeammateEmail1(e.target.value)}
              />
              {formSubmitted && !teammateEmail1 && <div className="text-danger">Please enter teammate's email</div>}
              {formSubmitted && teammateEmail1Error && <div className="text-danger">{teammateEmail1Error}</div>}
              <br />
              <input
                type="text"
                placeholder="Another Teammate's Email"
                className="setInput"
                value={teammateEmail2}
                onChange={(e) => setTeammateEmail2(e.target.value)}
              />
              {formSubmitted && !teammateEmail2 && <div className="text-danger">Please enter another teammate's email</div>}
              {formSubmitted && teammateEmail2Error && <div className="text-danger">{teammateEmail2Error}</div>}
            </div>
            <button type="button" className="btn btn-info" onClick={handleSubmit} style={{marginTop:"25px"}}>
            <Link to='/home' style={{textDecoration:"none", color:"white"}}>Continue</Link>  
            </button>

            <button type="button" className="btn btn-light ml-5 pl-5 pr-5"  style={{marginTop:"25px"}}>
              skip
            </button>

          </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img
              src={backimg}
              alt=""
              style={{
                position: "absolute",
                top: "1",
                marginLeft:"100%",
                marginTop:"-71%",
                width: "36vw",
                height: "32vw",
              }}
            />
            <img
              src={frontimg}
              alt=""
              style={{
                position: "fixed",
                top: "56%",
                left: "78%",
                transform: "translate(-50%, -50%)",
                width: "36vw",
                height: "32vw",
              }}
            />
          </div>
        </div>
      </div>
  );
}

export default Emailadd;
