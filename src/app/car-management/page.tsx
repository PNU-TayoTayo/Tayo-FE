'use client'
import React from 'react';
import WhiteBox from "@components/common/WhiteBox";
import Layout from "@components/common/Layout";
import MyCarInfo from "@components/car-management/MyCarInfo";
import GrayBox from "@components/common/GrayBox";

const CarManagement = () => {
    return (
        <Layout>
                <WhiteBox rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col w-[calc(100%-170px)] h-full gap-16 m-30`}>
                    <p className={`font-bold text-30`}>내 차량 관리</p>
                    <div className={`flex gap-24`}>
                        <MyCarInfo/>
                        <GrayBox className={`flex flex-col gap-30 w-458 h-full min-h-639 items-center justify-center`}>
                            <p className={`font-bold text-36`}>+</p>
                        </GrayBox>
                    </div>
                </WhiteBox>
        </Layout>
    );
};

export default CarManagement;