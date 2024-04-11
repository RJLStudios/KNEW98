import './App.css';
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
} from "framer-motion";

import { useRef,useEffect, useState } from "react";

function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent)
      console.log(scrollPercent);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);


  const [opacity, setOpacity] = useState(false)
  const changeOpacity = () => {
    if (window.innerWidth >= 700 && window.scrollY >= 90) {
      setOpacity(true)
    } else {
      setOpacity(false)
    }
  }

  const [isOpen, setIsOpen] = useState(true);
  const [menuIcon, setMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuIcon(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  


  return (
    <>
      <motion.div 
      variants={{
        hidden: { opacity: 0},
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate='visible'
      transition={{ duration: 2, delay: 0.2 }}
      className='Header'>
        <div className='Logo'>KNEW98</div>

        <div className='Progress-div'>
        <svg className="complete" width="60" height="60" viewport="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad">
      <stop offset="0%" stop-color=" #FFFFFF"></stop>
      <stop offset="100%" stop-color=" #FFFFFF"></stop>
    </linearGradient>
    </defs>
    <circle cx="25" cy="25" r="20"></circle>
    <circle className="progress-bar" cx="25" cy="25" r="20"></circle>
  </svg>
 
        </div>
 
        <div className='Menu-icon'>
          <ul className='Responsive-links'>
            <li className='Responsive-li hover-underline-animation'>ABOUT</li>
            <li className='Responsive-li hover-underline-animation'>VIDEOS</li>
            <li className='Responsive-li hover-underline-animation'>BOOKINGS</li>
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default Header;
