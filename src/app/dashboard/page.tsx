'use client';
import React, {useEffect, useState} from 'react';
import Layout from "@components/common/Layout";
import WhiteBox from "@components/common/WhiteBox";
import Notification from "@components/dashboard/Notification";
import ShareListItem from "@components/dashboard/ShareListItem";
import RentalTable from "@components/dashboard/RentalTable";
import {Transactions} from "../../mock/transactions"
import Image from "next/image";
import Bell from "@image/dashboard/Bell.svg";
import LeftArrow from "@image/dashboard/circle-arrow-left.svg";
import RightArrow from "@image/dashboard/circle-arrow-right.svg";
import ChartIcon from "@image/dashboard/Chart_fill.svg";
import ChartDemo from "@image/dashboard/ChartDemo.svg";
import {useRecoilValue} from "recoil";
import {userAtom} from "@recoil/auth";
const DashBoard = () => {
    const userInfo = useRecoilValue(userAtom);

    const [dashboardStatus, setDashboardStatus] = useState('sharing');
    const handleClickStatus = (status:string) => {
        setDashboardStatus(status);
    }

    return (
        <Layout>
            <div className={`flex flex-col w-[calc(100%-140px)] ml-170 m-30 gap-16`}>
                <p className={`text-40 font-bold`}>{userInfo.nickName}님, 지금 바로 공유해보세요!</p>
                <WhiteBox rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col gap-16`}>
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
                <WhiteBox rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col gap-16`}>
                    <div className={`flex text-27 font-bold items-center gap-4`}><Image src={ChartIcon} alt={'chart'}/>
                        <span className={`cursor-pointer`} onClick={()=>{handleClickStatus('sharing')}}>공유 현황</span>
                        |
                        <span className={`cursor-pointer`} onClick={()=>{handleClickStatus('rental')}}>대여 현황</span>
                    </div>
                    {dashboardStatus === 'sharing' ? <SharingStatus transactions={Transactions} userName={userInfo.nickName}/> : <RentalStatus/>}
                </WhiteBox>
            </div>
        </Layout>
    );
};

export default DashBoard;

const SharingStatus = ({transactions, userName}) => {
    return (
        <div className={`flex `}>
            <div className={`flex flex-col w-[60%]`}>
                <Image src={ChartDemo} alt={'chart-demo'} width={808} height={450}/>
                <div className={`flex gap-30 justify-center items-center`}>
                    <div className={`text-center`}>
                        <p className={`text-30 font-bold`}>총 공유 횟수</p>
                        <p className={`text-50 font-bold text-subGreen`}>87회</p>
                    </div>
                    <div className={`flex flex-col`}>
                        <p className={`text-27`}><b>{userName}</b>님의 차량 공유로 지금까지</p>
                        <p className={`text-27`}><b className={`underline underline-offset-2 decoration-4 decoration-subGreen`}>9대</b>의 불필요한 차량 낭비를 막았어요</p>
                        <p className={`text-27`}>연 평균 <b className={`underline underline-offset-2 decoration-4 decoration-subGreen`}>16%</b>의 수익을 만들었어요.</p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col w-[40%] p-24 bg-[#E4E4E4] bg-opacity-40 rounded-30`}>
                <p className={`text-27 font-bold`}>2023년 9월</p>
                <div className={`w-full `}>
                    <ShareListItem item={transactions[0]}/>
                    <div className={`border-t-1 border-[#DEDEDE]`}></div>
                    <ShareListItem item={transactions[1]}/>
                    <div className={`border-t-1 border-[#DEDEDE]`}></div>
                    <ShareListItem item={transactions[2]}/>
                    <div className={`border-t-1 border-[#DEDEDE]`}></div>
                    <ShareListItem item={transactions[3]}/>
                </div>
            </div>
        </div>
    );
}

const RentalStatus = () => {
    return (
        <div>
            <RentalTable/>
        </div>
    );
}