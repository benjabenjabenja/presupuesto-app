/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AgregarPresupueso from "./AgregarPresupueso";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid }) => {
    const [showComponent, setShowComponent] = useState(false);
    useEffect(
		() => {
            setShowComponent(isValid);
		}, [isValid, presupuesto]
	);
    return (
        <header>
            <h1> Agrega un nuevo Presupuesto</h1>

            {
                showComponent ? 
                    <>
                        <ControlPresupuesto
                            presupuesto={presupuesto}
                            setPresupuesto={setPresupuesto}
                            setIsValid={setIsValid}
                        />
                    </> :
                    <AgregarPresupueso
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValid={setIsValid}
                    />
            }

        </header>
    );
};

export default Header;
