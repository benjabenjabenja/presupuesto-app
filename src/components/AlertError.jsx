/* eslint-disable react/prop-types */

const AlertError = ({ children, tipo }) => {
    return (
        <div className={`alerta ${tipo}`}>
            { children }
        </div>
    );
};

export default AlertError;
