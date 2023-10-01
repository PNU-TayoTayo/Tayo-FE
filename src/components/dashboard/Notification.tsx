import Image from "next/image";
import Calender from "@image/dashboard/calendar.svg";
import Time from "@image/dashboard/time.svg";
import User from "@image/dashboard/user-icon.svg";
import GoChat from "@image/dashboard/chevron-right.svg";
import React from "react";

const Notification = ({state}) => {
    return (
        <div className={`flex flex-col justify-between w-[33%] h-307 p-24 rounded-30 text-white text-24 ${state==='accept'?'bg-mainGreen':state==='reject'?'bg-[#B4B4B4]':'bg-[#6B9BC7]'}`}>
            <div className={`flex flex-col gap-8`}>
                <p className={`flex`}><Image src={Calender} alt={'calender'} className={`mr-4`}/>2023년 7월 18일</p>
                <p className={`flex`}><Image src={Time} alt={'time'} className={`mr-4`}/>10:00~18:00</p>
            </div>
            <div className={`border border-white`}></div>
            {state === 'accept' && <div className={`flex gap-8`}><Image src={User} alt={'user'} width={72} height={72}></Image><p><b>Jeep Wrangler Rubicon</b> 대여 신청이 수락됐어요!</p></div>}
            {state === 'reject' && <div className={`flex gap-8`}><Image src={User} alt={'user'} width={72} height={72}></Image><p><b>Jeep Wrangler Rubicon</b> 대여 신청이 거절됐어요</p></div>}
            {state === 'apply' && <div className={`flex gap-8`}><Image src={User} alt={'user'} width={72} height={72}></Image><p><b>김타요</b>님의 대여 신청이 왔어요!</p></div>}
            <p className={`flex cursor-pointer leading-30 justify-end hover:underline hover:duration-500`}>채팅 확인하기<Image src={GoChat} alt={'arrow'}/></p>
        </div>
    )
}
export default Notification;