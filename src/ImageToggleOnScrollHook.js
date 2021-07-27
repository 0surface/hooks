import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScrollHook = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >=0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll",scrollHandler);
    return () =>{
      window.removeEventListener("scroll", scrollHandler)
    }
  },[]);

  const scrollHandler =  () => {
    setInView(isInView());
  };

  return (
    <div>
      <i>ImageToggleOnMouseOver - Functional Component React Hooks</i>
      <br />
      <img
        
        src={inView ? secondaryImg: primaryImg}
        alt=""
        ref={imageRef}
      />
    </div>
  );
};

export default ImageToggleOnScrollHook;
