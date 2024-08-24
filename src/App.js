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
      
        </Routes>
    </div>
  );
}

export default App;
