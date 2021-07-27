import ImageToggleOnScrollHook from '../src/ImageToggleOnScrollHook';

const indexchangeonscrollhook = () => {
  return (
    <div>
      {
        [1124,187,823,1269,1530].map((speakerId)=>{
          return (
            <div key={speakerId}>
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

export default indexchangeonscrollhook;
