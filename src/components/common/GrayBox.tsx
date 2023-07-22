import React from 'react';

const GrayBox = ({padding='p-8', height='h-48', rounded='rounded-8', className='', children}) => {
    return (
        <div className={`${padding} ${height} ${rounded} border-1 border-lightGrey ${className}`}>
            {children}
        </div>
    );
};

export default GrayBox;