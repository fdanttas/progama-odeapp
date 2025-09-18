// src\assets\Header\index.jsx

import {  NavLink, Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo da Contabilidade" />
                    <span>Contabilidade Dendenzereiros</span>
                </Link>
                <Nav className="nav">
                    <NavLink to="/" className={({isActive}) => isActive  ? 'link active' : 'link'}>
                    Home
                    </NavLink>
                    <NavLink to="/sobre" className={({isActive}) => isActive  ? 'link active' : 'link'}>
                    Sobre nós
                    </NavLink>
                    <NavLink to="/contato" className={({isActive}) => isActive  ? 'link active' : 'link'}>
                    Contato
                    </NavLink>
                </Nav>
            </div>      


        </header>
    );
}

import { Nav } from "react-bootstrap";
export default Header;