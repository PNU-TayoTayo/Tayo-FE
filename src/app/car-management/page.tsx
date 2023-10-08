'use client'
import React, {useEffect, useState} from 'react';
import WhiteBox from "@components/common/WhiteBox";
import Layout from "@components/common/Layout";
import MyCarInfo from "@components/car-management/MyCarInfo";
import GrayBox from "@components/common/GrayBox";
import VCListModal from "@components/car-management/VCListModal";
import IssuingModal from "@components/car-management/IssuingModal";
import apiCall from "@api/apiCall";
import {queryOwner} from "@api/carManagementApi";
import CarCard from "@components/car-search/CarCard";

const CarManagement = () => {
    const [isIssuedModalOpen, setIsIssuedModalOpen] = useState<boolean>(false);
    const [isVcListModalOpen, setIsVcListModalOpen] = useState<boolean>(false);
    const [myCarList, setMyCarList]=useState<CarInfo[]>()
    const queryOwners = async () => {
        const response = await apiCall(queryOwner());
        if (response) {
            if (response.result){
                setMyCarList(response.data.carDetailList)
            }
        } else {
            alert('내 정보 불러오기 실패');
        }
    }

    useEffect(() => {
        queryOwners();
    }, []);

    return (
        <Layout>
            <VCListModal open={isVcListModalOpen} onClose={() => {setIsVcListModalOpen(false)}} />
            <IssuingModal open={isIssuedModalOpen} onClose={() => {setIsIssuedModalOpen(false)}} />
            <WhiteBox rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col w-[calc(100%-170px)] h-full gap-16 m-30 ml-170`}>
                <div className={`flex justify-between`}>
                    <p className={`font-bold text-30`}>내 차량 관리</p>
                    <button className={`w-100 h-42 bg-mainGreen text-white text-20 font-bold rounded-4`}
                            onClick={()=>{setIsIssuedModalOpen(true)}}>
                        VC 발급
                    </button>
                </div>
                <div className={`flex gap-24`}>
                    {myCarList.map((car, i) => (
                        <MyCarInfo key={i} carData={car}/>
                    ))}
                    <GrayBox className={`flex flex-col gap-30 w-458 h-full min-h-639 items-center justify-center cursor-pointer`} onClick={()=>{setIsVcListModalOpen(true)}}>
                        <div className={`w-full h-full flex items-center justify-center font-bold text-36`} >+</div>
                    </GrayBox>
                </div>
            </WhiteBox>
        </Layout>
    );
};

export default CarManagement;