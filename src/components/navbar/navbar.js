import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav classNAme="navbar">
 <div className="header"> 
                         <h1>Cafe@Belco</h1>
</div>
<ul>
<li><Link to={'/'} className>Home</Link></li>
<li><Link to={'/menu'}>Menu</Link></li>
<li><Link to={'/aboutus'}>AboutUs</Link></li>
<li><Link to={'/contact'}>ContactUs</Link></li>
{/*<li> <a href="home.html">Home</a></li>
<li><a href="menu.html">Menu</a></li>
<li><a href="aboutus.html">Aboutus</a></li>
    <li><a href="contact.html">ContactUs</a></li> */}
</ul>
        </nav>
    )
}

export default Navbar;