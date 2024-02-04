/* eslint-disable react/prop-types */

function ControlPresupuesto({ presupuesto, setPresupuesto }) {

    const handleReset = (ev) => {
        setPresupuesto(0)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafico</p>
            </div>
            <div className="contenido-presupuesto">
                <button onClick={handleReset} className="">
                    reset
                </button>
                    <p>
                    <span>Presupuesto: </span> ${presupuesto}
                    </p>
                </div>  
        </div>
    )
}

export default ControlPresupuesto;
