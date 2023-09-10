import Nature from '../assets/undraw_nature_m5ll.svg'

const BottomBackground = () => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: 0,
          width: '15vw', 
          height: '30vh', 
          background: `url(${Nature})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>
    );
  };
  
  export default BottomBackground;