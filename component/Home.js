import React from 'react';
import './Home.css';
import HomeImg from'../Assets/HomegroupImg.svg';
import { GoChevronDown } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";
import { IoPeopleSharp } from "react-icons/io5";
import { SlUserFemale } from "react-icons/sl";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from "react-icons/tb";
import Sidebar from '../sidenav/Sidebar';
import Header from '../sidenav/Header';
import { RiArrowRightWideLine } from "react-icons/ri";


function Home() {
  return (
    
    <div className='home-container'>
      <Header />
      <Sidebar />
      <div id='main' className='main'>
        <div className='setbackgroundcolor'>
          <div className='container'>
            <div className='June'>
              <p>Wednesday, June 19</p>
            </div>
            <div className='June1'>
              <h5>Good Morning, Vaibhav</h5>
            </div>
            <div className='btnweek'>
              <button type="button" className="btn btn-light MyWeek">
                My Week <GoChevronDown /> <RxDividerVertical /> <TiTickOutline /> 0 tasks completed <IoPeopleSharp /> 0 collaborators
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-light Female">
                <SlUserFemale /> Customize
              </button>
            </div>
          </div>
          <div className="rowcol mt-4">
            <div className="Bcol-4">
              <div className="p-3 colbtnw">
                <button type="button" className="btn btn-light Createbtn">
                  <TbCircleNumber1 /> <span className='btnallc'>Create your first project</span>
                </button>
                <button type="button" className="btn btn-light Createbtn mt-3">
                  <TbCircleNumber2 /> <span className='btnallc'>Customize home</span>
                </button>
                <button type="button" className="btn btn-light Createbtn mt-3">
                  <TbCircleNumber3 /> <span className='btnallc'>Complete your profile</span>
                </button>
                <button type="button" className="btn btn-light Createbtn mt-3">
                  <TbCircleNumber4 /> <span className='btnallc'>Download mobile & desktop apps</span>
                </button>
                <button type="button" className="btn btn-light Createbtn mt-3">
                  <TbCircleNumber5 /> <span className='btnallc'>Browse integrations</span>
                </button>
              </div>
            </div>
            <div className="Acol-6  container-fluid">
              <div className="p-3">
                <div className="card cardtext">
                  <div className="card-body cardb1">
                    <div><img className='mt-4' src={HomeImg} alt=''/></div>
                    <div>
                      <p className="card-text textyour">Customize your background and add widgets to make home your own</p>
                      <button type="button" className="btn btn-primary ml-5 Customize">Customize home</button>
                      <p className='ml-5 mt-2'>Next Step   <RiArrowRightWideLine />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
