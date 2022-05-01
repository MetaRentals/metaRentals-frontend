import React, {useRef, useEffect, forwardRef} from 'react'
import {gsap} from 'gsap'

const Box = forwardRef(({ children }, ref) => {
    return <div className="box" ref={ref}>{children}</div>;
  });
  
  function Container({ children }) {
    return <div><Box>Don't Animate Me</Box></div>;
  }

const Preloader = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    const box1 = useRef();
  const box2 = useRef();
  
  useEffect(() => {
    const boxes = [
      box1.current,
      box2.current,
    ];
    
    // Target the two specific elements we have forwarded refs to
    gsap.to(boxes, {
      x: 100,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
    
  }, []);
  
    return (
        // <>
        //   <div className="loader">
        //       <div className="progress">
        //           <div id="bar">

        //           </div>
        //           <div id="barConfirm">
        //               0%
        //           </div>
        //       </div>
        //   </div>  
        // </>
        <div className="app" ref={el}>
        <Box>Box</Box>
      </div>
    )
}

export default Preloader
