/* eslint-disable react/prop-types */

const Item = ({ children, classess, fn, value }) => {
    return (
        <p className={classess}>
            {children}
            {value ? fn(value) : 0}
        </p>
    );
};

export default Item;
