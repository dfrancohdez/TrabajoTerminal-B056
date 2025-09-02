import Header from "../../components/Header/Header";
import { useState } from "react";
import './_verify.scss'
const Verify = ()=>{
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
            <form className={`needs-validation ${validated ? "was-validated" : ""} form__container--h-auto`} noValidate onSubmit={handleSubmit}>
                <h2 className="bold">Verifica tu cuenta</h2>
                <p>Ingresa el código que enviamos a tu correo.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Código</label>
                    <input
                    type="number"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="1234"
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un código válido.</div>
                </div>


                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}
export default Verify;