import Header from "../../components/Header/Header"
import './_informacion.scss'
const Informacion =()=>{
    return(
        <div className="informacion">
            <Header/>
            <div className="font-tertiary informacion__title tx-blue">
                Plataforma para la vinculación de estudiantes de ESCOM con empresas para la realización de estancias profecionales
            </div>
            <div className="font-tertiary informacion__segundaParte tx-blue">
                <div>
                    50 Estudiantes
                </div>
                <div>
                    70 Empresa
                </div>
                <div>
                    90 Vacantes
                </div>
            </div>
            <div className="font-tertiary informacion__terceraParte">
                ¿Listo para tu siguiente empleo? Explora vacantes y envía tu postulación en minutos.
            </div>
        </div>
    );
}
export default Informacion;