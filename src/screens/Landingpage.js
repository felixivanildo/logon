import React from "react";
import "./Landing.css"
import Navbar from "../components/Navbar/Navbar";
import MidscTile from "../components/tiles/Midscreen";

function Landing () {
 return(
    <div className="background">
        <Navbar/>
        <div className="siteBd" style={{display: "flex", flexDirection: "column"}}>
        <MidscTile link="" />
       
        </div>
        
    </div>
 )

}

export default Landing