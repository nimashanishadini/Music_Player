import React from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import useMusicStore from '../store/useMusicStore';
import formatTime from '../utils/formatTime';

const Controls = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    toggleSong,
    nextSong,
    prevSong,
    setCurrentTime,
  } = useMusicStore();

 
  const handleProgressChange = (event) => {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = offsetX / width;
    const newTime = percentage * duration;
    setCurrentTime(newTime);
  };

  return (
    <>
      <div style={{ position: 'relative', height: '0.25rem', backgroundColor: '#374151', borderRadius: '0.25rem', marginBottom: '1rem' }}>
        
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            backgroundColor: 'green',
            boxShadow: '0 0 5px #22c55e',
            borderRadius: '0.25rem',
            width: `${(currentTime / duration) * 100}%`,
          }}
        >
          <span style={{
            position: 'absolute',
            right: '-0.375rem',
            top: '-0.25rem',
            width: '0.75rem',
            height: '0.75rem',
            backgroundColor: '#86efac',
            borderRadius: '50%',
          }} />
        </div>

      
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
          onClick={handleProgressChange}
        />
      </div>

     
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '.5rem',
      }}>
        <button onClick={prevSong}>
          <FaStepBackward style={{ transition: 'color 0.4s' }} />
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button
            onClick={toggleSong}
            style={{
              position: 'relative',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '9999px',
              boxShadow: '0px 0px 10px 3px rgba(0, 255, 0, 0.5), 0px 0px 20px 5px rgba(0, 255, 0, 0.3)',  // glow-button
            }}
          >
            {isPlaying ? (
              <FaPause style={{ color: 'black' }} />
            ) : (
              <FaPlay style={{ color: 'black' }} />
            )}
            <div style={{
              position: 'absolute',
              inset: '0',
              borderRadius: '9999px',
              animation: 'pulse 1.5s infinite',
              background: 'linear-gradient(to right, #86efac, #15803d)',
              opacity: 0.3,
              filter: 'blur(8px)',
            }} />
          </button>
        </div>

        <button onClick={nextSong}>
          <FaStepForward style={{ transition: 'color 0.3s' }} />
        </button>
      </div>
    </>
  );
};

export default Controls;
