/* eslint-disable react/prop-types */
import { format_date, getIcon } from '../helpers/index';

import { 
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const Gasto = ({ gasto }) => {
    const { categoria, presupuesto, nombreGasto, create_at } = gasto;
    const handleEliminar = () => {
        console.log('eliminar');
    }
    const handleEditar = () => {
        console.log('editar');
    }
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={handleEditar}>Editar</SwipeAction>
        </LeadingActions>
    );
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                destructive={true} onClick={handleEliminar}
            > Eliminar
            </SwipeAction>
        </TrailingActions>
    );
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;
