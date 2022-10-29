import { useContext } from "react"
import { DarKmodeContext } from "./context/DarkmodeContext"


const BotonDarKmode = () => { 

    const DarKmode = useContext (DarKmodeContext)

    


    return(
    
        <div className="boton1">
            <button  className="btn boton"> darkmode: { DarKmode ? 'Activado! ': 'Desactivado!' }</button>
        </div>
    )}



export default BotonDarKmode