import Header from '../../components/Header/Header'
import './_registro.scss'
import empresa from '../../assets/images/Hands Folder.png'
import estudiante from '../../assets/images/Hands Graduate.png'
const Registro=()=>{
    return(
        <div>
            <Header/>
            <div className='background'>
                <div className='container pt-5'>
                    <div className='row gap-5'>
                        <div className='registro__containerOptions col-6 d-flex flex-column align-items-center justify-content-center'>
                            <div className='d-flex justify-content-center' style={{width:"100%"}}><img src={estudiante}></img></div>
                            <h2 className='bold'>Estudiante</h2>
                        </div>
                        <div className='registro__containerOptions col-6 d-flex flex-column align-items-center justify-content-center'>
                            <img style={{maxWidth:"382px",width:"100%"}} src={empresa}></img>
                            <h2 className='bold'>Empresa</h2>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Registro;