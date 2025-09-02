
import './_app.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // Importa la ruta pública
import Informacion from "./pages/Informacion/Informacion";

//import 'bootstrap/dist/css/bootstrap.min.css';
import IniciarSesion from './pages/IniciarSesion/IniciarSesion';
import Registro from './pages/registro/registro';
import RegistroEmpresa from './pages/registro/RegistroEmpresa/RegistroEmpresa';
import Verify from './pages/Verify/Verify';

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
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <IniciarSesion />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Registro />
            </PublicRoute>
          }
        />
        <Route
          path="/signupempresa"
          element={
            <PublicRoute>
              <RegistroEmpresa />
            </PublicRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <PublicRoute>
              <Verify />
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

