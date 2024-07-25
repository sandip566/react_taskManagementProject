import React from "react";
import './Avater.css'

function Avater() {
  return (
    <div>
      <li className="nav-item dropdown pe-2">
        <span
          
          className="nav-Link nav-profile d-flex align-item-center pe-0"
          data-bs-toggle="dropdown"
        >
          <span className="rounded-circle Avator-setup">PC</span>
          <span className="d-none d-md-block dropdown-toggle "></span>
        </span>
         
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arro profile">
          <li className="dropdown-header">
            <h6>Pankaj 1</h6>
            <h6>Pankaj</h6><h6>Pankaj 1</h6>
            <h6>Pankaj</h6><h6>Pankaj 1</h6>
            <h6>Pankaj</h6><h6>Pankaj 1</h6>
            <h6>Pankaj</h6><h6>Pankaj 1</h6>
           
            
            {/* Add your other list items here */}
            <span>web developer  foenywreueeeeeeeee</span>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Avater;
