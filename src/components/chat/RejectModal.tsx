import React from 'react';
import Button from "@components/common/Button";

const RejectModal = ({open, onClose, info}) => {
    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-500 h-350 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30`}>예약 신청을 거절하시겠습니까?</p>
                <div className={`flex flex-col gap-24`}>
                    <p className={`text-24`}>{info.carName}</p>
                    <p className={`text-24`}>{info.ownerName}님의 대여 신청</p>
                </div>
                <div className={`flex justify-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-pointRed text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        거절
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RejectModal;