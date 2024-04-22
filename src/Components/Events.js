import Banner from './Images/Events.jpg'
import { useRef,useEffect} from "react";
import {
  motion,
  useAnimation,
  useInView
} from "framer-motion";


function Events() {
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
      <div className='Events'>
        <div className='Events-Banner'
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>

       <div className='Overflow-Container'>
       <div className='Banner-Wrap'>
          <div className="Banner-Carousel">
            <div className='Banner-Text'>SHOWS</div>
            <div className='Banner-Text'>SHOWS</div>
            <div className='Banner-Text'>SHOWS</div>
            
          </div>
          <div className="Banner-Carousel Slide">
            <div className='Banner-Text'>SHOWS</div>
            <div className='Banner-Text'>SHOWS</div>
            <div className='Banner-Text'>SHOWS</div>
          </div>
          </div>
          </div>
        </div>

        <div className='Events-Grid'>
        <div className="tour-dates">
          <div className="date-wrapper">
          <div className="date">TBA</div>
          <div className="venue">LONDON, UK</div>
          <div className="tour-btn-div">
            <div className="tour-btn tba">TICKETS</div>
          </div>
        
        </div>

      </div> 
       <div className='Border Event-Border-Margin'>
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

        </div>
        
      </div>
    </>
  )
}

export default Events;
