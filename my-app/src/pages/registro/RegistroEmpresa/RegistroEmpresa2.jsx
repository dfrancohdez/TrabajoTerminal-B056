import Header from "../../../components/Header/Header"

const RegistroEmpresa2=({handleChange,formData,prevStep,nextStep})=>{
    return(
        <div className="d-flex flex-column align-items-center form__registro">
            {/*<Header/>
            <div className="background d-flex justify-content-center">
            <form className="d-flex flex-column align-items-center form__registro">*/}
                <p className="bold">Datos de contacto</p>
                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Nombre del representante</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder="Bancomer"
                    name="nombreRepresentante"
                    value={formData.nombreRepresentante}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                </div>

                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Cargo en la empresa</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                </div>


                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Teléfono de contacto</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                    
                </div>

                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Correo electrónico</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                    
                </div>
                <div className="d-flex justify-content-around w-100">
                    <button onClick={prevStep} className="btn btn-primary mb-3">Atrás</button>
                    <button onClick={nextStep} className="btn btn-primary mb-3">Siguiente</button>
                </div>
                
            {/*</form>

            </div>*/}
        </div>
    )
}
export default RegistroEmpresa2;