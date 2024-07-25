import React from "react";
import { Link } from "react-router-dom";
import "./ListLayout.css";
import list from "../../Assets/Vector.png";
import board from "../../Assets/board.png";
import bulb from "../../Assets/light-bulb_svgrepo.com.png";
import backimg from '../../Assets/Group 30.png';
import frontimg from '../../Assets/Group 41.png'

function ListLayout() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Baap</b>
            </h4>

            <p className="font-size">
              What layout works best for this projects? you can change me later
            </p>

            <div style={{ marginLeft: "5vw", marginTop: "5vw" }}>
              <span className="set_card">
                <img src={list} alt="" className="mr-4" />
                List
              </span>
              <span className="set_card1 ml-5">
                <img src={board} alt="" className="mr-4" />
                Board
              </span>
            </div>

            <div style={{ marginLeft: "5vw", marginTop: "8vw" }}>
              <span>
                <img src={bulb} alt="" className="mr-2" />
                List is great for treacking work
              </span>
              <br />
              <button type="button" className="btn btn-info pl-4 pr-4 mt-3">
                <Link to='/addEmail' style={{textDecoration:"none",color:"white"}}>Continue</Link> 
              </button>
            </div>
          </div>

          <div className="col-md-6">
            
            
          <div>
              <img
                src={backimg}
                alt=""
                style={{
                    position: "fixed",
                    
                    width: "36vw",
                    height: "32vw",
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
                  height: "32vw",
                }}
              />
            </div>
            
           
            </div>
        </div>
      </div>
    </div>
  );
}

export default ListLayout;
