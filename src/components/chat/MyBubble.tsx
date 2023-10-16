import React from 'react';
import User from "@image/dashboard/user-icon.svg"
import Image from "next/image";
const MyBubble = ({text}) => {
    return (
        <div className={`flex gap-12 text-18`}>
            <Image src={User} alt={'profileImg'} width={42} height={42} className={`rounded-full mr-10`}/>
            <div className={`flex p-10 bg-subGreen text-white rounded-10 min-h-50 max-w-500 items-center`}>
                {text}
            </div>
        </div>
    );
};

export default MyBubble;