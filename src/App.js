import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './Components/App.css';
import Homepage from './Components/Homepage.js';
import Bookings from'./Components/Pages/Bookings.js';


function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route path="/Bookings" element={<Bookings />} />
    </Routes>
 </>

  );
}




export default App;
