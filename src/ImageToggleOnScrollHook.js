import React, { useRef } from 'react';

const ImageToggleOnScrollHook = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);


  return (
    <div>
      <i>ImageToggleOnMouseOver - Functional Component React Hooks</i>
      <br />
      <img
        
        src={primaryImg}
        alt=""
        ref={imageRef}
      />
    </div>
  );
};

export default ImageToggleOnScrollHook;
