import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Header from './Header';

function Sidebar() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://ar9i250lr3.execute-api.ap-south-1.amazonaws.com/task-management/teams/65f7d6d36d516c6e0b9f4f01")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else if (data && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          console.error("Unexpected API response format:", data);
          setProjects([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProjects([]);
      });
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div id="sidebar" className="sidebar">
        <ul className="custom-list">
          <div>
            <li className="custom-list-item">
              <i
                className="bi bi-house-door-fill custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <Link to="/home" style={{ textDecoration: "none", color: "white" }} className="text-decoration">
                <span className="custom-text">Home</span>
              </Link>
            </li>
            <li className="custom-list-item">
              <i
                className="bi bi-card-checklist custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <Link to="/main" className="text-decoration">
                <span className="custom-text">My task</span>
              </Link>
            </li>
            <li className="custom-list-item">
              <i
                className="bi bi-calendar-minus-fill custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <span className="custom-text ">Inbox</span>
            </li>
          </div>
          <div className="border-b"></div>

          <div className="custom-list">
            <li className="custom-list-item">
              <span className="custom-icon">
                <b>Insight</b>
              </span>
              <i
                className="bi bi-plus custom-icon-new"
                style={{ fontSize: "20px" }}
              ></i>
            </li>

            <li className="custom-list-item">
              <i
                className="bi bi-lightning-charge-fill custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <span className="custom-text">Reporting</span>
            </li>
            <li className="custom-list-item">
              <i
                className="bi bi-briefcase-fill custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <span className="custom-text">Portfolios</span>
            </li>
            <li className="custom-list-item">
              <i
                className="bi bi-disc-fill custom-icon"
                style={{ fontSize: "20px" }}
              ></i>
              <span className="custom-text">Goals</span>
            </li>

            <div>
              <li className="custom-list-item">
                <span className="custom-icon">
                  <b>Project</b>
                </span>
                <i
                  className="bi bi-plus custom-icon-new"
                  style={{ fontSize: "20px" }}
                ></i>
              </li>
              {projects.map((project) => (
                <li key={project.id} className="custom-list-item">
                  <i
                    className="bi bi-grid custom-icon"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <span className="custom-text">{project.name}</span>
                </li>
              ))}
            </div>

            <div>
              <li className="custom-list-item">
                <span className="custom-icon">
                  <b>Teams</b>
                </span>
              </li>
              <li className="custom-list-item">
                <i
                  className="bi bi-people-fill custom-icon"
                  style={{ fontSize: "20px" }}
                ></i>
                <span className="custom-text">Portfolios</span>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
