import React, { useState } from 'react';
import './Midscreen.css'
import { useNavigate } from 'react-router-dom';

const MidscTile = (Props) => {
  const Navigate = useNavigate ()
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  console.log(`{${Props.style}}`)

  return (
    <div
      className={`component ${isFocused ? 'focused' : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={()=>{Navigate(`/${Props.link}`)}}
      style={{margin: Props.style?? "", position: Props.position?? ""}}
    >
      <div className='inside'>
        <div className='text'>
        ENCONTRO DE CASAIS
        </div>
      </div>
    </div>
  );
};

export default MidscTile;