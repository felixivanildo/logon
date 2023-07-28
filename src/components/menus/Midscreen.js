import React, { useState } from 'react';
import './Midscreen.css'
import { useNavigate } from 'react-router-dom';

const MidscTile = (Props) => {
  
  return (
    <div className='midscreenMenu'>
        {Props.content}
    </div>
     
  );
};

export default MidscTile;