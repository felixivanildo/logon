import React from "react";
import Logo from "../../img/Cloud-Logo-by-Friendesign-Acongraphic-20.jpg"
import search from "../../img/search.png"
import NavButton from "../buttons/NavbarBt";
import "./Layout.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Navbar (){
  
    const Navigate = useNavigate ()

    useEffect(() => {
 
      
    })



    const navbarStyle = {
        // backgroundColor: '#0093DD',
        background: 'rgb(252,252,252)' ,
background: 'linear-gradient(357deg, rgba(252,252,252,0) 13%, rgba(251,251,251,0) 21%, rgba(0,212,255,1) 100%)',
        paddingTop: '0px',
        top: '0px',
        left: '0px',
        right: '0px',
        position: 'relative',
        zIndex: '50',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        // opacity: '60%'
        

      };

      const imgstyle = {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70px',
      backgroundPosition: 'center center',
      objectFit: 'cover',
      backgroundColor: "white", 
      width: "75px",
      height: "75px",
      marginLeft: "10%"
      }

    return(
        <div>
            <div className="navbar" style={navbarStyle}>
                <div style={imgstyle} />
                
                <NavButton link="landing" nome="PAGINA INICIAL"></NavButton>
                {/* <NavButton type="dropdown" nome="SETORES"></NavButton> */}
                <NavButton link="MinhaPagina" nome="MINHA PAGINA"></NavButton>
                <NavButton link="" nome="SAIR"></NavButton>
                
                             
                
{/*                
                    <input  className="searchinput" style={{marginLeft: "41%", width: "280px", height: "4px", borderRadius: "10px", border: "10px", backgroundColor:'#005CA1', borderColor: 'white',
                                    backgroundImage:  `url(${search})` ,
                                    backgroundRepeat:' no-repeat',
                                    backgroundSize: '7%',
                                    backgroundPosition: '10px',
                                    padding: '20px'
                                   
                                }}
                                    
                            onFocus={(data)=>{data.target.style.backgroundColor = "white"; data.target.style.backgroundImage = ""}} 
                            onBlur={(data)=>{data.target.style.backgroundColor = "#005CA1"; data.target.style.backgroundImage = `url(${search})`}}>
                            
                          

                    </input> */}
                
            </div>
        </div>
    )
}

export default Navbar