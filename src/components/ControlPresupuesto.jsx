/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Item from "./Item";

function ControlPresupuesto({ total, presupuesto, setPresupuesto, setIsValid }) {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(
        () => { 
            const reduce = total.reduce((acc, value) => +value.presupuesto + +acc, 0);
            const t_disponible = +presupuesto - +reduce;
            setGastado(reduce);
            setDisponible(t_disponible);
        }, [presupuesto, total]
    );
   
    const handleReset = (ev) => {
        ev.preventDefault();

        setPresupuesto(0);
        setIsValid(false);
        localStorage.clear();
    };
    const formatText = (value = 0) => {
        if (value) {
            return value.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'USD'
            });
        }
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
                    <Item fn={formatText} value={+disponible}>
                        <span>Disponible: </span>
                    </Item>
                    <Item fn={formatText} value={+gastado}>
                        <span>Gastado: </span> 
                    </Item>
                </div>  
        </div>
    )
}

export default ControlPresupuesto;
