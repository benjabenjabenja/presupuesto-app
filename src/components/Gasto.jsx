/* eslint-disable react/prop-types */
import { format_date, getIcon } from '../helpers/index';

const Gasto = ({ gasto }) => {
    const { categoria, presupuesto, nombreGasto, create_at } = gasto;
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={getIcon(categoria)} alt="Icono de categoria" />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombreGasto}</p>
                    <p className="fecha-gasto">
                        Fecha:{' '}
                        <span>{format_date(create_at)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">${presupuesto}</p>
        </div>
    );
};

export default Gasto;
