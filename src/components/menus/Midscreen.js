import React, { useState } from 'react';
import './Midscreen.css'
import { useNavigate } from 'react-router-dom';

const MidscTile = (Props) => {
  
  return (
    <div>
       
    <div className='midscreenMenu'>
    <h2 style={{display: "flex", justifyContent: "center"}}>{Props.title}</h2>
   
        {Props.content}
    </div>
    </div>
     
  );
};

export default MidscTile;