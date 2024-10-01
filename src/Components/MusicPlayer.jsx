import React, { useEffect, useRef } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import SongDetails from './SongDetails';
import Controls from './Controls';
import useMusicStore from '../store/useMusicStore';

const MusicPlayer = () => {
  const { initAudio, musicLists, currentSongIndex } = useMusicStore();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      initAudio(audio);
      audio.src = musicLists[currentSongIndex].src; 
    }
}, []);



  return (
    <div style={{ padding: '2.5rem', backgroundColor: '#1f2937', borderRadius: '0.75rem', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', width: '20rem' }}>
      
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
        <div style={{}}> - </div>
        <p style={{}}>Playing Now</p>
        <button style={{}}>
          <HiOutlineMenuAlt3 style={{ fontSize: '1.5rem' }} />
        </button>
      </div>

      <SongDetails />
      <Controls />

     
      <audio
        ref={audioRef}
        onEnded={() => useMusicStore.getState().nextSong()} 
      />
    </div>
  );
}

export default MusicPlayer