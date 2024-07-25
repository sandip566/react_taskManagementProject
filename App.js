import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Sign from './pages/Sign-page/Sign';
//import Login from './pages/login-page/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import Name from './pages/Name-page/Name';
import Primaryrole from './pages/primaryrole/Primaryrole';
import Objective from './pages/objective/Objective';
import Selectwork from './pages/selectwork/Selectwork';
import Projectname from './pages/project-name/Projectname';
import Todolist from './pages/todo-list/Todolist';
import Sectionstage from './pages/section-stages/Sectionstage';
import ListLayout from './pages/list-layout/ListLayout';
import Emailadd from'./pages/email-add/Emailadd';
import Whatsapp from './pages/whatsapp-otp/Whatsappotp';
import Createproject from './pages/create-new-project/Createproject';
import Newproject from './pages/new-project/Newproject'

import Sidebar from './sidenav/Sidebar';
import Home from './component/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Sidebar /> */}

      <Routes>
      {/* <Route path='/' element={<Sign/>}></Route>
      <Route  path ='/login' element={<Login/>}/> */}
      <Route path='/' element={<Whatsapp/>}/>
        <Route path='/name' element={<Name />}></Route>
        <Route path='/primary' element={<Primaryrole />} />
        <Route path='/selectwork' element={<Selectwork />} />
        <Route path='/objective' element={<Objective />}/>
        <Route path='/projectname' element={<Projectname/>}/>
        <Route path='/todolist' element={<Todolist />} />
        <Route path='/sectionstage' element={<Sectionstage/>}/>
        <Route path='/listlayout' element={<ListLayout />} />
        <Route path='/addEmail' element={<Emailadd/>}/>
        <Route path='/createproject' element={<Createproject />} />
        <Route path='/newproject' element={<Newproject />} />
        
        <Route path='/sidebar' element={<Sidebar />}/>
        <Route path='/home' element={<Home />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
