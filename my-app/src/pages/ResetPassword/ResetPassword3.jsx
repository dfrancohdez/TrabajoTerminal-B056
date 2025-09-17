import Header from "../../components/Header/Header";
import { useState } from "react";

const ResetPassword3 = ({setPassword,password,handleResetPassword})=>{
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
                <p>Ingresa nueva contraseña</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Contraseña</label>
                    <input
                    type="email"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="1234"
                    value={password}
                    onChange={(e)=>(setPassword(e.target.value))}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un código válido.</div>
                </div>


                <button onClick={handleResetPassword} className="btn btn-primary">Restablecer</button>
            </form>
    )
}
export default ResetPassword3;