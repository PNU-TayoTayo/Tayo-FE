'use client'
import React from 'react';
import Layout from "@components/common/Layout";
import WhiteBox from "@components/common/WhiteBox";
import GrayBox from "@components/common/GrayBox";
import Image from "next/image";
import User from "@image/dashboard/user-icon.svg"
import Button from "@components/common/Button";

const MyPage = () => {
    const userData = {
        name: '김돈우',
        email: 'donus@pusan.ac.kr',
        phoneNumber: '010-1234-5678',
        nickName: 'donus',
        introduce: '안녕하세요 차 공유하러 왔어요~'
    }
    const walletData = {
        cost: 10000
    }
    return (
        <Layout>
            <WhiteBox width={`w-full`} height={`h-full`} rounded={`rounded-30`} padding={`p-36`} className={`flex flex-col gap-16 ml-170 m-30`}>
                <div>
                    {/*TODO:상단 프로필*/}
                    <div className={`flex w-full h-141 px-24 rounded-20 bg-[#C4E9CA] justify-left gap-24`}>
                        <Image src={User} alt={'user'} height={90} width={90}/>
                        <div className={`flex flex-col justify-center`}>
                            <span className={`text-40 font-bold`}>{userData.nickName}</span>
                            <span className={`text-25 text-[#4b4b4b]`}>{userData.introduce}</span>
                        </div>
                    </div>
                </div>
                <div className={`flex w-full gap-16`}>
                    <GrayBox padding={`p-48`} className={`flex flex-col gap-16 w-[50%] h-full`}>
                    {/*TODO:내 정보 관리*/}
                        <p className={`text-30 font-bold`}>내 정보 관리</p>
                        <div className={`flex gap-48`}>
                            <label className={`text-27 font-bold min-w-108 text-[#676767]`}>이름</label>
                            <span className={`text-27 text-[#4f4f4f]`}>{userData.name}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-27 font-bold min-w-108 text-[#676767]`}>이메일</label>
                            <span className={`text-27 text-[#4f4f4f]`}>{userData.email}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-27 font-bold min-w-108 text-[#676767]`}>연락처</label>
                            <span className={`text-27 text-[#4f4f4f]`}>{userData.phoneNumber}</span>
                        </div>
                        <div className={`flex gap-48 `}>
                            <label className={`text-27 font-bold min-w-108 text-[#676767]`}>비밀번호</label>
                            <div className={`flex flex-col gap-30 items-end`}>
                                <div className={`flex gap-48`}>
                                    <span className={`text-22 text-[#4f4f4f]  min-w-170 `}>현재 비밀번호</span>
                                    <GrayBox><input className={`outline-none w-309`}/></GrayBox>
                                </div>
                                <div className={`flex gap-48`}>
                                    <span className={`text-22 text-[#4f4f4f]  min-w-170 `}>새 비밀번호</span>
                                    <GrayBox><input className={`outline-none w-309`}/></GrayBox>
                                </div>
                                <div className={`flex gap-48 `}>
                                    <span className={`text-22 text-[#4f4f4f] min-w-170 `}>새 비밀번호 확인</span>
                                    <GrayBox><input className={`outline-none w-309`}/></GrayBox>
                                </div>
                                <Button className={`w-203 h-49 bg-[#d9d9d9] rounded-6 text-22`} onClick={()=>{}}>비밀번호 변경 완료</Button>
                            </div>
                        </div>
                    </GrayBox>
                    <div className={`flex flex-col w-[50%] h-full gap-16`}>
                        <GrayBox height={`flex flex-col h-[50%] p-48 gap-16`}>
                        {/*TODO: 내 지갑 관리*/}
                            <div className={`flex gap-24`}>
                                <p className={`text-30 font-bold`}>내 지갑 관리</p>
                                <Button className={`w-181 h-49 bg-[#d9d9d9] rounded-6 text-22`} onClick={()=>{}}>잔액 채우기</Button>
                                <Button className={`w-181 h-49 bg-[#d9d9d9] rounded-6 text-22`} onClick={()=>{}}>출금하기</Button>
                            </div>
                            <div className={`flex gap-48 `}>
                                <label className={`text-27 font-bold min-w-160 text-[#676767]`}>잔액</label>
                                <span className={`text-27 text-[#4f4f4f]`}>{walletData.cost.toLocaleString()}원</span>
                            </div>
                            <div className={`flex gap-48 `}>
                                <label className={`text-27 font-bold min-w-160 text-[#676767]`}>최근 거래 내역</label>
                                <span className={`text-20  text-[#4f4f4f]`}>{'Jeep Wrangler Rubicon\n(2023.06.11 대여)'}</span>
                            </div>
                        </GrayBox>
                        <GrayBox height={`h-[50%] p-48`}>
                        {/*TODO: 인증 정보 관리*/}
                            <p className={`text-30 font-bold`}>인증 정보 관리</p>
                        </GrayBox>
                    </div>
                </div>
            </WhiteBox>
        </Layout>
    );
};

export default MyPage;