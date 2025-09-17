import { Link } from 'react-router-dom';
import './_header.scss'
const Header=()=>{
    return(
        <nav className='nav'>
            <ul className='font-secondary'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Sobre nosotros</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/login">Iniciar sesión</Link></li>
                <li><Link to="/signup">Crear cuenta</Link></li>
            </ul>
        </nav>
    )
}
export default Header;
