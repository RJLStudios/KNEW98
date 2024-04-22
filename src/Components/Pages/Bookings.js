
import emailjs from 'emailjs-com';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BookingBanner from '../Images/Booking Banner.jpg'
import Header from '../Header';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { React, useState, useRef, useEffect } from "react";
import {
    motion,
    useInView,
    useAnimation
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

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });
        const [errors, setErrors] = useState({});
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      
        const validateForm = () => {
          console.log('Form Data:', formData);
          let errors = {};
          let formIsValid = true;
          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
          if (formData.name.length < 1) {
            formIsValid = false;
            errors.name = 'Name is required';
          }
      
          if (!formData.email) {
            formIsValid = false;
            errors.email = 'Email is required';
          }
      
          if (!formData.message) {
            formIsValid = false;
            errors.message = 'Message is required';
          }
      
          setErrors(errors);
          return formIsValid;
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (validateForm()) {
            emailjs.sendForm('service_f51xyhp', 'template_l1i5pta', e.target, 'ATtn1deBhV3vWzT70')
              .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
              }, (error) => {
                console.log(error.text);
                alert('An error occurred. Please try again later.');
              });
          }
        };

        const animateRef = useRef(null);
        const isInView = useInView(animateRef, { once: true });
      
        const mainControls = useAnimation();
      
        useEffect(() => {
          if (isInView) {
            mainControls.start("visible");
          }
        }, [isInView]);
        
    return (
        <div className='Bookings'>
            <Header />
            <div className='Booking-Banner'>
            <img 
         className='Homepage-Background Banner-Img' 
         src={BookingBanner}
         loading='lazy'
         decoding='async'
         fetchPriority='high'></img>
                <div className='Booking-Wrapper'>
                <div
          className='Text-Wrapper-Overflow'>
                <motion.div 
             ref={animateRef}
             variants={{
                visible: { opacity:1, y:0},
                hidden: {  opacity:0, y:100 }
              }}
              transition={{
                duration:0.6,
                ease: 'easeOut'
              }} animate={mainControls}
              initial="hidden" 
                className='Booking-Header'>BOOK A SESSION</motion.div>
                </div>
                <div className='Border Booking-Border-Margin'>
                <motion.div 
        className="Border-Fill"
        ref={animateRef}
       variants={{
          visible: { scaleX:1},
          hidden: { scaleX:0 }
        }}
        transition={{
          duration: 0.8,
          ease: 'linear'
        }} animate={mainControls}
        initial="hidden"
        ></motion.div>
                </div>
                <div className='Booking-Toggle-Div'>
                    <button onClick={toggleTheme}  onTouchStart={toggleTheme} className={`Booking-Eng ${activeButton1 === 'Active' ? 'Active' : ''}`}>ENGINEERING SESSIONS</button>
                    <button onClick={toggleTheme}  onTouchStart={toggleTheme} className={`Booking-Artist ${activeButton2 === 'Active' ? 'Active' : ''}`}>BOOK A SHOW</button>
                </div>
                </div>
            </div>

            <div className={`Services-Div ${theme}`}>
                <div className='Services-Title'>
                {activeButton1 === 'Active' ? "ENGINEER SERVICES" : "SHOW BOOKINGS"}
                </div>
                <div className='Services-Form-Wrapper'>
                    <div className='Services-Bio'>
                        <p className='Services-Quote'>
                        {activeButton1 === 'Active' ? "I'M AN AUDIO ENGINEER AND AUDIOPHILE TOTALLING 5 YEARS EXPERIENCE RECORDING AND MIXING MUSIC." : "WANT ME TO PERFORM AT YOUR PARTY OR EVENT?"}
                        </p>
                        <p className='Services-Quote'>
                        {activeButton1 === 'Active' ? "MIXING AND MASTERING SERVICES THAT GIVE YOU THE RADIO-READY RESULT YOU'VE BEEN SEARCHING FOR." : " TELL ME ALL ABOUT IT AND I'LL SEND A QUOTE."}
                            </p>
                    </div>
                    <div className='Services-Form'>
                        <form className='Bookings-Form' onSubmit={handleSubmit}>
                            <div className='Form-Wrap' >
                            <label className='Bookings-Form-Label'> NAME</label>
                            <input 
                            name='name'
                            type='text'
                            className='Bookings-Input'
                            placeholder='YOUR NAME'
                            value={formData.name}
                            onChange={handleChange}
                            ></input>
                            <span className='Error'>{errors.name}</span>

                            </div>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> EMAIL</label>
                            <input
                            name='email'
                             type='email'
                            className='Bookings-Input'
                            placeholder='YOUR EMAIL'
                            value={formData.email}
                            onChange={handleChange}>
                              </input>
                            <span className='Error'>{errors.email}</span>
                            </div>
                            <div className='Form-Wrap'>
                            <label className='Bookings-Form-Label'> MESSAGE</label>
                            <textarea className='Bookings-Input'
                            name='message'
                             type='message'
                               placeholder='YOUR MESSAGE'
                               value={formData.message}
                               onChange={handleChange}></textarea>
                            <span className='Error'>{errors.message}</span>
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