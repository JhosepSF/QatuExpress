import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PanelPrincipal } from "./modules/pages/PanelPrincipal";
import { Producto } from "./modules/pages/Producto.jsx";
import { Cart } from "./modules/pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* ruta inicial */}
          <Route path="/" element={<Navigate to="/panelprincipal" />} />
          
          {/* demas rutas */}
          <Route path="/panelprincipal" element={<PanelPrincipal />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
