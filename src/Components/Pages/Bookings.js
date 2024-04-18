import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BookingBanner from '../Images/Booking Banner.jpg'
import Header from '../Header';
import Footer from '../Header';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import {
    motion,
    useInView,
} from "framer-motion";


function Bookings() {
    return (
        <div className='Bookings'>
            <Header />
            <div className='Booking-Banner'
              >
                <div className='Booking-Wrapper'>
                <div className='Booking-Header'>BOOK A SESSION</div>
                <div className='Booking-Border'></div>
                <div className='Booking-Toggle-Div'>
                    <div className='Booking-Eng'>ENGINEERING</div>
                    <div className='Booking-Artist'>ARTIST</div>
                </div>
                </div>
            </div>

            <div className='Services-Div Darkmode'>
                <div className='Services-Title'>ENGINEERING SERVICES</div>
                <div className='Services-Form-Wrapper'>
                    <div className='Services-Bio'>
                        <p className='Services-Quote'>I’M AN AUDIO ENGINEER AND AUDIOPHILE TOTALLING 5 YEARS EXPERIENCE RECORDING AND MIXING MUSIC.</p>
                        <p className='Services-Quote'>MIXING AND MASTERING SERVICES THAT GIVE YOU THE RADIO-READY RESULT YOU'VE BEEN SEARCHING FOR.</p>
                    </div>
                    <div className='Services-Form'></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bookings;