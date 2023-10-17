import React from 'react';
import User from "@image/dashboard/user-icon.svg"
import Image from "next/image";
const MyBubble = ({text}) => {
    return (
        <div className={`absolute top-10 right-10 flex gap-12 text-18`}>
            <div className={`flex p-10 bg-lightGrey text-black rounded-10 min-h-50 max-w-500 items-center`}>
                {text}
            </div>
        </div>
    );
};

export default MyBubble;