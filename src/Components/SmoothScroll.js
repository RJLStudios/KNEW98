import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SmoothScroll({
  children
}) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const [contentHeight, setContentHeight] = useState(0);
  const y = useTransform(smoothProgress, v => v * -(contentHeight - window.innerHeight));
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        className="scrollBody"
        style={{ y }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
} 
