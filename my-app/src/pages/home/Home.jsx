import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";


const Home=()=>{
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar token
    localStorage.removeItem("username"); // Eliminar nombre
    navigate("/"); // Redirigir al login
  };
    return(
        <div>
            <Header />
            Home ruta protegida
            <button style={{display:"block"}}onClick={handleLogout} className="button btn-primary">sign out</button>
        </div>
    )
}
export default Home;