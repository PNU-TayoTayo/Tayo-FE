import React, {useState} from 'react';
import GrayBox from "@components/common/GrayBox";
import {deposit, withdrawal} from "@api/myPageApi";
import apiCall from "@api/apiCall";
import {useRouter} from "next/navigation";

const DeleteAccountModal = ({open, onClose}) => {
    const router = useRouter();
    const [currentPassword, setCurrentPassword] = useState<string>('')
    const deleteAccount = async ({currentPassword}:{currentPassword:string}) => {
        const response = await apiCall(withdrawal({currentPassword}));
        if (response) {
            if (response.result) {
                return response.data
            }
        } else {
            alert('회원 탈퇴 실패');
        }
    }
    const handleWithdrawal = () => {
        deleteAccount({currentPassword})
            .then(()=> {
                onClose();
                localStorage.clear(); // 로컬 스토리지에 토큰 삭제
                router.push('/sign-in');
            })
    }

    return (
        <div className={`absolute top-0 left-0 flex w-full h-full bg-black bg-opacity-50 items-center ${!open&&'hidden'} z-10`}>
            <div className={`flex flex-col bg-white w-500 h-300 justify-between rounded-8 m-auto p-36`}>
                <p className={`font-bold text-30`}>회원 탈퇴 하시겠습니까?</p>
                <div className={`flex flex-col gap-24`}>
                    <label>비밀번호: </label>
                    <GrayBox>
                        <input className={`outline-none`} onChange={(e)=>{setCurrentPassword(e.target.value)}}/>
                    </GrayBox>
                </div>
                <div className={`flex justify-center gap-24`}>
                    <button className={`w-227 h-62 bg-lightGrey text-white text-20 font-bold rounded-4`}
                            onClick={onClose}>
                        취소
                    </button>
                    <button className={`w-227 h-62 bg-subGreen text-white text-20 font-bold rounded-4`}
                            onClick={handleWithdrawal}>
                        탈퇴
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccountModal;