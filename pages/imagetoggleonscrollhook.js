import React, {useState, useEffect} from "react";
import ImageToggleOnScrollHook from '../src/ImageToggleOnScrollHook';

const imagetoggleonscrollhook = () => {

  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId:${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  });

  return (
    <div>
      <span>mouseEventCnt: ${mouseEventCnt}</span>
      {
        [1124,187,823,1269,1530].map((speakerId)=>{
          return (
            <div key={speakerId}
              onMouseOver={() => {
                setCurrentSpeakerId(speakerId);
                setMouseEventCnt(mouseEventCnt + 1);
                console.log(`onMouseOVer:${speakerId}`);
              }}>
              <ImageToggleOnScrollHook 
                primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              />
            </div>
          );
        })}
    </div>
  );
};

export default imagetoggleonscrollhook;
