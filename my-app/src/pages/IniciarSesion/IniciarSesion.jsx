import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import './_iniciarSesion.scss'

const IniciarSesion=()=>{
    
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log(validated)
    }else{
    event.preventDefault();
    event.stopPropagation();
    
    handleLogin(event)
    }
    
  };

    // Manejar el envío del formulario
  const handleLogin = async (event) => {
    event.preventDefault(); // Evita recargar la página

    const data = {
      email,
      password,
    };

    console.log("Datos enviados:", data); // Log para validar los datos antes de enviarlos

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/login`, // Endpoint de la API
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Convertir datos a JSON
        }
      );

      const result = await response.json();
      console.log("Respuesta del servidor:", result);

      if (response.ok) {
        alert("Inicio de sesión exitoso");

        // Guardar los datos en localStorage
        localStorage.setItem("token", result.token); // Token
        localStorage.setItem("username", result.username); // Nombre
        localStorage.setItem("email", result.email); // Correo

        // Redirige al dashboard
        navigate("/home");
      } else {
        alert(result.error || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
    return(
        <div className="background">
            <Header />
            <form className={`needs-validation ${validated ? "was-validated" : ""} form__container`} noValidate onSubmit={handleSubmit}>
                <h2 className="bold">Iniciar sesión</h2>
                <p>Completa los campos para ingresar a tu cuenta. ¿Aún no tienes una cuenta? <Link to="/signup">crear cuenta</Link></p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Correo electrónico</label>
                    <input
                    type="email"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e)=>(setEmail(e.target.value))}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un correo válido.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label bold">Contraseña</label>
                    <input
                    type="password"
                    className="form__input--borde form-control"
                    id="password"
                    placeholder="********"
                    required
                    minLength="6"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <div className="invalid-feedback">La contraseña debe tener al menos 6 caracteres.</div>
                </div>
                <p><Link to="/reset-password">¿olvidaste tu contraseña?</Link></p>

                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}
export default IniciarSesion;