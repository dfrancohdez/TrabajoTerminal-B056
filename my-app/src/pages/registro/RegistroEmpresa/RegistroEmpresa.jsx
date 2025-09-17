import Header from "../../../components/Header/Header"
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar el hook
import RegistroEmpresa2 from "./RegistroEmpresa2";
import RegistroEmpresa3 from "./RegistroEmpresa3";
import Verify from "../../Verify/Verify";



const RegistroEmpresa=()=>{
const [validated, setValidated] = useState(false);
const [step, setStep] = useState(1);
const [code, setCode] = useState(0);
const nextStep = () => setStep((prev) => prev + 1);
const prevStep = () => setStep((prev) => prev - 1);
const navigate = useNavigate();
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
const handleChangeCode = (e) => {
    setCode(e.target.value);
  };
  // **Paso 1: Registro del usuario**
  const handleRegister = async (event) => {
    event.preventDefault(); // Evita recargar la página

    const data = {
        nombreEmpresa: formData.nombreEmpresa,
        telefono: formData.telefono,
        logo: "",
        email: formData.correo,
        password: formData.contraseña
    };

    console.log("Datos enviados:", data); // Log para validar los datos antes de enviarlos

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/signup`, // Endpoint de la API
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
        alert("Registro exitoso. Se ha enviado un código de confirmación.");
        //setStep(2); // Avanza al siguiente paso (confirmar código)
        nextStep()
      } else {
        alert(result.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // **Paso 2: Confirmar el código**
  const handleConfirmCode = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/confirm-email`, // Endpoint para confirmar email
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:formData.correo, code }), // Enviar el email y código
        }
      );

      const result = await response.json();
      console.log("Respuesta del servidor:", result);

      if (response.ok) {
        alert("Correo confirmado con éxito. Ahora puedes iniciar sesión.");
        navigate("/"); // Redirige al login
      } else {
        alert(result.error || "Error al confirmar el código.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
    return(
        <div>
            <Header/>
            <div className="background d-flex justify-content-center">
            <form className="d-flex flex-column align-items-center form__registro">
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
                {step === 3 && (<RegistroEmpresa3 prevStep={prevStep} handleRegister={handleRegister} handleChange={handleChange} formData={formData}/>)}
                {step === 4 && (<Verify handleConfirmCode={handleConfirmCode} handleChange={handleChangeCode} code={code}/>)}
            </form>
                  
            </div>
        </div>
    )
}
export default RegistroEmpresa;