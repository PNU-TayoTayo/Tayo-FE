import React from 'react';
import Unchecked from '@image/car-management/Check_ring_light.svg';
import Checked from '@image/car-management/Check_fill.svg';
import Image from "next/image";

const VCListModal = ({open, onClose}) => {
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

    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-700 h-700 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30 text-center`}>VC 목록</p>
                <div className={`flex flex-col gap-24 overflow-auto scrollbar-hide my-24`}>
                    {info.map((item, index) => {
                        return (
                            <div key={index} className={`flex gap-16 cursor-pointer`}>
                                <Image src={Unchecked} alt={'check'} width={73} height={73}/>
                                <VCItem info={item}/>
                            </div>
                        );
                    })}
                </div>
                <div className={`flex justify-center gap-24`}>
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
        <div className={`flex flex-col w-full gap-16 border border-[#2b2b2b] rounded-10 p-24`}>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>차종</label>
                <p className={`text-24`}>{info.carModel}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>차량번호</label>
                <p className={`text-24`}>{info.carNumber}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>연료</label>
                <p className={`text-24`}>{info.carFuel}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>출고일자</label>
                <p className={`text-24`}>{info.carDeliveryDate}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>검사일자</label>
                <p className={`text-24`}>{info.inspectionRecord}</p>
            </div>
            <div className={`flex justify-between`}>
                <label className={`text-25`}>주행거리</label>
                <p className={`text-24`}>{info.drivingRecord}</p>
            </div>
        </div>
    )
}