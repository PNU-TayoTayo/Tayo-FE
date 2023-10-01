'use client';
import React, { useState } from 'react';
import Logo from '@image/layout/sports-car.svg'
import Image from "next/image";
import {useForm} from "react-hook-form";
import {UserSignUpClientInfo} from "@type/UserInfo";
import WhiteBox from "@components/common/WhiteBox";
import TayoButton from "@components/common/TayoButton";
import Link from "next/link";
import {signUp} from "@api/authApi";
import {useRouter} from "next/navigation";
import apiCall from "@api/apiCall";

const SignUp = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting, isValid, errors },
    } = useForm<UserSignUpClientInfo>({ mode: 'onBlur'});

    const userSignUp = async () => {
        const response = await apiCall(signUp({
            email: watch('email'),
            password: watch('password'),
            name: watch('name'),
            phoneNumber: watch('phoneNumber'),
            nickName: watch('nickName'),
            introduce: watch('introduce'),
            walletPassword: watch('walletPassword'),
        }));
    }
    const handleSignUp = () => {
        userSignUp()
            .then(() => router.push('/sign-in'))
            .catch((error) => {alert(error.message)});
    };

    return (
        <div className="grid h-screen place-content-center place-items-center bg-subGreen">
            <Image src={Logo} alt={'logo'} width={48} height={48} className={`mb-8`}/>
            <form className="w-700 flex flex-col items-center gap-y-20 bg-white bg-opacity-50 rounded-10 p-16" onSubmit={handleSubmit(handleSignUp)}>
                <p className={`text-28 font-bold text-black`}>회원가입</p>
                <div className={`border-t-1 border-lightGrey`} />
                <div className={`flex flex-col w-530 gap-24`}>
                    <div className={`flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>이메일</label>
                        <div className={`relative flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="text"
                                       {...register('email', {
                                           required: '이메일은 필수 입력 항목입니다.',
                                           pattern: {
                                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                               message: '올바른 이메일 형식이 아닙니다.',
                                           },
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.email && errors.email.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>비밀번호</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="password"
                                       {...register('password', {
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
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.password && errors.password.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>비밀번호 확인</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="password"
                                       {...register('passwordConfirm', {
                                           required: '비밀번호를 확인해주세요.',
                                           validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.passwordConfirm && errors.passwordConfirm.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>이름</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="text"
                                       {...register('name', {
                                           required: '이름은 필수 입력 항목입니다.',
                                           minLength: {
                                               value: 1,
                                               message: '이름은 1글자 이상이어야 합니다.',
                                           },
                                           maxLength: {
                                               value: 20,
                                               message: '이름은 최대 20글자까지 허용됩니다.',
                                           },
                                           pattern: {
                                               value: /^[A-Za-z가-힣]+$/,
                                               message: '이름은 한글 또는 영문만 허용됩니다.',
                                           },
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.name && errors.name.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>전화번호</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="text"
                                       {...register('phoneNumber', {
                                           required: '전화번호는 필수 입력 항목입니다.',
                                           pattern: {
                                               value: /^\d{10,11}$/,
                                               message: '올바른 전화번호 형식이 아닙니다.',
                                           },
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.phoneNumber && errors.phoneNumber.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>닉네임</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="text"
                                       {...register('nickName',{
                                           required: '닉네임은 필수 입력 항목입니다.',
                                           minLength: {
                                               value: 1,
                                               message: '닉네임은 1글자 이상이어야 합니다.',
                                           },
                                           maxLength: {
                                               value: 20,
                                               message: '닉네임은 최대 20글자까지 허용됩니다.',
                                           },
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.nickName && errors.nickName.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>한줄소개</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                            <textarea className={`resize-none w-full outline-none`}
                                      {...register('introduce',{
                                          required: '한줄소개는 필수 입력 항목입니다.',
                                      })}
                            />
                            </WhiteBox>
                            <span className={`absolute top-70 text-14 text-pointRed`}>{errors.introduce && errors.introduce.message}</span>
                        </div>
                    </div>

                    <div className={`relative flex gap-30 justify-between`}>
                        <label className={`text-14 text-black`}>{'차량지갑\n비밀번호'}</label>
                        <div className={`flex flex-col`}>
                            <WhiteBox className={`w-390`}>
                                <input className={`w-full outline-none`}
                                       type="password"
                                       {...register('walletPassword',{
                                           required: '차량지갑 비밀번호는 필수 입력 항목입니다.',
                                       })}
                                />
                            </WhiteBox>
                            <span className={`absolute top-40 text-14 text-pointRed`}>{errors.walletPassword && errors.walletPassword.message}</span>
                        </div>
                    </div>
                </div>
                <TayoButton maxWidth={'max-w-248'} height={'h-56'} onClick={()=>{}} disabled={isSubmitting === true}>
                    가입하기
                </TayoButton>
                <div>
                    <Link href={'/sign-in'}>
                        <p className="hover:underline hover:duration-300">로그인하기</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
