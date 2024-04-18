import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Components/App.css';
/*import About from './Components/Pages/About.js'*/
import Homepage from './Components/Homepage.js';
import Bookings from'./Components/Pages/Bookings.js';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useEffect, useState } from "react";
import Main from './Components/Images/Main.jpg'
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
} from "framer-motion";



function App() {
  const featuredRef = useRef(null);
  const videosRef = useRef(null);
  const eventsRef = useRef(null);
  const merchRef = useRef(null);
  const contactRef = useRef(null);
  const mailingRef = useRef(null);

  // Function to handle scrolling to a specific section
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

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
