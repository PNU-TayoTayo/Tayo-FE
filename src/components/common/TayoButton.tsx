import React from 'react';
import Button from "@components/common/Button";

const TayoButton = ({onClick, children, maxWidth, height, rounded, leading='', className = '', ...props}) => {
    return (
        <Button onClick={onClick}
                className={`${maxWidth} ${height} ${rounded} ${leading} w-full text-white bg-mainGreen text-center ${className}`}
                {...props}>
            {children}
        </Button>
    );
};

export default TayoButton;