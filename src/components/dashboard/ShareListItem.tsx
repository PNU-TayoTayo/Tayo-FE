import Image from "next/image";
import User from "@image/dashboard/user-icon.svg";
import React from "react";

const ShareListItem = ({item}) => {
    return (
        <div className={`flex w-full p-24 gap-16 justify-between`}>
            <Image src={item.img} alt={'user'} width={72} height={72}/>
            <div className={`flex flex-col w-[80%]`}>
                <div className={`flex w-full justify-between`}>
                    <span className={`text-28 font-bold`}>{item.name}<span className={`text-28 font-normal`}>님</span></span>
                    <span className={`text-20 font-bold text-subGreen`}>{'+'+item.cost+'원'}</span>
                </div>
                <p className={`text-20 text-[#646464]`}>
                    {item.date}
                </p>
            </div>
        </div>
    )
}
export default ShareListItem;