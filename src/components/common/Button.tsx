import React from 'react';

const Button = ({onClick, children = null, disabled = false, ...props}) => {
    return (
        <div onClick={(e) => {!disabled && onClick(e)}}
             style={disabled ? {cursor: "default"} : {cursor: "pointer"}} {...props}>
            {children}
        </div>
    );
};

export default Button;