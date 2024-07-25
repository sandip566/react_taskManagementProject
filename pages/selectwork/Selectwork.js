import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Selectwork.css";

function Selectwork() {
  const options = [
    "Administrative Assistant",
    "Communications",
    "Customer Experience",
    "Data or Analytics",
    "Design",
    "Education Professional",
    "Engineering",
    "Other"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    // Clear error when options are selected
    setError(null);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const validateFields = () => {
    if (selectedOptions.length < 3 || selectedOptions.length > 3) {
      setError("Please select at least three option.");
      return false; // Return false if validation fails
    }
    setError(null); // Clear error if validation succeeds
    return true;
  };

  const PosthandleContinue = async () => {
    if (validateFields()) {
      try {
        const response = await axios.post("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/", {
          selectedOptions: selectedOptions
        });
        console.log("Data Post successful:", response.data);
        // Navigate to the desired route on successful post
        navigate('/objective');
      } catch (error) {
        console.error("Error occurred while sending options to the server:", error);
      }
    }
  };

  return (
    <div className="container mt-3">
      <h4><b>Baap</b></h4>
      <div className="ml-5">
        <h2 className="mt-5">Which function best describes your work?</h2>
        <p>
          This will help us tailor baap for you. We may also reach out to help<br/>
          you find the right baap products for your team.
        </p>
        <div className="selected-options-box" onClick={toggleDropdown}>
          {selectedOptions.map((option) => (
            <span key={option}>{option}</span>
          ))}
          <span className="arrow-icon">&#9660;</span>
        </div>

        {isOpen && (
          <div className="options-dropdown">
            {options.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  onChange={() => handleOptionChange(option)}
                  checked={selectedOptions.includes(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
        {error && <p style={{color:"red"}}>{error}</p>}
      </div>
      
      <div className="d-flex">
        <button type="button" className="btn btn-info ml-5  mt " onClick={PosthandleContinue}>
          Continue
        </button>
        <button type="button" className="btn btn-light  ml-5 mt">
          Skip
        </button>
      </div>
    </div>
  );
}

export default Selectwork;
