import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './Logo'
import Avator from './Avater'
function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearInput = () => {
    setSearchQuery('');
  };
  return (
 <>

 <header id='header' className='header fixed-top  d-flex align-item-center'>

<Logo />
<Link to="/createproject">
    <div className='border'>
        <i className='bi bi-plus icon-color'></i>
        <span style={{ color: "white" }}>Create</span> 
    </div>
</Link>
   <div className='center-text'>
      <div className='search-container'>
        <input
          className='search-input'
          placeholder='Search'
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <i className='bi bi-x erase-icon' onClick={clearInput}></i>
        )}
       
          <i className='bi bi-search search-icon'></i>
       
      </div>
    </div>
  
<div>
<Avator />
</div>

   </header>
</>
  )
}

export default Header









/* // const [open, setOpen] useState(false);
// return (
// <div className="App">
// <div className-menu-container'>
// <div className-menu-trigger' onClick=(() => {setOpen (lopen)}}>
// <img src={portrait}></img>
// </div>
// <div className={`dropdown-menu ${open? 'active': 'inactive'}} >
// <h3>The Kiet<br/><span>Website Designer</span></h3>
// <ul>
// <DropdownItem img {user} text {"My Profile"}/>
// <DropdownItem img {edit) text = {"Edit Profile"}/>
// <DropdownItem img (inbox) text • ("Inbox"}/>
// <DropdownItem img {settings) text {"Settings"}/>
// <Dropdown Item img (help) text {"Helps"}/>
// <DropdownItem img {logout) text {"Logout"}/>
// </ul>
// </div>
// </div>
// </div>
// );
// } */