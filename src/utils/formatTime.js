const formatTime = (time) => {
  if (isNaN(time) || time === undefined || time === null) {
    return '00:00';  
  }
  
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');  

  return `${String(minutes).padStart(2, '0')}:${seconds}`;  
};

export default formatTime;
