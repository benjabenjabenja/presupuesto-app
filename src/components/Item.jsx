/* eslint-disable react/prop-types */

const Item = ({ children, fn, value }) => {
    return (
        <p>
            {children}
            {value ? fn(value) : 0}
        </p>
    );
};

export default Item;
