import React from 'react';

const WhiteBox = ({width='',height='', padding='p-8', rounded='rounded-8', className='', children}) => {
    return (
        <div className={`${width} ${height} ${padding} ${rounded} ${className} bg-white`}>
            {children}
        </div>
    );
};

export default WhiteBox;