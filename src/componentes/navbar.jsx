import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/dalw.jpg"
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="enlaces">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/institucional">Institucional</Link></li>
                </ul>
            </div>
            <div  className="logo-sector">
                <img src={logo} alt="logo de DALW"/>
            </div>
            <div className="enlaces">
                <ul className="nav-links">
                    <li><Link to="/capacitacion">Capacitación</Link></li>
                    <li><Link to="/telefonos-utiles">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}