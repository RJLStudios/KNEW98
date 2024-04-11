import Header from './Header.js';
import './App.css';
import { FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { useRef,useEffect, useState } from "react";
import Main from './Images/Main.jpg'
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
} from "framer-motion";

function Homepage() {

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
      <div className='Homepage' 
      style={{backgroundImage:`url(${Main})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  
    }}>
        <Header/>
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
            <a href='a'><li className='li'><FaInstagram/></li></a>
            <a href='a'><li className='li'><FaYoutube/></li></a>
            <a href='a'><li className='li'><FaSoundcloud/></li></a>
            <a href='a'><li className='li'><FaSpotify/></li></a>
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
          transition={{ duration: 1.5, delay: 0.5}}
           className='Homepage-Bio'>SOULFUL BEATS, RAW EMOTIONS & UNFORGETTABLE EXPERIENCES.</motion.div>
           </div>
        </div>  
        <div className='Text-Wrapper-Overflow'> 
        <motion.div
         variants={{
          hidden: { opacity: 0},
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate='visible'
        transition={{ duration: 2, delay: 0.2 }}
         className='Scroll-Prompt'>SCROLL FOR MORE</motion.div>
        </div>
        </div>
        
    
      </div>
    </>
  )
}

export default Homepage;
