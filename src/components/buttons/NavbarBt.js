import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";



function NavButton(Props) {

    
const [color, setColor] = useState([{ background: 'rgb(0, 147, 221)' }, { texto: "white" }])
 
const enterhandler = () => {
    setColor([{ background: 'white' }, { texto: "black" }])

}

const Navigate = useNavigate()


const leavehandler = () => {
    setColor([{ background: 'rgb(0, 147, 221)' }, { texto: "white" }])
}



    return (
        <div>
            {Props.type === "dropdown" && <div classname="navbutton" onMouseEnter={enterhandler} onMouseLeave={leavehandler} style={{
            background: `${color[0].background}`,
            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'
        }}><p style={{
            marginLeft: '20px', color: `${color[1].texto}`, textDecoration: 'none', fontSize: "large", fontWeight: 'bold',
            display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px'
        }}>{Props.nome}</p></div>}



        {Props.type !== "dropdown" && 
        <div classname="navbutton" onMouseEnter={enterhandler} onMouseLeave={leavehandler} style={{
            background: `${color[0].background}`,
            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'
        }} onClick={() => { Navigate(`/${Props.link}`) }}>

            <p style={{
                marginLeft: '20px', color: `${color[1].texto}`, textDecoration: 'none', fontSize: "large", fontWeight: 'bold',
                display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px'
            }}>{Props.nome}</p>

            {/* {Props.child} */}
        </div>
        }
        </div>
    )
}


export default NavButton