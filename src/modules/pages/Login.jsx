import React, { useState } from 'react';
import { Navbar } from "../../components/Navbar.jsx";
import '../../styles/Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div>
        <Navbar />
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button type="submit" className="login-button">Iniciar Sesión</button>
                <div className="centered">
                    <a href="/olvide-contrasena">Olvide mi contraseña</a>
                    <a href="/nuevo-usuario">Registrarse</a>
                </div>
            </form>
        </div>
    </div>   
  );
}
