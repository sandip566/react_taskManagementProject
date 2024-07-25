import React from "react";
import "./Createproject.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { BsRocket } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
// import spreadsheet from "../Assets/spreedsheet.png"

function Createproject() {
  return (
    <div className="container-fluid mt-2">
    <Link to='/home' style={{textDecoration:'none',color:'black'}}><GoArrowLeft style={{cursor:'pointer'}} /></Link>
    
    <Link to='/home' style={{textDecoration:'none',color:'black'}}><RxCross1 style={{float:'right',cursor:'pointer'}} /></Link>

      <div style={{ textAlign: "center", marginTop: "5vw" }}>
        <span className="Newproject">Create a new project</span>
        <p className="Startproject">How would you like to start</p>
      </div>

      <div className="row justify-content-center">
        <div className="ml-2 mr-2  text-center">
          <Link to={'/newproject'} style={{textDecoration:'none',color:'black'}}>
        <div className="Blankproject" >
        <FaPlus className="mt-3"  />
        </div>
        </Link>  

          <p>
            <b>Blank project</b>
            <br />
            Start from scratch
          </p>
        </div>

        <div className="ml-2 mr-2 text-center">
          <div className="Templateproject">
          <BsRocket   className="mb-2" />

          </div>
          <p>
            <b>Template project</b>
            <br />
            Use of libalari
          </p>
        </div>

        <div className="ml-2 mr-2 text-center">
        <div className="Spreadsheetproject">
          <LuFileSpreadsheet className="mt-3"  />

          </div>
          <p>
            <b>Spreadsheet project</b>
            <br />
            Add from another tool
          </p>
        </div>
      </div>
    </div>
  );
}

export default Createproject;
