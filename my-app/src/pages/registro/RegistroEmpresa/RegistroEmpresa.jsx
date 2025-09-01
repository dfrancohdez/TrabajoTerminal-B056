import Header from "../../../components/Header/Header"

const RegistroEmpresa=()=>{
    return(
        <div>
            <Header/>
            <div className="background d-flex justify-content-center">
            <form className="d-flex flex-column align-items-center">
                <div className="input__container mt-3">
                    <h3 className="bold">Impulsa el crecimiento de tu empresa con el talento adecuado</h3>
                    <p>Completa este formulario para crear el perfil de tu empresa y formar parte de nuestra red. </p>
                </div>
                <p>Información general</p>
                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Nombre de la empresa</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder="Bancomer"
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                </div>

                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Sector o industria</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                </div>


                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Descripción de la empresa</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                    
                </div>

                
                <button className="btn btn-primary mb-3">Siguiente</button>
            </form>

            </div>
        </div>
    )
}
export default RegistroEmpresa;