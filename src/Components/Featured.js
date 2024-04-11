import CaramelTape from './Images/CaramelTape(2).jpg'

import { useRef,useEffect, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView
} from "framer-motion";



function Featured() {
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, {threshold: 0.1 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  ;

    return (
      <>
    <motion.div
        ref={animateRef}
        animate={mainControls}
        className='Featured'>
      <div className='Featured-Bio'>
      <div className='Text-Wrapper-Overflow'> 
       <motion.div
        ref={animateRef}
        animate={mainControls}
        initial="hidden"
     variants={{
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0 },
    }}
   
    transition={{ duration: 1, delay: 0.25 }}
        className='Featured-Title'
        >CARAMEL TAPE</motion.div>
        </div>

        <div className='Text-Wrapper-Overflow'> 
       <motion.div 
          ref={animateRef}
          animate={mainControls}
          initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 400 },
          visible: { opacity: 1, y: 0 },
        }} 
        transition={{ delay: 0.5, duration: 1.7 }}
        className='Featured-Desc A'> ’98 MAKES ALT R&B AND HIP-HOP, OFTEN MERGING VARIOUS GENRES AND CULTURAL INFLUENCES, LEANING TOWARDS THE MORE SOULFUL APPROACH AS HEARD ON HIS NEW EP ‘CARAMEL TAPE’.
        </motion.div>
       </div>

       <iframe className='Spotify' src="https://open.spotify.com/embed/album/6RHNp8mLhdtWT4WPMROza8?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      <div className='Featured-Cover'>
      <div className='Text-Wrapper-Overflow'> 
        <motion.img 
         variants={{
          hidden: { opacity: 0, y: 0},
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.3, delay: 0.15 }}
        className='Caramel-Tape'
         src={CaramelTape}></motion.img>
      </div>

        <motion.div
               ref={animateRef}
        animate={mainControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 }
        }}
        transition={{ duration: 1, delay: 0.15 }}
         className='Listen-Div'>
          <a className='' href='https://distrokid.com/hyperfollow/knew98/caramel-tape'><div className='Listen-Btn'>LISTEN</div></a>
        </motion.div>
      </div>
    </motion.div>
      </>
    )
  }
  
  export default Featured;
  