import React from "react";
import "./Objective.css";
import img1 from "../../Assets/process men.png";
import img2 from "../../Assets/Task men.png";
import img3 from "../../Assets/workload men.png"
import { Link } from "react-router-dom";



function Objective() {
  return (
    <div className="container mt-3">
      <h4><b>Baap</b></h4>

 <div style={{marginLeft:"2vw"}}>
   
      <div style={{ marginLeft: "20px", marginTop: "5vw"}}>
        <h2>What's your main objective in Baap?</h2>
        <p className="mb-3">
          Your choice here won't limit what you can do in Asana.
        </p>
      </div>

      <div className="end">Recommended for you</div>

      <div className="main_div">
        <div className="child-div_1">
          <img src={img1} alt="" />
          <span className="child-div_2">Project and process management</span>
          <br />
          <span className="child-div_3">
            Plan Projects, cooordinates tasks, and hit deadlines
          </span>
        </div>
      </div>

      <div className="main_div mt-4">
        <div className="child-div_1">
          <img src={img2} alt="" />
          <span className="child-div_2">Personal task management</span>
          <br />
          <span className="child-div_3">
           Organize to-dos and plan out my work day
          </span>
        </div>
      </div>

      <div className="main_div mt-4">
        <div className="child-div_1">
          <img src={img3} alt="" />
          <span className="child-div_2">Portfolio and workload management</span>
          <br />
          <span className="child-div_3">
            Monitor status and team-member workload across multiple
            <br />
            <span style={{marginLeft:"3vw"}}>
            pages 
            </span> 
          </span>
        </div>
      </div>



   <div style={{marginLeft:"20px", marginTop:"2vw"}} className="d-flex">
    <button type="button" className="btn btn-info pl-4 pr-4"><Link to='/projectname'  style={{textDecoration:'none' , color:'white'}}>Continue</Link></button>
    <p className="ml-4"><b>i 'am not sure yet</b></p>
   </div>
   </div>
    </div>
  );
}

export default Objective;
