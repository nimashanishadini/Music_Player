import React from "react";
import MusicPlayer from "./Components/MusicPlayer";


const App = () => {
  return (
    <>
    <div style={{backgroundColor:'gray', margin:'0px',padding:'0px',marginTop:'30px',width:'0',display:'flex',justifyContent:'center',marginLeft:'650px'}}>


    <div style={{display:'flex', justifyContent:'center', alignItems:'center',color:'white',fontSize:'20px'}}>
      <MusicPlayer/>
    </div>
    </div>
    </>
  );
};

export default App;