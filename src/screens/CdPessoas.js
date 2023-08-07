import React from "react";
import "./Landing.css"
import Navbar from "../components/Navbar/Navbar";
import MidscTile from "../components/menus/Midscreen";
import Pessoas from "../components/formularios/Pessoas";

function CdPessoa () {
 return(
    <div className="background">
        <Navbar/>
        <div>

            <MidscTile content={<Pessoas/>} title="Cadastrar Pessoa"></MidscTile>
        </div>
        
    </div>
 )

}

export default CdPessoa