/* eslint-disable react/prop-types */
import Gasto from "./Gasto";

const ListaGastos = ({ total, setEditarGasto, setEliminarGasto }) => {
    return (
        <div className="listado-gastos">
            <h2>{total.length > 0 ? 'Gastos' : 'Agrega un nuevo gasto'}</h2>
            {total && total.map(gasto => <Gasto gasto={gasto} key={gasto.id} setEditarGasto={setEditarGasto} setEliminarGasto={setEliminarGasto} />)}
        </div>
    );
};

export default ListaGastos;
