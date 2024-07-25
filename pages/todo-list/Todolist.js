import React, { useState } from "react";
import axios from "axios";
import "./Todolist.css";
import backimg from "../../Assets/Group 30.png";
import frontimg from "../../Assets/Group 41.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Todolist() {
  const [project, setProject] = useState("");
  const [meeting, setMeeting] = useState("");
  const [teammate, setTeammate] = useState("");
  const [errors, setErrors] = useState({ project: "", meeting: "", teammate: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "project":
        setProject(value);
        break;
      case "meeting":
        setMeeting(value);
        break;
      case "teammate":
        setTeammate(value);
        break;
      default:
        break;
    }
    
    // Clear error when input field is updated
    setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = { project: "", meeting: "", teammate: "" };

    if (!project.trim()) {
      newErrors.project = "Project field is required";
      valid = false;
    }
    if (!meeting.trim()) {
      newErrors.meeting = "Meeting field is required";
      valid = false;
    }
    if (!teammate.trim()) {
      newErrors.teammate = "Teammate field is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const post_handleSubmit = () => {
    if (validateInputs()) {
      const data = {
        project: project,
        meeting: meeting,
        teammate: teammate
      };

      axios.post("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/tasks/", data)
        .then((response) => {
          console.log("API response:", response.data);
          alert('post successfully')
          navigate('/sectionstage');

          // Handle successful response
        })
        .catch((error) => {
          console.error("API request error:", error);
          // Handle error
        });
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Baap</b>
            </h4>
            <div className="margin-left">
              <div className="font" style={{ marginTop: "3vw" }}>
                <p>What are a few tasks that you have to do for task management?</p>
              </div>
              <div style={{}}>
                <input
                  type="text"
                  placeholder="eg. Draft project brief"
                  name="project"
                  value={project}
                  onChange={handleChange}
                  className="wi"
                />
                <span className="text-danger">{errors.project}</span>
                <br />
                <input
                  type="text"
                  placeholder="eg. Schedule kick-off meeting"
                  name="meeting"
                  value={meeting}
                  onChange={handleChange}
                  className="wi"
                />
                <span className="text-danger">{errors.meeting}</span>
                <br />
                <input
                  type="text"
                  placeholder="eg. Share timeline with teammates"
                  name="teammate"
                  value={teammate}
                  onChange={handleChange}
                  className="wi"
                />
                <span className="text-danger">{errors.teammate}</span>
                <br />
                <button type="button" className="btn btn-info mt-4 pl-4 pr-4" onClick={post_handleSubmit}>
                  Continue
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
                  position: "fixed",
                  top: "1",
                  left: "100",
                  width: "36vw",
                  height: "32vw"
                }}
              />
              <img
                src={frontimg}
                alt=""
                style={{
                  position: "fixed",
                  top: "22%",
                  left: "60%",
                  width: "36vw",
                  height: "32vw"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
