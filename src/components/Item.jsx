/* eslint-disable react/prop-types */

const Item = ({ children, fn, value }) => {
    return (
        <p>
            {children}
            {fn(value)}
        </p>
    );
};

export default Item;
