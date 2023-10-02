'use client'
import React, {useEffect, useRef, useState} from 'react';
import Layout from "@components/common/Layout";
import WhiteBox from "@components/common/WhiteBox";
import GrayBox from "@components/common/GrayBox";
import Image from "next/image";
import User from "@image/dashboard/user-icon.svg"
import Edit from "@image/my-page/edit.svg"
import Button from "@components/common/Button";
import {changeIntroduce, changePassword, deposit, getMyBalance, getMyInfo, withdrawal} from "@api/myPageApi";
import apiCall from "@api/apiCall";
import {MyPageInfo, NewPassword} from "@type/UserInfo";
import {useForm} from "react-hook-form";
import DepositModal from "@components/my-page/DepositModal";
import WithdrawModal from "@components/my-page/WithdrawModal";

const MyPage = () => {
    const [isIntroduceEditable, setIsIntroduceEditable] = useState<boolean>(true);
    const [newIntroduce, setNewIntroduce] = useState<string>('');
    const [balance, setBalance] = useState<number>(0)
    const [depositAmount, setDepositAmount] = useState<number>(0);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState<boolean>(false);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState<boolean>(false);
    const [userData, setUserData] = useState<MyPageInfo>({
        name: '',
        email: '',
        phoneNumber: '',
        nickName: '',
        introduce: ''
    })
    const {
        register,
        watch,
        formState: { isSubmitting, isValid, errors },
    } = useForm<NewPassword>({ mode: 'onBlur'});
    const getMyPageInfo = async () => {
        const response = await apiCall(getMyInfo());
        if (response) {
            if (response.result){
                setUserData(response.data);
            }
        } else {
            alert('내 정보 불러오기 실패');
        }
    }
    const setIntroduce = async ({newIntroduce}) => {
        const response = await apiCall(changeIntroduce({
            newIntroduce: newIntroduce
        }));
        if (response) {
            if (response.result){
                setNewIntroduce(newIntroduce);
                return;
            }
        } else {
            alert('한줄 소개 수정 실패');
        }
    }
    const withdrawalAccount = async ({currentPassword}) => {
        await apiCall(withdrawal({currentPassword}));
    }
    const getCurrentBalance = async () => {
        const response = await apiCall(getMyBalance());
        if (response) {
            if (response.result){
                setBalance(response.data);
            }
        } else {
            alert('내 잔액 불러오기 실패');
        }
    }

    const handleChangeUserPassword = async () => {
        await apiCall(changePassword({
            currentPassword: watch('currentPassword'),
            newPassword: watch('newPassword'),
            checkNewPassword: watch('checkNewPassword')
        }))
    }
    const handleClickIntroduce = async () => {
        if (isIntroduceEditable) {
            setIsIntroduceEditable(false);
            await setIntroduce({newIntroduce: newIntroduce});
        } else {
            setIsIntroduceEditable(true);
        }
    }
    const handleChangeIntroduce = async (e) => {
        setUserData({...userData, introduce: e.target.value});
    }
    useEffect(()=>{
        getMyPageInfo();
        getCurrentBalance();
    },[])

    return (
        <Layout>
            <DepositModal open={isDepositModalOpen} onClose={() => {setIsDepositModalOpen(false)}} setBalance={setBalance}/>
            <WithdrawModal open={isWithdrawModalOpen} onClose={() => {setIsWithdrawModalOpen(false)}} setBalance={setBalance}/>
            <WhiteBox width={`w-[calc(100%-200px)]`} height={`h-full`} rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col gap-16 ml-170 m-30`}>
                <div>
                    {/*TODO:상단 프로필*/}
                    <div className={`flex w-full h-141 px-24 rounded-20 bg-[#C4E9CA] justify-left gap-24`}>
                        <Image src={User} alt={'user'} height={90} width={90}/>
                        <div className={`flex flex-col justify-center`}>
                            <span className={`text-36 font-bold`}>{userData.nickName}</span>
                            <div className={`flex`}>
                                <input value={userData.introduce} disabled={isIntroduceEditable} onChange={handleChangeIntroduce}
                                       className={`w-full outline-none bg-[#C4E9CA] text-21 text-[#4f4f4f] ${!isIntroduceEditable&&'border-b-1'}`} />
                                <Image src={Edit} alt={'edit'} width={25} height={25} onClick={handleClickIntroduce} className={`cursor-pointer`}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex w-full gap-16`}>
                    <GrayBox padding={`p-48`} className={`flex flex-col gap-16 w-[50%] h-full`}>
                    {/*TODO:내 정보 관리*/}
                        <p className={`text-27 font-bold`}>내 정보 관리</p>
                        <div className={`flex gap-48`}>
                            <label className={`text-24 font-bold min-w-108 text-[#676767]`}>이름</label>
                            <span className={`text-24 text-[#4f4f4f]`}>{userData.name}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-24 font-bold min-w-108 text-[#676767]`}>이메일</label>
                            <span className={`text-24 text-[#4f4f4f]`}>{userData.email}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-24 font-bold min-w-108 text-[#676767]`}>연락처</label>
                            <span className={`text-24 text-[#4f4f4f]`}>{userData.phoneNumber}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-24 font-bold min-w-108 text-[#676767]`}>비밀번호</label>
                            <div className={`flex flex-col gap-20 items-end`}>
                                <div className={`flex flex-col gap-6`}>
                                    <span className={`text-20 text-[#4f4f4f]  min-w-170 `}>현재 비밀번호</span>
                                    <div className={`flex flex-col`}>
                                        <GrayBox className={`w-full`}>
                                            <input className={`w-309 outline-none`}
                                                   type="password"
                                                   {...register('currentPassword')}
                                            />
                                        </GrayBox>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6`}>
                                    <span className={`text-20 text-[#4f4f4f]  min-w-170 `}>새 비밀번호</span>
                                    <div className={`flex flex-col`}>
                                        <GrayBox className={`w-full`}>
                                            <input className={`w-309 outline-none`}
                                                   type="password"
                                                   {...register('newPassword', {
                                                       required: '비밀번호는 필수 입력 항목입니다.',
                                                       minLength: {
                                                           value: 8,
                                                           message: '비밀번호는 최소 8글자 이상이어야 합니다.',
                                                       },
                                                       maxLength: {
                                                           value: 20,
                                                           message: '비밀번호는 최대 20글자까지 허용됩니다.',
                                                       },
                                                       pattern: {
                                                           value: /^(?=.*\d)(?=.*[a-zA-Z]).*$/,
                                                           message: '비밀번호는 영문과 숫자의 조합이어야 합니다.',
                                                       },
                                                   })}
                                            />
                                        </GrayBox>
                                        <span className={`absolute top-40 text-14 text-pointRed`}>{errors.newPassword && errors.newPassword.message}</span>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6`}>
                                    <span className={`text-20 text-[#4f4f4f] min-w-170 `}>새 비밀번호 확인</span>
                                    <div className={`flex flex-col`}>
                                        <GrayBox className={`w-full`}>
                                            <input className={`w-309 outline-none`}
                                                   type="password"
                                                   {...register('checkNewPassword', {
                                                       required: '비밀번호를 확인해주세요.',
                                                       validate: (value) => value === watch('newPassword') || '비밀번호가 일치하지 않습니다.',
                                                   })}
                                            />
                                        </GrayBox>
                                        <span className={`absolute top-40 text-14 text-pointRed`}>{errors.checkNewPassword && errors.checkNewPassword.message}</span>
                                    </div>
                                </div>
                                <Button className={`w-203 h-49 bg-[#d9d9d9] rounded-6 text-20`} onClick={handleChangeUserPassword}>비밀번호 변경 완료</Button>
                            </div>
                        </div>
                    </GrayBox>
                    <div className={`flex flex-col w-[50%] h-full gap-16`}>
                        <GrayBox height={`h-full`} padding={`p-48`} className={`flex flex-col p-48 gap-16`}>
                        {/*TODO: 내 지갑 관리*/}
                            <div className={`flex gap-20`}>
                                <p className={`text-27 font-bold`}>내 지갑 관리</p>
                                <Button className={`w-181 h-49 bg-[#d9d9d9] rounded-6 text-20`} onClick={()=>{setIsDepositModalOpen(true)}}>잔액 채우기</Button>
                                <Button className={`w-181 h-49 bg-[#d9d9d9] rounded-6 text-20`} onClick={()=>{setIsWithdrawModalOpen(true)}}>출금하기</Button>
                            </div>
                            <div className={`flex gap-48 `}>
                                <label className={`text-24 font-bold min-w-160 text-[#676767]`}>잔액</label>
                                <span className={`text-24 text-[#4f4f4f]`}>{balance.toLocaleString()}원</span>
                            </div>
                            <div className={`flex gap-48 `}>
                                <label className={`text-24 font-bold min-w-160 text-[#676767]`}>최근 거래 내역</label>
                                <div className={`flex flex-col gap-16`}>
                                    <div className={`flex gap-30`}>
                                        <span className={`text-24  text-[#4f4f4f]`}>{'Jeep Wrangler Rubicon\n(2023.06.11 대여)'}</span>
                                        <span className={`text-pointRed text-20 font-bold`}>-49,000</span>
                                    </div>
                                    <div className={`flex gap-30`}>
                                        <span className={`text-24  text-[#4f4f4f]`}>{'Jeep Wrangler Rubicon\n(2023.06.11 공유)'}</span>
                                        <span className={`text-[#48be84] text-20 font-bold`}>+53,000</span>
                                    </div>
                                </div>
                            </div>
                        </GrayBox>
                        <GrayBox height={`h-full`} padding={`p-48`} className={`flex flex-col p-48 gap-16`}>
                        {/*TODO: 인증 정보 관리*/}
                            <p className={`text-27 font-bold`}>인증 정보 관리</p>
                            <div className={`flex gap-20 items-center`}>
                                <span className={`min-w-209 text-24 font-bold text-[#676767]`}>간편 본인 인증</span>
                                <span className={`text-23 text-[#c4c4c4]`}>2023.06.18</span>
                                <span className={`text-20 text-[#737373]`}>인증 완료</span>
                            </div>
                            <div className={`flex gap-20 items-center`}>
                                <span className={`min-w-209 text-24 font-bold text-[#676767]`}>모바일 운전 면허증</span>
                                <span className={`text-23 text-[#c4c4c4]`}>2023.06.18</span>
                                <span className={`text-20 text-[#737373]`}>인증 완료</span>
                            </div>
                        </GrayBox>
                    </div>
                </div>
            </WhiteBox>
        </Layout>
    );
};

export default MyPage;