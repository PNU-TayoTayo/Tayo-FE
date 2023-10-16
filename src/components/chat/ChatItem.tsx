'use client'
import React from 'react';
import Image from "next/image";

const ChatItem = ({img, name, text, count, onClick = null}) => {
    return (
        <div className={`flex w-full justify-between p-16 cursor-pointer`} onClick={onClick}>
            <div className={`flex`}>
                <Image src={img} alt={'profileImg'} width={42} height={42} className={`rounded-full mr-10`}/>
                <div className={`flex flex-col`}>
                    <p className={`text-16`}>{name}</p>
                    <p className={`text-13 text-737373`}>{text}</p>
                </div>
            </div>
            <div className={`w-24 h-24 bg-pointRed rounded-full text-white text-center shrink-0`}>{count}</div>
        </div>
    );
};

export default ChatItem;