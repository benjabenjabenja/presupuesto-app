/* eslint-disable react/prop-types */
import Gasto from "./Gasto";

const ListaGastos = ({ total, setEditarGasto, setEliminarGasto, filtrados }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{total.length > 0 ? 'Gastos' : 'Agrega un nuevo gasto'}</h2>
            {total && ( 
                filtrados.length > 0 ? filtrados : total
            ).map(gasto => <Gasto
                gasto={gasto}
                key={gasto.id}
                setEditarGasto={setEditarGasto}
                setEliminarGasto={setEliminarGasto}
            />)}
        </div>
    );
};

export default ListaGastos;
