import React from 'react'
import './Logo.css' 
function Logo() {

    const handleToggleSidebar=()=>{
        document.body.classList.toggle('toggle-sidebar')
    }    

  return (
    <div className='d-flex'>
        
      <i className='bi bi-list logo toggle-sidebar-btn' onClick={handleToggleSidebar}> </i>

      {/* <div className='border'>
        <i className='bi bi-plus icon-color' ></i>
        <span style={{color:"white"}}>Create</span>
    </div>  */}
    </div>
  )
}

export default Logo
