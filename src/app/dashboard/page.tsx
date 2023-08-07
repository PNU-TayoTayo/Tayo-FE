'use client';
import React from 'react';
import Layout from "@components/common/Layout";
import WhiteBox from "@components/common/WhiteBox";
import Image from "next/image";
import Bell from "@image/dashboard/Bell.svg";
import Calender from "@image/dashboard/calendar.svg";
import Time from "@image/dashboard/time.svg";
import User from "@image/dashboard/user-icon.svg";
import GoChat from "@image/dashboard/chevron-right.svg";
import LeftArrow from "@image/dashboard/circle-arrow-left.svg";
import RightArrow from "@image/dashboard/circle-arrow-right.svg";
import ChartIcon from "@image/dashboard/Chart_fill.svg";
import ChartDemo from "@image/dashboard/ChartDemo.svg";
const DashBoard = () => {
    return (
        <Layout>
            <div className={`flex flex-col mx-auto mt-30 gap-16`}>
                <p className={`text-40 font-bold`}>지금 바로 공유해보세요!</p>
                <WhiteBox rounded={`rounded-30`} padding={`p-24`} className={`flex flex-col gap-16`}>
                    <span className={`flex text-27 font-bold items-center gap-4`}><Image src={Bell} alt={'bell'}/>신청 알림<div className={`w-30 h-30 bg-title rounded-50 text-white font-light leading-30 text-center`}>3</div></span>
                    <div className={`flex gap-32`}>
                        <Notification state={'accept'}/>
                        <Notification state={'reject'}/>
                        <Notification state={'apply'}/>
                    </div>
                    <div className={`flex justify-end`}>
                        <Image src={LeftArrow} alt={'left-arrow'} width={30} height={30} className={`cursor-pointer`}/>
                        <Image src={RightArrow} alt={'right-arrow'} width={30} height={30} className={`cursor-pointer`}/>
                    </div>
                </WhiteBox>
                <WhiteBox rounded={`rounded-30`} padding={`p-24`} className={`flex flex-col gap-16`}>
                    <span className={`flex text-27 font-bold items-center gap-4`}><Image src={ChartIcon} alt={'chart'}/>공유 현황 | 대여 현황</span>
                    <div className={``}>
                        <div>
                            <Image src={ChartDemo} alt={'chart-demo'} width={808} height={450}/>
                            <div className={`flex gap-30`}>
                                <div>
                                    <p>총 공유 횟수</p>
                                    <p>87회</p>
                                </div>
                                <div className={`flex flex-col`}>
                                    <p><b>이로기</b>님의 차량 공유로 지금까지</p>
                                    <p><b>9대</b>의 불필요한 차량 낭비를 막았어요</p>
                                    <p>연 평균 <b>16%</b>의 수익을 만들었어요.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col p-16 bg-[#E4E4E4]`}>
                            <p>2023년 4월</p>
                        </div>
                    </div>
                </WhiteBox>
            </div>
        </Layout>
    );
};

export default DashBoard;

const Notification = ({state}) => {
    return (
        <div className={`flex flex-col justify-between w-404 h-307 p-24 rounded-30 text-white text-24 ${state==='accept'?'bg-mainGreen':state==='reject'?'bg-[#B4B4B4]':'bg-[#6B9BC7]'}`}>
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