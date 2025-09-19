import Header from "../../components/Header/Header";
import './_inicioEmpresa.scss'
import img1 from '../../assets/images/Hands Book.png'
import img2 from '../../assets/images/Dayflow Message.png'
import img3 from '../../assets/images/image 1.png'
const InicioEmpresa=()=>{
    return(
        <div className="background">
            <Header/>
            <div className="container mt-5 pb-5">
                <div className="row gy-3">
                    <div className="col-12 col-md-4">
                        <div className="registro__containerInicio d-flex flex-column align-items-center justify-content-center">
                            <div  style={{height:"190px"}} className="d-flex align-items-center justify-content-center"><img src={img1} style={{maxWidth:"250px",width:"90%"}}/></div>
                            <p className="bold">Gestionar vacantes</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="registro__containerInicio d-flex flex-column align-items-center justify-content-center">
                            <div  style={{height:"190px"}} className="d-flex align-items-center justify-content-center"><img src={img2} style={{maxWidth:"250px",width:"90%"}}/></div>
                            <p className="bold">Mensajería</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="registro__containerInicio d-flex flex-column align-items-center justify-content-center">
                            <div style={{height:"190px"}} className="d-flex align-items-center justify-content-center"><img src={img3} style={{maxWidth:"250px",width:"90%"}}/></div>
                            <p className="bold">Perfil</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InicioEmpresa;