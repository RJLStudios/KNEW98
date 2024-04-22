import { useRef,useEffect} from "react";
import {
  motion,

  useAnimation,
  useInView
} from "framer-motion";


function Videos() {
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
      <motion.div 
          ref={animateRef}
          animate={mainControls}
      className='Videos'
       >
        <div className='Video-Wrapper'>
          <div className='Video-Frame'><iframe width="100%" height="100%" src="https://www.youtube.com/embed/W2j7npQhHiU?si=tNzypscns54e3jWt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          <div className="Video-Desc">
            <div className='Text-Wrapper-Overflow'>
            <motion.div
                  ref={animateRef}
                  animate={mainControls}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 1, delay: 0.05 }}
             className='Video-Title'>CARAMEL TAPE LIVE JAM</motion.div>
            </div>
            <div className='Text-Wrapper-Overflow'>
            <motion.div 
         ref={animateRef}
         animate={mainControls}
         initial="hidden"
         variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
         }}
         transition={{ duration: 1.3, delay: 0.1 }}
            className='Video-Bio'>IN COLLABORATION WITH THE PARLOUR ROOM STUDIOS</motion.div>
            </div>
          </div>
        </div>

        <div className="Border">
        <motion.div 
        className="Border-Fill"
        ref={animateRef}
        animate={mainControls}
        initial="hidden"
        variants={{
          visible: { scaleX:1},
          hidden: { scaleX:0 }
        }}
        transition={{
          duration: 0.8,
          ease: 'linear'
        }}></motion.div>
      </div>

        <div className='Video-Wrapper Reverse'>
          <div className='Video-Frame'><iframe width="100%" height="100%" src="https://www.youtube.com/embed/10kTyWCLeno?si=_fEvpP9ZHnJRAML5" title="Skrrting By Video Frame" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          <div className="Video-Desc">
          <div className='Text-Wrapper-Overflow'>
            <motion.div
             ref={animateRef}
             animate={mainControls}
             initial="hidden"
             variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
             }}
             transition={{ duration: 1, delay: 0.8 }}
            className='Video-Title'>SKRRING BY</motion.div>
            </div>
            <div className='Text-Wrapper-Overflow'>
            <motion.div
              ref={animateRef}
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 300 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2, delay: 1 }}
             className='Video-Bio'>KNEW'98'S "SKRRING BY" TAKES US ON A NOSTALGIC RIDE THROUGH THE VIBRANT STREETS OF NORTH LONDON, WHERE THE ARTIST'S ROOTS ARE DEEPLY PLANTED. THIS TRACK, PART OF HIS EP "CARAMEL TAPE," EXUDES A SENSE OF FAMILIARITY REMINISCENT OF THE GOLDEN ERA OF 90S HIP HOP.
            </motion.div>
            </div>

          </div>
        </div>

        <motion.div 
        ref={animateRef}
        animate={mainControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 }
        }}
        transition={{ duration: 0.9, delay: 1}}
        className='More-Vids'>
        <a className='' href='https://www.youtube.com/@knew98'><div className='Vid-Btn'>MORE VIDEOS</div></a>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Videos;
