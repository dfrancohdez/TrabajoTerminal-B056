import Header from "../../../components/Header/Header"
import img from "../../../assets/images/Vector.png"
const RegistroEmpresa3=()=>{
    return(
        <div className="d-flex flex-column align-items-center form__registro">
           {/* <Header/>
            <div className="background d-flex justify-content-center">
            <form className="d-flex flex-column align-items-center form__registro">*/}
                <p className="bold">Información de la cuenta</p>
                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Dirección</label>
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
                    <label htmlFor="nombreEmpresa" className="form-label bold">Página web(opcional)</label>
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
                    <label htmlFor="nombreEmpresa" className="form-label bold">Contraseña</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder=""
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                    
                </div>
                <div className="w-100">
                <label htmlFor="logo" className="input__container d-flex flex-column" style={{width:"179px",height:"163px"}}>
                    <div className="bold">Logo </div>
                    <div style={{margin:"0 auto"}}>
                        <img style={{width:"70px"}} src={img}></img>
                    </div>  
                </label>    
                   
                    
                <input
                    type="file"
                    className="form__input--borde form-control"
                    id="logo"
                    placeholder=""
                    required
                    style={{display:'none'}}
                />
                <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                </div>
                
                <div className="d-flex justify-content-around w-100">
                    <button className="btn btn-primary mb-3">Atrás</button>
                    <button className="btn btn-primary mb-3">Enviar</button>
                </div>
            {/*    
            </form>

            </div>*/}
        </div>
    )
}
export default RegistroEmpresa3;