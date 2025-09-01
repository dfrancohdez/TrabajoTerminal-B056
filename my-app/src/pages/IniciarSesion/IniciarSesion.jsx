import Header from "../../components/Header/Header"
import { useState } from "react";
import './_iniciarSesion.scss'

const IniciarSesion=()=>{
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
    return(
        <div className="background">
            <Header />
            <form className={`needs-validation ${validated ? "was-validated" : ""} form__container`} noValidate onSubmit={handleSubmit}>
                <h2 className="bold">Iniciar sesión</h2>
                <p>Completa los campos para ingresar a tu cuenta. ¿Aún no tienes una cuenta? crear cuenta</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Correo electrónico</label>
                    <input
                    type="email"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="ejemplo@correo.com"
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
                    />
                    <div className="invalid-feedback">La contraseña debe tener al menos 6 caracteres.</div>
                </div>
                <p>¿olvidaste tu contraseña?</p>

                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}
export default IniciarSesion;