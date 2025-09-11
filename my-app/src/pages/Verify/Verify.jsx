import Header from "../../components/Header/Header";
import { useState } from "react";
import './_verify.scss'
const Verify = ({handleConfirmCode,handleChange,code})=>{
    return(
            <div className="form__container--h-auto form__registro">
                <h2 className="bold">Verifica tu cuenta</h2>
                <p>Ingresa el código que enviamos a tu correo.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Código</label>
                    <input
                    type="number"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder="1234"
                    value={code}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un código válido.</div>
                </div>
                <button type="submit" onClick={handleConfirmCode} className="btn btn-primary">Ingresar</button>
            </div>
    )
}
export default Verify;