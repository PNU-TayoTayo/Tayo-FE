import React from 'react';

const AcceptModal = ({open, onClose, info}) => {
    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-500 h-500 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30`}>예약 내역 확인 후 결제해주세요.</p>
                <div className={`flex flex-col gap-24`}>
                    <p className={`text-24`}>{info.carName}</p>
                    <p className={`text-24`}>{info.ownerName}님의 차량</p>
                    <p className={`text-24`}>{info.date}</p>
                    <p className={`text-24`}>{info.location}</p>
                    <p className={`text-24`}>{info.cost}</p>
                </div>
                <div className={`flex justify-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        결제
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcceptModal;