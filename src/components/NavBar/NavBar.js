import React from 'react';
import Logo from "./img/logo.png";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



function NavBar(){

    return(
        <div class="navbar"> 
            <img class="navbar-logo" src={Logo} alt={Logo}/>
            <h1>Argentti Bay</h1>
            <a href="x">COMPRAR</a>
            <a href="a">VENDER</a>
            <a href="i">SOPORTE</a>
            <CartWidget/>
        </div>
    )

}

export default NavBar;