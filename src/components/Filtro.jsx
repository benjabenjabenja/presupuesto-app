/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { opts_select_nuevo_gasto, randomId } from "../helpers";

const Filtro = ({ filtroGasto, setFiltroGasto }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        opts_select_nuevo_gasto.forEach(o => (o.id = randomId()));
        setOptions(opts_select_nuevo_gasto);
    }, []);

    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="filtro">Filtrar: </label>
                    <select id="filtro" value={filtroGasto} onChange={ev => setFiltroGasto(ev.target.value)}>
                        <option value="">--Seleccionar--</option>
                        {
                            options && options.map( o => (<option value={o.value} key={o.id}>{o.text}</option>) )
                        }
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filtro;
