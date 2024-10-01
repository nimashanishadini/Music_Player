import React, { useEffect, useRef, useState } from 'react'
import useMusicStore from '../store/useMusicStore';

const SongDetails = () => {
  const {currentSongIndex,musicLists,isPlaying} =  useMusicStore()

  const diskRef = useRef(null);

  const currentSong = musicLists[currentSongIndex];

 
  const [rotation, setRotation] = useState(0);

 
  useEffect(() => {
    let animationId;

    const animateDisk = () => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360); // Increment rotation by 0.5 deg
      animationId = requestAnimationFrame(animateDisk);
    };

    if (isPlaying) {
      animationId = requestAnimationFrame(animateDisk);
    } else {
      cancelAnimationFrame(animationId);
    }

    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
      <div style={{ position: 'relative', width: '9rem', height: '9rem', borderRadius: '9999px' }}>
       
        <img
          src={currentSong.img}
          alt={currentSong.title}
          ref={diskRef}
          style={{
            transform: `rotate(${rotation}deg)`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 20,
            borderRadius: '9999px'
          }}
          
        />
      
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            borderRadius: '9999px',
            width: '110%',
            height: '110%',
            background: 'linear-gradient(to right, #86efac, #3b82f6)',
            opacity: 0.3,
            filter: 'blur(8px)',
            animation: isPlaying ? 'pulse 1.5s infinite' : 'none'
          }}
        />
      </div>

     
      <div style={{ textAlign: 'center', margin: '1.25rem 0' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}> {currentSong.title} </h2>
        <p style={{ color: '#9ca3af' }}>{currentSong.artist}</p>
      </div>
    </div>
  );
}

export default SongDetails