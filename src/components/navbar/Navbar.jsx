import React from 'react'
import './Navbar.css'


function Navbar(props){
    const html = props.menu.map((item)=>
        //eslint-disable-next-line
        <li><a href={item=='Login'?"/":`/${item}`}>{item}</a></li>
    )
    return(
        <div className="Navbar">
            <p id='title'>AuthPortal</p>
            <ul>{html}</ul>
        </div>
    )
}

export default Navbar