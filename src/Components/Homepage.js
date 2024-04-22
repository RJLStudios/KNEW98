
import './App.css';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import Main from './Images/Main.jpg'
import { motion, useInView, useAnimation, } from "framer-motion";

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
  const videosRef = useRef(null);
  const eventsRef = useRef(null);
  const merchRef = useRef(null);
  const contactRef = useRef(null);
  const mailingRef = useRef(null);


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
      <div className='App'>
        <div className='Homepage'>
         <img 
         className='Homepage-Background' 
         src={Main}
         decoding='async'
         fetchPriority='high'></img>
          <Header scrollToRef={scrollToRef} videosRef={videosRef} contactRef={contactRef} />
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
            <div className='Text-Wrapper-Overflow'>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate='visible'
                transition={{ duration: 2, delay: 0.2 }}>
                <ul className="menu align-center expanded text-center SMN_effect-31 Scroll-Prompt" onClick={() => scrollToRef(featuredRef)}>
                  <li className='No-List' ><a data-hover="SCROLL DOWN" ><span>SCROLL DOWN</span></a></li></ul>
              </motion.div>
            </div>
          </div>
        </div>
        <section ref={featuredRef}><Featured  /></section>
        <Videos />
        <Events />
        <Merch />
        <Contact />
        <Mailing />
        <Footer />
      </div>
    </>
  )
}

export default Homepage;
