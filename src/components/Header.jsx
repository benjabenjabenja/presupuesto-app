/* eslint-disable react/prop-types */
import AgregarPresupueso from "./AgregarPresupueso";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({presupuesto, setPresupuesto, isValid, setIsValid}) => {
    return (
        <header>
            <h1> Agrega un nuevo Presupuesto</h1>

            {
                isValid ? 
                    <>
                        <ControlPresupuesto
                            presupuesto={presupuesto}
                            setPresupuesto={setPresupuesto}
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
