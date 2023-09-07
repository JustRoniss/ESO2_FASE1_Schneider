import Hands from "../assets/undraw_environment_iaus.svg"

const BottomLeftBackground = () => {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: 0,
          width: '900px',
          height: '50%', 
          background: `url(${Hands})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>
    );
  };
  
  export default BottomLeftBackground;