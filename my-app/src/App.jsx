
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // Importa la ruta pública
import Informacion from "./pages/Informacion/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas protegidas cuando el usuario ya está logueado */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Informacion />
            </PublicRoute>
          }
        />

        {/* Rutas protegidas cuando el usuario está logueado */}
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
       
      </Routes>
    </Router>
  );
}

export default App;

