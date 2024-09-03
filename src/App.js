import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login'
import Contact from './components/Contact'
import Proelection from './components/Proelection'
import Voting from './components/Voting'
import Scroll from './components/Scroll'
import Adminlogin from './components/Adminlogin';
import React from 'react';
import Candidatedetail from './components/Candidatedetail';
import Changephase from './components/Changephase';
import Addcandidate from './components/Addcandidate';
import Adminregister from './components/Adminregister';
import Logout from './components/Logout';
// import ElectionManager from './components/ElectionManager';

function App() {
  
  return (
    <div>

        <Scroll /> 
        <Routes> 
          
        <Route exact path="/" element={<Home />} />
        <Route path='/registrationform' element={<RegistrationForm/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/proelection" element={<Proelection />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        {/* <Route path="/admindashboard" element={<AdminDashboard/>} /> */}
        <Route path="/candidatedetail" element={<Candidatedetail />} />
        <Route path="/changephase" element={<Changephase />} />
        <Route path="/addcandidate" element={<Addcandidate/>} />
        <Route path="/adminregister" element={<Adminregister/>} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/electionmanager" element={<ElectionManager/>} /> */}
      
        </Routes>
    </div>
  );
}

export default App;
