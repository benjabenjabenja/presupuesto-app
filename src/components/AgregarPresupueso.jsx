import { useState } from "react"
import AlertError from "./AlertError";

/* eslint-disable react/prop-types */
const AgregarPresupueso = ({ presupuesto, setPresupuesto, setIsValid }) => {

    const [showAlert, setShowAlert] = useState(false);

    const handleSumbit = (ev) => {
        ev.preventDefault();

        if (presupuesto < 0) {
            setShowAlert(true);
            return;
        }
        showAlert && setShowAlert(false);
        setIsValid(true);
    };

    return (
        <>
            <div className="contenedor-presupuesto contenedor sombra">
                <form
                    onSubmit={handleSumbit}
                    className="formulario">
                    {
                        showAlert && (
                            <AlertError tipo={'error'}>
                                El presupuesto tiene que ser menor a 0
                            </AlertError>
                        )
                    }
                    <div className="campo">
                        <label htmlFor="presupuesto" className="definir-presupuesto"> Define un presupuesto</label>
                        <input
                            className="nuevo-presupuesto"
                            placeholder="Presupuesto"
                            type="number"
                            id="presupuesto"
                            value={presupuesto}
                            onChange={ev => setPresupuesto(ev?.target?.value)}
                        />
                    </div>
                    
                    <input type="submit" value="Agregar" />
                </form>
            </div>
        </>
    );
}

export default AgregarPresupueso;
