import React, {useState} from 'react';
import Unchecked from '@image/car-management/Check_ring_light.svg';
import Checked from '@image/car-management/Check_fill.svg';
import Image from "next/image";
import apiCall from "@api/apiCall";
import {getVCList} from "@api/carManagementApi";
import GrayBox from "@components/common/GrayBox";

const VCListModal = ({open, onClose, }) => {
    const info = [{
        referent: "2818df3f-cb8e-437c-a423-3482d49fa15f",
        name: "KimDonwoo",
        carModel: "Mercedes-Benz G-Class",
        carNumber: "00가1234",
        carFuel: "Diesel",
        carDeliveryDate: "20230101",
        inspectionRecord: "20210101",
        drivingRecord: "250",
    },{
        referent: "2818df3f-cb8e-437c-a423-3482d49fa15f",
        name: "KimDonwoo",
        carModel: "Mercedes-Benz G-Class",
        carNumber: "01나3369",
        carFuel: "gasoline",
        carDeliveryDate: "20220908",
        inspectionRecord: "20230907",
        drivingRecord: "130",
    }]
    const [walletPassword, setWalletPassword] = useState<string>('');
    const [vcList, setVcList] = useState<CarVC[]>([]);

    const VCList = async ({walletPassword}) => {
        const response = await apiCall(getVCList({walletPassword}));
        if (response) {
            if (response.result) {
                console.log(response.data);
                setVcList(response.data.vc);
            }
        }
    }
    const handleWalletPassword = () => {
        VCList({walletPassword})
    }
    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`relative flex flex-col bg-white w-700 h-700 rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30 text-center pb-36`}>VC 목록</p>
                <div className={`flex justify-between`}>
                    <label className={`text-20 font-bold leading-40`}>지갑 비밀번호: </label>
                    <GrayBox className={`w-[60%]`}>
                        <input type={"password"} className={`outline-none`} onChange={(e)=>{setWalletPassword(e.target.value)}}/>
                    </GrayBox>
                    <button className={`w-100 h-42 bg-mainGreen text-white text-20 font-bold rounded-4`}
                            onClick={handleWalletPassword}>
                        VC 확인
                    </button>
                </div>
                <div className={`flex flex-col gap-24 overflow-auto scrollbar-hide mt-24 mb-80`}>
                    {vcList&&vcList.map((item, index) => {
                        return (
                            <div key={index} className={`flex gap-16 cursor-pointer`}>
                                <Image src={Unchecked} alt={'check'} width={73} height={73}/>
                                <VCItem info={item}/>
                            </div>
                        );
                    })}
                </div>
                <div className={`absolute bottom-36 left-110 flex justify-center text-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        선택
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VCListModal;

const VCItem = ({info}) => {
    return (
        <div className={`flex flex-col w-full gap-12 border border-[#2b2b2b] rounded-10 p-24`}>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>차종</label>
                <p className={`text-22`}>{info.carModel}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>차량번호</label>
                <p className={`text-22`}>{info.carNumber}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>연료</label>
                <p className={`text-22`}>{info.carFuel}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>출고일자</label>
                <p className={`text-22`}>{info.carDeliveryDate}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>검사일자</label>
                <p className={`text-22`}>{info.inspectionRecord}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-23`}>주행거리</label>
                <p className={`text-22`}>{info.drivingRecord}</p>
            </div>
        </div>
    )
}