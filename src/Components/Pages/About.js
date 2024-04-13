import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Header';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
} from "framer-motion";


function About() {
    return(
        <div className='About'>
            <Header/>
            <Footer/>
        </div>
    );
}

export default About;