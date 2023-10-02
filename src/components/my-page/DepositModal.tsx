import React, {useState} from 'react';
import GrayBox from "@components/common/GrayBox";
import {deposit} from "@api/myPageApi";
import apiCall from "@api/apiCall";

const DepositModal = ({open, onClose, setBalance}) => {
    const [depositAmount, setDepositAmount] = useState<string>('')
    const setTotalAmount = async ({depositAmount}:{depositAmount:string}) => {
        const response = await apiCall(deposit({amount: Number(depositAmount)}));
        if (response) {
            if (response.result) {
                console.log(response.data);
                return response.data
            }
        } else {
            alert('입금 실패');
        }
    }
    const handleDeposit = () => {
        setTotalAmount({depositAmount})
            .then((response)=> {
                setBalance(response);
                onClose();
            })
    }

    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-500 h-300 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30`}>얼마를 입금할까요?</p>
                <div className={`flex flex-col gap-24`}>
                    <label>입금 금액: </label>
                    <GrayBox>
                        <input className={`outline-none`} onChange={(e)=>{setDepositAmount(e.target.value)}}/>
                    </GrayBox>
                </div>
                <div className={`flex justify-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                            onClick={handleDeposit}>
                        입금
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;