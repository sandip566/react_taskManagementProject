import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListIcon from "../../Assets/new-project-list.png";
import BoardIcon from "../../Assets/new-project-bord.png";
import overview from "../../Assets/new-project-overview.png";
import { GoArrowLeft } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

import "./Newproject.css";

function Newproject() {
  const [projectName, setProjectName] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [viewType, setViewType] = useState("List");
  const navigate = useNavigate();

  const handleCreateProject = () => {
    const projectData = {
      projectName: projectName, // Update this line to match the payload format
      privacy: privacy,
      viewType: viewType,
    };

    fetch("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/createproject" style={{ color: "black" }}>
              <GoArrowLeft />
            </Link>
          </div>
          <div>
            <RxCross1 />
          </div>
        </div>
      </div>

      <div className="row m-3">
        <div className="col-4">
          <h5>New Project</h5>

          <div className="mt-5">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              className="input-box1"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="privacy">Privacy:</label>
            <input
              type="text"
              id="privacy"
              className="input-box2"
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="" className="mt-4">
              default value
            </label>
            <div className="setImage mt-2">
              <div
                className={`setImageList ${viewType === "List" ? "selected" : ""}`}
                onClick={() => setViewType("List")}
              >
                <img src={ListIcon} alt="List Icon" />
                <div className="mt-2">List</div>
              </div>
              <div
                className={`setImageBord ${viewType === "Board" ? "selected" : ""}`}
                onClick={() => setViewType("Board")}
              >
                <img src={BoardIcon} alt="Board Icon" />
                <div>Board</div>
              </div>
            </div>

            <div className="mt-4">
              <button className="setButton" onClick={handleCreateProject}>
                Create project
              </button>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div>
            <img src={overview} className="setImageOverview" alt="Overview" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Newproject;
