import React from "react";
import "./Landing.css"
import Navbar from "../components/Navbar/Navbar";
import MidscTile from "../components/menus/Midscreen";
import Divisionbar from "../components/assets/Divisinbar";
import Movimento from "../components/formularios/Movimento";

function Landing () {
 return(
    <div className="background">
        <Navbar/>
        <div>

            <MidscTile content={<Movimento/>} ></MidscTile>
        </div>
        
    </div>
 )

}

export default Landing