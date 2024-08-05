import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PanelPrincipal } from "./modules/pages/PanelPrincipal";
import { SolicitudGrado } from "./modules/pages/SolicitudGrado";
import { SolicitudResolucion } from "./modules/pages/SolicitudResolucion";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* ruta inicial */}
          <Route path="/" element={<Navigate to="/panelprincipal" />} />
          
          {/* demas rutas */}
          <Route path="/panelprincipal" element={<PanelPrincipal />} />
          <Route path="/solicitudgrado" element={<SolicitudGrado />} />
          <Route path="/solicitudresolucion" element={<SolicitudResolucion />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
