import React from 'react';

const Button = ({onClick, children = null, disabled = false, ...props}) => {
    return (
        <button onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;