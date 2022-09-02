import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {

    const url = 'https://static.vecteezy.com/system/resources/previews/006/735/456/original/roaring-lion-logo-template-design-illustration-vector.jpg';

    return (
    <section className="containerNav">
        <header className="navigation">
            <img src={url} alt="imagem" id="image_nav"/>
            <nav className="navbar">
                <ul className="nav_categories">
                    <li className="nav_itens">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav_itens"> 
                        <Link to="/MembersPage">Página de membros</Link>
                    </li>
                    <li className="nav_itens" >
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </section>
    )

} 

export default Navbar;