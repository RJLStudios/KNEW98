
import './App.css';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef, useEffect } from "react";
import Main from './Images/Main (1).jpg'
import { motion, useInView, useAnimation, } from "framer-motion";
import SmoothScroll from './SmoothScroll.js';
import Header from '../Components/Header.js';
import Featured from '../Components/Featured.js';
import Videos from '../Components/Videos.js';
import Events from '../Components/Events.js';
import Merch from '../Components/Merch.js';
import Contact from '../Components/Contact.js';
import Mailing from '../Components/Mailing.js';
import Footer from '../Components/Footer.js';

function Homepage() {
  // FUNCTION FOR REF SCROLLING
  const featuredRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  //FRAMER MOTION BOILERPLATE
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);


  return (
    <>

        <div className='Homepage'>
         <img 
         className='Homepage-Background' 
         src={Main}
         decoding='async'
         alt='Landing Page Thumbnail'
       ></img>
                <Header  />
          <div className='Homepage-Wrapper'>
     
            <div className='Homepage-Content Margin'>
  
              <div className='Text-Wrapper-Overflow'>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 200 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate='visible'
                  transition={{ duration: 1.7, delay: 0.15 }}
                  className='Homepage-Socials'>
                  <ul className='Socials'>
                    <a href='https://www.instagram.com/knew98/'><li className='li-icon'><FaInstagram /></li></a>
                    <a href='https://www.youtube.com/channel/UC-2FQE-v6FXP1ZDtzzXTt6Q'><li className='li-icon'><FaYoutube /></li></a>
                    <a href='https://soundcloud.com/jknew98'><li className='li-icon'><FaSoundcloud /></li></a>
                    <a href='https://open.spotify.com/artist/2Vo7CjoV0QnzdRitAh7E0H'><li className='li-icon'><FaSpotify /></li></a>
                  </ul>
                </motion.div>
              </div>
              <div
                className='Text-Wrapper-Overflow'>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 400 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate='visible'
                  transition={{ duration: 1.7, delay: 0.15 }}
                  className='Homepage-Header'>EXPERIENCE R&B <span className='Italic'>REIMAGINED</span> </motion.div>
              </div>
              <div className='Text-Wrapper-Overflow'>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 300 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate='visible'
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className='Homepage-Bio'>SOULFUL BEATS, RAW EMOTIONS & UNFORGETTABLE EXPERIENCES.</motion.div>
              </div>
            </div>
          
          </div>
        </div>
        <section ref={featuredRef}><Featured/></section>
        <Videos />
        <Events />
        <Merch />
        <Contact />
        <Mailing />
        <Footer />
    </>
  )
}

export default Homepage;
