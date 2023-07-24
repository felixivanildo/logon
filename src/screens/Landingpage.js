import React from "react";
import "./Landing.css"
import Navbar from "../components/Navbar/Navbar";
import MidscTile from "../components/tiles/Midscreen";
import Divisionbar from "../components/assets/Divisinbar";

function Landing () {
 return(
    <div className="background">
        <Navbar/>
        <h1 style={{textShadow: '1px 1px 2px black', fontFamily: "Garamond", color: "white" ,display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "10%",    textJustify: "inter-word"}}>
            IGREJA SÃO VICENTE, GRACILIANO RAMOS <br></br>
            BOAS VINDAS
        </h1>
        <div className="MediumCLM" style={{display: "flex", flexDirection: "column"}}>
        <h1 className="defaultTimesRoman">EVENTOS</h1>
        <Divisionbar/>
        <MidscTile link="" />

        <Divisionbar/>
        </div>
        
    </div>
 )

}

export default Landing