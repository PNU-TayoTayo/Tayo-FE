import React from 'react';

const GrayBox = ({padding='p-8', height='h-48', rounded='rounded-8', className='', children, onClick=null}) => {
    return (
        <div className={`${padding} ${height} ${rounded} border-1 border-lightGrey ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default GrayBox;