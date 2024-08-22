import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact'
import React from 'react';

function App() {
  return (
    <div>

        {/* <Scroll />  */}
        <Routes> 
          
          <Route exact path="/" element={<Home />} />
        <Route path='/registrationform' element={<RegistrationForm/>} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/proelection" element={<Proelection />} /> */}
        {/* <Route path="/voting" element={<Voting />} /> */}
      
        </Routes>
    </div>
  );
}

export default App;
