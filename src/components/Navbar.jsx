import React from 'react';
import '../styles/Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-titulo"></div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/*">Productos</a></li>
        <li><a href="/*">Contacto</a></li>
        <li className="dropdown">
          <a href="/#" className="dropbtn">Categorías</a>
          <div className="dropdown-content">
            <a href="/categoria/tecnologia">Tecnología</a>
            <a href="/categoria/ropa">Ropa</a>
            <a href="/categoria/hogar">Hogar</a>
          </div>
        </li>
      </ul>
      <div className="navbar-cart">
        <a href="/carrito">Carrito (0)</a>
      </div>
      <div className="navbar-login">
        <a href="/login">Iniciar Sesión</a>
      </div>
    </nav>
  );
}
