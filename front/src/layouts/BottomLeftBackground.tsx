import Hands from "../assets/undraw_environment_iaus.svg"

const BottomLeftBackground = () => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: 0,
          width: '20vw', 
          height: '30vh', 
          background: `url(${Hands})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>
    );
  };
  
  export default BottomLeftBackground;