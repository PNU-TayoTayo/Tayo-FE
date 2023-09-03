import React from 'react';
import Button from "@components/common/Button";

const TayoButton = ({onClick, children, maxWidth='', height='h-67', rounded='rounded-10', leading='', disabled = false, className = '', ...props}) => {
    return (
        <Button onClick={onClick} disabled={disabled}
                className={`${maxWidth} ${height} ${rounded} ${leading} w-full text-white bg-mainGreen text-center ${className}`}
                {...props}>
            {children}
        </Button>
    );
};

export default TayoButton;