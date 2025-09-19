
import './_app.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // Importa la ruta pública
import Informacion from "./pages/Informacion/Informacion";

import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import IniciarSesion from './pages/IniciarSesion/IniciarSesion';
import Registro from './pages/registro/registro';
import RegistroEmpresa from './pages/registro/RegistroEmpresa/RegistroEmpresa';
import Verify from './pages/Verify/Verify';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Home from './pages/home/Home';
import InicioEmpresa from './pages/InicioEmpresa/InicioEmpresa';
import InicioEstudiante from './pages/InicioEstudiante/InicioEstudiante';
import MisVacantes from './pages/Empresa/MisVacantes/MisVacantes';

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
          path="/login"
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
          path="/signup-empresa"
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
        <Route
          path="/reset-password"
          element={
            <PublicRoute>
              <ResetPassword />
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
          path="/empresa/inicio"
          element={
            <PublicRoute>
              <InicioEmpresa />
            </PublicRoute>
          }
        />
        <Route
          path="/empresa/mis-vacantes"
          element={
            <PublicRoute>
              <MisVacantes />
            </PublicRoute>
          }
        />
        <Route
          path="/estudiante/inicio"
          element={
            <PublicRoute>
              <InicioEstudiante />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
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

