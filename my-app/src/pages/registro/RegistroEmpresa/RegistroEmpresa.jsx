import Header from "../../../components/Header/Header"
import { useState } from "react";
import RegistroEmpresa2 from "./RegistroEmpresa2";
import RegistroEmpresa3 from "./RegistroEmpresa3";



const RegistroEmpresa=()=>{
const [step, setStep] = useState(1);
const nextStep = () => setStep((prev) => prev + 1);
const prevStep = () => setStep((prev) => prev - 1);
const [formData, setFormData] = useState({
    nombreEmpresa: "",
    sector: "",
    descripcion: "",
    nombreRepresentante:"",
    cargo:"",
    telefono:"",
    correo:"",
    direccion:"",
    pagina:"",
    contraseña:"",
    logo:""
  });
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };
  const handleSubmit = (e) => {
  e.preventDefault(); // evita que se recargue la página

  // aquí puedes mandar formData a tu backend o validarlo
  console.log("Formulario enviado con los datos:", formData);
  }
    return(
        <div>
            <Header/>
            <div className="background d-flex justify-content-center">
            <form className="d-flex flex-column align-items-center form__registro" onSubmit={handleSubmit}>
                {step === 1 && (<div><div className="input__container mt-3">
                    <h3 className="bold">Impulsa el crecimiento de tu empresa con el talento adecuado</h3>
                    <p>Completa este formulario para crear el perfil de tu empresa y formar parte de nuestra red. </p>
                </div>
                <p className="bold">Información general</p>
                <div className="input__container">
                    <label htmlFor="nombreEmpresa" className="form-label bold">Nombre de la empresa</label>
                    <input
                    type="text"
                    className="form__input--borde form-control"
                    id="nombreEmpresa"
                    placeholder="Bancomer"
                    name="nombreEmpresa"
                    value={formData.nombreEmpresa}
                    onChange={handleChange}
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
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
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
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un nombre válido.</div>
                    
                </div>
                 <div className="d-flex justify-content-around w-100">
                    <div style={{width:"63.88px",color:"#D9D9D9"}}>Atras</div>
                    <button onClick={nextStep} className="btn btn-primary mb-3">Siguiente</button>
                </div>
                
                </div>)}
                {step === 2 && (<RegistroEmpresa2 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} formData={formData}/>)}
                {step === 3 && (<RegistroEmpresa3 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} formData={formData}/>)}
            </form>

            </div>
        </div>
    )
}
export default RegistroEmpresa;