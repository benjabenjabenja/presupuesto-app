/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import cerrarModal from '../assets/img/cerrar.svg';
import AlertError from './AlertError';
import { randomId, opts_select_nuevo_gasto } from '../helpers/index';

const Modal = ({ setModal, animate, setAnimate, setNuevoGasto }) => {
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategorria] = useState('')
    const [options, setOptions] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        opts_select_nuevo_gasto.forEach(o => o.id = randomId());
        setOptions(opts_select_nuevo_gasto);
        }, []
    );

    const ocultarModal = ev => {
        ev.preventDefault();

        setAnimate(false);
        setTimeout(() => setModal(false), 600);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if ([nombreGasto, cantidad, categoria].includes('')) {
            alert("No puede enviar un nuevo gasto vacio");
            return;
        }

        if (cantidad < 0) {
            setShowAlert(true);
            return;
        }
        showAlert && setShowAlert(false);

        const obj = {
            presupuesto: cantidad,
            nombreGasto,
            categoria,
            id: randomId()
        }; 
        setNuevoGasto(obj);
        
        const cb = () => {
            resetForm();
            setAnimate(false);
            setTimeout(() => setModal(false), 600);
        };
        setTimeout(cb, 0);
    }

    const resetForm = () => {
        setCantidad(0);
        setCategorria('');
        setNombreGasto('');
        setShowAlert(false);
    } 

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img
                    src={cerrarModal}
                    alt="Icono cerrar modal"
                    onClick={ocultarModal} />
            </div>
            
            <form className={`formulario ${animate ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}
            >   
                <legend htmlFor="gasto">Nuevo Gasto</legend>
                {
                    showAlert && (
                        <AlertError tipo='error'>
                            El presupuesto tiene que ser mayor a 0
                        </AlertError>
                    )
                }

                <div className="campo">
                    <label htmlFor="nombre-gasto">Nombre Gasto</label>
                    <input
                        id='nombre-gasto'
                        type="text"
                        value={nombreGasto}
                        placeholder='Agregar nombre al gasto'
                        onChange={e => setNombreGasto(e?.target?.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Canatidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        value={cantidad}
                        onChange={e => setCantidad(e?.target?.value)}
                        placeholder='Agregar cantidad, ej: 1'
                    />
                </div>
                 
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select id='categoria' value={categoria}
                        onChange={ev => setCategorria(ev?.target?.value)}>
                        <option value="">--Slececcionar--</option>
                        {
                            options && options.map(o => (<option value={o.value} key={o.id}>{o.text}</option>))
                        }
                    </select>
                </div>

                <input type="submit" value="Agregar Gasto" />
                
            </form>
        </div>
    );
}

export default Modal;
