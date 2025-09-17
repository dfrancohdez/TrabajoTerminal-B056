import Header from "../../components/Header/Header";
import { useState } from "react";

const ResetPassword2 = ({setCode,code,handleValidateCode})=>{
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
            <form className={`needs-validation ${validated ? "was-validated" : ""} form__container--h-auto`} noValidate>
                <h2 className="bold">Restablecer tu contraseña</h2>
                <p>Ingresa el código que enviamos a tu correo</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Código</label>
                    <input
                    type="email"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="1234"
                    value={code}
                    onChange={(e)=>(setCode(e.target.value))}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un código válido.</div>
                </div>


                <button onClick={handleValidateCode} className="btn btn-primary">Siguiente</button>
            </form>
    )
}
export default ResetPassword2;