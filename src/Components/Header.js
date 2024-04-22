import './App.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useRef, useEffect, useState } from "react";

function Header() {

  //FRAMER MOTION BOILERPLATE
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  //PROGRESS ICON FUNCTION
  const [scrollProgressPercentage, setScrollProgressPercentage] = useState(0);
  useEffect(() => {
    const handleScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgressPercentage(scrollProgress);
    }
    window.addEventListener('scroll', handleScrollProgress);

    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
    };
  })
  //HIDE NAVBAR ON SCROLL 
  const [navbarClass, setNavbarClass] = useState('Header-visible');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (isScrollingDown && navbarClass === 'Header-visible') {
        setNavbarClass('Header-hidden');
      } else if (!isScrollingDown && currentScrollPos > 0) {
        setNavbarClass('Header-visible');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, navbarClass]);


  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate='visible'
        transition={{ duration: 2, delay: 0.2 }}
        className='Header-visible'>

        <Link to='/'><div className='Logo'>KNEW98</div></Link>

        <div className='Progress-div'>
          <CircularProgressbar
            value={scrollProgressPercentage}
            strokeWidth={30}
            styles={buildStyles({
              pathColor: "white",
              trailColor: "#989898",
              strokeLinecap: "butt"
            })} />
        </div>

        <div className='Menu-icon'>
          <ul className='Responsive-links'>
            <Link to="/Bookings" className='hover-underline-animation'>BOOKINGS</Link>
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default Header;
