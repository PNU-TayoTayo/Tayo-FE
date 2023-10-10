import React, {useState} from 'react';
import Unchecked from '@image/car-management/Check_ring_light.svg';
import Checked from '@image/car-management/Check_fill.svg';
import Image from "next/image";
import apiCall from "@api/apiCall";
import {getVCList, registerCar} from "@api/carManagementApi";
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
    const [isWalletPasswordEntered, setIsWalletPasswordEntered] = useState<boolean>(false); // 지갑 비밀번호 맞는지 여부
    const [vcList, setVcList] = useState<CarVC[]>([]);
    const [selectedVC, setSelectedVC] = useState(null); // 선택된 VC 아이템 상태
    const [myVcData, setMyVcData] = useState<CarVC>();
    const [currentStep, setCurrentStep] = useState<number>(1);
    const VCList = async ({walletPassword}) => {
        const response = await apiCall(getVCList({walletPassword}));
        if (response) {
            if (response.result) {
                setVcList(response.data.vc);
            }
        }
    }
    const handleWalletPassword = () => {
        VCList({walletPassword}).then(()=>{setIsWalletPasswordEntered(true)})
    }
    const handleVCItemClick = (index) => {
        setSelectedVC(index)
    }
    const handleVCSelectClick = (data) => {
        setMyVcData(data);
        setCurrentStep(2);
    }
    const handleClickCancelButton = () => {
        setCurrentStep(1);
        setVcList([]);
        onClose();
    }

    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`relative flex flex-col bg-white w-700 h-700 rounded-8 m-auto p-36`}>
                {currentStep===1&&<div>
                    <p className={`font-bold text-30 text-center pb-36`}>VC 목록</p>
                    <div className={`flex justify-between`}>
                        <label className={`text-20 font-bold leading-40`}>지갑 비밀번호: </label>
                        <GrayBox className={`w-[60%]`}>
                            <input type={"password"} className={`outline-none`} onChange={(e) => {
                                setWalletPassword(e.target.value)
                            }}/>
                        </GrayBox>
                        <button className={`w-100 h-42 bg-mainGreen text-white text-20 font-bold rounded-4`}
                                onClick={handleWalletPassword}>
                            VC 확인
                        </button>
                    </div>
                    <div className={`flex flex-col gap-24 h-390 overflow-auto scrollbar-hide mt-24 mb-80`}>
                        {vcList && vcList.map((item, index) => {
                            return (
                                <div key={index} className={`flex gap-16 cursor-pointer`}
                                     onClick={() => handleVCItemClick(index)}>
                                    <Image src={selectedVC === index ? Checked : Unchecked} // 선택 여부에 따라 이미지 변경
                                           alt={'check'} width={73} height={73}/>
                                    <VCItem info={item}/>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`absolute bottom-36 left-110 flex justify-center text-center gap-24`}>
                        <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                                onClick={handleClickCancelButton}>
                            취소
                        </button>
                        <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                                disabled={!isWalletPasswordEntered}
                                onClick={() => {
                                    handleVCSelectClick(vcList[selectedVC])
                                }}>
                            선택
                        </button>
                    </div>
                </div>}
                {currentStep===2&&<RegisterVP vcData={myVcData} walletPassword={walletPassword} handleClickCancelButton={handleClickCancelButton}/>}
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

const RegisterVP = ({vcData, walletPassword, handleClickCancelButton}) => {
    const [location, setLocation] = useState(''); // 위치 상태
    const [rentalFee, setRentalFee] = useState(''); // 대여료 상태
    const [availabilityDate, setAvailabilityDate] = useState(''); // 공유 가능 일자 상태

    const postCar = async () => {
        const response = await apiCall(registerCar({
            walletPassword,
            referentVC: vcData?.referentVC,
            location : {
                sharingLocation: location,
                sharingLocationAddress: location,
                sharingLatitude: '35.23258237080505',
                sharingLongitude: '129.0828602625644'
            },
            sharingPrice: rentalFee,
            timeList: [availabilityDate,]
        }))
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleRentalFeeChange = (e) => {
        setRentalFee(e.target.value);
    };

    const handleAvailabilityDateChange = (e) => {
        setAvailabilityDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleClickRegister = ()  => {
        postCar()//.then(()=>{handleClickCancelButton()})
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className={`font-bold text-30 text-center pb-36`}>차량을 등록 하시겠습니까?</p>
            <div className={`flex flex-col gap-12`}>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full`}>위치:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                        placeholder="위치를 입력하세요"
                        className={`text-23 outline-none w-full`}
                    />
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full`}>대여료:</label>
                    <input
                        type="text"
                        id="rentalFee"
                        value={rentalFee}
                        onChange={handleRentalFeeChange}
                        placeholder="대여료를 입력하세요"
                        className={`text-23 outline-none w-full`}
                    />
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full `}>공유 가능 일자:</label>
                    <input
                        type="date"
                        id="availabilityDate"
                        value={availabilityDate}
                        onChange={handleAvailabilityDateChange}
                        className={`text-23 outline-none w-full`}
                    />
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full `}>사용 연료:</label>
                    <span className={`text-23`}>{vcData?.carFuel}</span>
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full `}>최초 등록:</label>
                    <span className={`text-23`}>{vcData?.carDeliveryDate}</span>
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full `}>주행 거리:</label>
                    <span className={`text-23`}>{vcData?.drivingRecord}</span>
                </div>
                <div className={`flex justify-between`}>
                    <label className={`text-23 w-full `}>검사 이력:</label>
                    <span className={`text-23`}>{vcData?.inspectionRecord}</span>
                </div>
            </div>
            <div className={`absolute bottom-36 left-110 flex justify-center text-center gap-24`}>
                <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                        onClick={handleClickCancelButton}>
                    취소
                </button>
                <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                        onClick={() => {
                            handleClickRegister()
                        }}>
                    등록
                </button>
            </div>
        </form>
    );
};
