import Header from "../../components/Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResetPassword2 from "./ResetPassword2";
import ResetPassword3 from "./ResetPassword3";

const ResetPassword = ()=>{
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [step, setStep] = useState(1);
    const [email,setEmail]= useState("");
    const [code,setCode]= useState(0);
    const [newEmail,setNewEmail] = useState("");
    const [password,setPassword] =useState("");
    
    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
        const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
      // **Paso 1: Enviar código al correo**
  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(result.message || "Código enviado al correo.");
        setStep(2); // Avanza al paso 2
      } else {
        alert(result.error || "Error al enviar el código.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error.");
    }
  };

  // **Paso 2: Validar código ingresado**
  const handleValidateCode = async (event) => {
    event.preventDefault();

    if (!code || code.trim().length !== 6) {
      alert("Código inválido. Debe ser de 6 dígitos.");
      return;
    }

    setCode(code.trim()); // Almacena el código temporalmente
    alert("Código validado. Continúa con el cambio de contraseña.");
    setStep(3); // Avanza al paso 3
  };

  // **Paso 3: Restablecer contraseña**
  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!password || password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code: code, password }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        //setSuccess(true); // Muestra el mensaje final
        //setStep(4); // Avanza al paso 4 (Confirmación final)
        navigate("/login");
      } else {
        alert(result.error || "Error al restablecer contraseña.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error.");
    }
  };
    return(
        <div className="background">
            <Header />
            {step === 1 && <form className={`needs-validation ${validated ? "was-validated" : ""} form__container--h-auto`} noValidate onSubmit={handleForgotPassword}>
                <h2 className="bold">Restablecer tu contraseña</h2>
                <p>Ingresa el correo electrónico asociado a tu cuenta.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label bold">Correo</label>
                    <input
                    type="email"
                    className="form__input--borde form-control"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e)=>(setEmail(e.target.value))}
                    required
                    />
                    <div className="invalid-feedback">Por favor, introduce un código válido.</div>
                </div>


                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>}
            {step === 2 && (<ResetPassword2 setCode={setCode} code={code} handleValidateCode={handleValidateCode}/>)}
            {step === 3 && (<ResetPassword3 handleResetPassword={handleResetPassword} setPassword={setPassword} password={password}/>)}
        </div>
    )
}
export default ResetPassword;