/* eslint-disable react/prop-types */
import Gasto from "./Gasto";

const ListaPresupuesto = ({ total }) => {
    return <div className="listado-gastos">
        <h2>{total.length > 0 ? 'Gastos' : 'Agrega un nuevo gasto'}</h2>
        {total && total.map( gasto => <Gasto gasto={gasto} key={gasto.id}/>)}
    </div>;
};

export default ListaPresupuesto;
