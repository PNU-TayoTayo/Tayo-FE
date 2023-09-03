import React from 'react';
import Image from "next/image";
const ImageLabel = ({ image, label = '', value='' }) => {
    return(
        <div className={`flex items-start justify-between`}>
            <div className={`flex items-start`}>
                <Image src={image} alt={'icon'} width={18} height={18} className={`mr-10`}/>
                <span className={`min-w-110 text-16 text-[#989898]`}>{label}</span>
            </div>
            <span className={`text-18`}>{value}</span>
        </div>
    );
}
export default ImageLabel;