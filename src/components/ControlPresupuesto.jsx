/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Item from "./Item";

function ControlPresupuesto({ presupuesto, setPresupuesto, setIsValid }) {
    const [controlGasto, setControlGasto] = useState();

    const effectHandlerControlGasto = () => {
        const data = localStorage.getItem("gasto_total");
        const storage = data ? JSON.parse(+data) : 0;
        setControlGasto(+storage + +presupuesto);
        localStorage.setItem("gasto_total", controlGasto)
        
    }
    useEffect(effectHandlerControlGasto,[controlGasto, presupuesto])
    const handleReset = (ev) => {
        ev.preventDefault();

        setPresupuesto();
        setIsValid(false);
    };
    const formatText = (value) => {
        return value.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'USD'
        });
    }
    

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafico</p>
            </div>
            <div className="contenido-presupuesto">
                <button onClick={handleReset} className="reset-app">
                    reset
                </button>
                    <Item fn={formatText} value={+presupuesto}>
                        <span>Presupuesto: </span> 
                    </Item>
                    <Item fn={formatText} value={Number(presupuesto) - 100}>
                        <span>Disponible: </span>
                    </Item>
                    <Item fn={formatText} value={controlGasto}>
                        <span>Gastado: </span> 
                    </Item>
                </div>  
        </div>
    )
}

export default ControlPresupuesto;
