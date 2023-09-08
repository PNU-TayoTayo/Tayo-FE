'use client'
import React from 'react';
import Image from "next/image";

const ChatItem = ({img, name, text, count}) => {
    return (
        <div className={`flex w-full justify-between`}>
            <Image src={img} alt={'profileImg'} width={42} height={42} className={`rounded-full`}/>
            <div className={`flex flex-col`}>
                <p className={`text-14`}>{name}</p>
                <p className={`text-737373`}>{text}</p>
            </div>
            <div className={`w-24 h-24 bg-pointRed rounded-full text-white leading-30 text-center`}>{count}</div>
        </div>
    );
};

export default ChatItem;