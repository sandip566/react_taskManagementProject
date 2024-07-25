import React, { useState } from "react";
import axios from "axios"; // Import Axios
import backimg from '../../Assets/Group 30.png';
import frontimg from '../../Assets/Group 32.png';
import './Projectname.css';
import { useNavigate } from "react-router-dom";

function Projectname() {
    const [taskName, setTaskName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const regex = /^[a-zA-Z\s]*$/; // Regex to allow only letters and spaces
        if (regex.test(inputValue)) {
            setTaskName(inputValue);
            setError("");
        } else {
            setError("Please enter only letters and spaces.");
        }
    };

    const continuehandleSubmit = () => {
        if (taskName.trim() === "") {
            setError("Please enter a task name.");
        } else {
        
            axios.post('https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/', { taskName })
                .then(response => {
                    console.log("API Response:", response.data);
                    setError("");
                    navigate('/todolist')
                })
                .catch(error => {
                    console.error("API Error:", error);
                    // Handle error if needed
                });
        }
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h4><b>Baap</b></h4>
                    <div className="leftSide">
                        <div>
                            <h3>Let's set up your <br/> first project</h3>
                        </div>
                        <div className="mt-3">
                            <p>What's something you and your team are <br /> currently working on?</p>
                        </div>
                        <div className="mt-3">
                            <input
                                type="text"
                                className={`setInput ${error ? 'error' : ''}`} // Apply 'error' class if there's an error
                                placeholder="Task Management"
                                value={taskName}
                                onChange={handleChange}
                            />
                            {error && <p className="text-danger">{error}</p>}
                        </div>

                        <button className="btn btn-info pl-4 pr-4 mt-5" onClick={continuehandleSubmit}>
                            <span style={{textDecoration:'none', color:'white'}}>Continue</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <img src={backimg} alt="" className="back-img" />
                        <img src={frontimg} alt="" className="front-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectname;
