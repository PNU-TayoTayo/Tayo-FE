import React, {useState} from 'react';
import GrayBox from "@components/common/GrayBox";
import {deposit} from "@api/myPageApi";
import apiCall from "@api/apiCall";
import {issueVC} from "@api/carManagementApi";

const IssuingModal = ({open, onClose}) => {
    const [carNumber, setCarNumber] = useState<string>('')
    const [walletPassword, setWalletPassword] = useState<string>('')
    const issuingMyVC = async ({carNumber, walletPassword}: {carNumber: string, walletPassword: string}) => {
        const response = await apiCall(issueVC({carNumber, walletPassword}));
        if (response) {
            if (response.result) {
                return response.data
            }
        } else {
            alert('vc 발급 실패');
        }
    }
    const handleIssuing = () => {
        issuingMyVC({carNumber, walletPassword})
            .then(()=> {
                onClose();
            })
    }

    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-500 h-500 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30`}>VC 발급받기</p>
                <div className={`flex flex-col gap-16`}>
                    <label className={`text-20 font-bold leading-40`}>차량 번호 </label>
                    <GrayBox>
                        <input className={`outline-none w-full`} value={carNumber} onChange={(e)=>{setCarNumber(e.target.value)}}/>
                    </GrayBox>
                </div>
                <div className={`flex flex-col gap-16`}>
                    <label className={`text-20 font-bold leading-40`}>지갑 비밀번호 </label>
                    <GrayBox>
                        <input className={`outline-none w-full`} type={"password"} value={walletPassword} onChange={(e)=>{setWalletPassword(e.target.value)}}/>
                    </GrayBox>
                </div>
                <div className={`flex justify-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                            onClick={handleIssuing}>
                        발급
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssuingModal;