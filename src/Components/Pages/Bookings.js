import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BookingBanner from '../Images/Booking Banner.jpg'
import Header from '../Header';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import {
    motion,
    useInView,
} from "framer-motion";


function Bookings() {

        const [theme, setTheme] = useState('Dark');
        const [activeButton1, setActiveButton1] = useState('Active');
        const [activeButton2, setActiveButton2] = useState('Inactive');
        const [quote, setQuote] = useState('Engineer-Quote')
        

 
        const toggleTheme = () => {
            const newTheme = theme === 'Dark' ? 'Light' : 'Dark';
            setTheme(newTheme);
            setActiveButton1 (activeButton1 === 'Active' ? 'Inactive' : 'Active');
            setActiveButton2 (activeButton2 === 'Active' ? 'Inactive' : 'Active');
            setQuote (quote === 'Engineer-Quote' ? 'Artist-Quote' : 'Engineer-Quote' )
        }


  
    return (
        <div className='Bookings'>
            <Header />
            <div className='Booking-Banner'
              >
                <div className='Booking-Wrapper'>
                <div className='Booking-Header'>BOOK A SESSION</div>
                <div className='Booking-Border'></div>
                <div className='Booking-Toggle-Div'>
                    <button onClick={toggleTheme}  onTouchStart={toggleTheme} className={`Booking-Eng ${activeButton1 === 'Active' ? 'Active' : ''}`}>ENGINEERING</button>
                    <button onClick={toggleTheme}  onTouchStart={toggleTheme} className={`Booking-Artist ${activeButton2 === 'Active' ? 'Active' : ''}`}>ARTIST</button>
                </div>
                </div>
            </div>

            <div className={`Services-Div ${theme}`}>
                <div className='Services-Title'>ENGINEERING SERVICES</div>
                <div className='Services-Form-Wrapper'>
                    <div className='Services-Bio'>
                        <p className='Services-Quote'>
                        {activeButton1 === 'Active' ? "I’M AN AUDIO ENGINEER AND AUDIOPHILE TOTALLING 5 YEARS EXPERIENCE RECORDING AND MIXING MUSIC." : "I’M AN ARTIST WITH A PASSION FOR CREATING VISUAL MASTERPIECES AND SHARING MY CRAFT WITH THE WORLD."}
                        </p>
                        <p className='Services-Quote'>
                        {activeButton1 === 'Active' ? "MIXING AND MASTERING SERVICES THAT GIVE YOU THE RADIO-READY RESULT YOU'VE BEEN SEARCHING FOR." : "I OFFER CUSTOM ARTWORK CREATION, FROM LOGO DESIGN TO FULL ALBUM COVERS, TO BRING YOUR VISION TO LIFE."}
                            </p>
                    </div>
                    <div className='Services-Form'>
                        <form className='Bookings-Form'>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> NAME</label>
                            <input className='Bookings-Input'></input>
                            </div>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> EMAIL</label>
                            <input className='Bookings-Input'></input>
                            </div>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> SUBJECT</label>
                            <input className='Bookings-Input'></input>
                            </div>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> MESSAGE</label>
                            <textarea className='Bookings-Input'></textarea>
                            </div>
                            <input className={activeButton1 === 'Active' ? "Btn-Dark" : "Btn-Light"} type="submit" value="SEND" />
                           
                           
                        </form>
                    </div>
                </div>
            </div>
            <div className={`Footer ${theme}`}>
      <div className='Logo'>KNEW98</div>
      
      <div className='Copyright'>DESIGNED BY RJLSTUDIOS</div>
      

    </div>
        </div>
    );
}

export default Bookings;