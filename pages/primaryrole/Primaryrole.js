import React, { useState } from 'react';
import "./Primaryrole.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//import { Link } from 'react-router-dom';

function Primaryrole() {
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const validateFields = () => {
    if (selectedRole === '') {
      setError("Please select your primary role.");
      return false;
    }
    setError(null);
    return true;
  };

  const PosthandleContinue = async () => {
    if (validateFields()) {
      try {
        const response = await axios.post("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/", {
          selectedRole: selectedRole,

        });
        navigate('/selectwork')

        // alert('Save successful')
        console.log("Data Post successful:", response.data);
      } catch (error) {
        console.error("Error occurred while sending options to the server:", error);
      }
    }
  };

  return (
    <div className='container mt-3'>

      <div style={{ marginLeft: "14vh" }}>
        <h4> <b>Baap</b> </h4>
      </div>

      <div style={{ marginLeft: "18vh", marginTop: "7vh" }}>
        <h2 className='mt-2'>What's your primary role?</h2>
        <p>This will help us tailor Asana for you. We may also reach out to help you right to Asana products for your team.</p>
      </div>

      <div style={{ marginLeft: "18vh", marginTop: "7vh" }}>
        <select id="team" style={{ width: "50vh", border: "none", borderBottom: '1px solid #ced4da' }} onChange={handleRoleChange} value={selectedRole}>
          <option value="" disabled>Choose one</option>
          <option value="Team member/individual contributor">Team member/individual contributor</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="Executive (e.g VP or C-suite)">Executive (e.g VP or C-suite)</option>
          <option value="Business owner">Business owner</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
      </div>

      <div className='d-flex' style={{ marginLeft: "18vh", marginTop: "28vh" }}>
        <button type="button" className='btn btn-info pl-4 pr-4' onClick={PosthandleContinue}>Continue</button>
      </div>

    </div>
  )
}

export default Primaryrole;
