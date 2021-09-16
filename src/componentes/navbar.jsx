import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/dalw.jpg';
export default function Navbar() {
    return (
        <nav class="navbar">
            <div class="enlaces">
                <ul class="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/institucional">Institucional</Link></li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="logo de DALW"/>
            </div>
            <div class="enlaces">
                <ul class="nav-links">
                    <li><Link to="/capacitacion">Capacitación</Link></li>
                    <li><Link to="/telefonos-utiles">Telefonos útiles</Link></li>
                </ul>
            </div>
        </nav>
    )
}