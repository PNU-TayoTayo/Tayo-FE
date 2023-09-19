'use client'
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import TayoButton from "@components/common/TayoButton";
import WhiteBox from "@components/common/WhiteBox";
import Image from "next/image";
import Car from '@image/layout/car-green.svg'
import {UserSignInInfo} from "@type/UserSignUpInfo";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn} from "@api/authApi";


const SignIn = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setError,
        setValue,
        formState: {isSubmitting, errors},
        clearErrors
    } = useForm<UserSignInInfo>({ mode: 'onBlur'})

    const userSignIn = async () => {
        const response = await signIn({
            email: watch('email'),
            password: watch('password')
        })
        const { name, nickName, accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken); // 로컬 스토리지에 토큰 저장

    }
    const handleSignIn = () => {
        if (watch('email') === '') {
            setError('email', {message: '이메일은 필수 입력 항목입니다.'});
            return;
        }
        if (watch('password') === '') {
            setError('password', {message: '비밀번호는 필수 입력 항목입니다.'});
            return;
        }
        userSignIn()
            .then(() => router.push('/dashboard'))
            .catch((error) => {alert(error.message)});
    };

    return (
        <div className={`flex w-screen h-screen justify-center items-center bg-subGreen`}>
            <div className={`flex w-690 h-530 justify-center items-center bg-white bg-opacity-50 rounded-20 m-auto`}>
                <form className="w-500 h-full flex flex-col items-center justify-between py-85" onSubmit={handleSubmit(handleSignIn)}>
                    <div className={`flex flex-col gap-16 text-center`}>
                        <Image src={Car} alt={'car'} width={48} height={48} className={`m-auto`}/>
                        <div>
                            <p className={`text-16`}>스마트 시티 공유 모빌리티 서비스, <b>타요타요</b></p>
                            <p className={`text-16`}>진정한 공유로 연결되는 스마트 시티를 함께 만들어가요</p>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-24`}>
                        <div className={`flex justify-between`}>
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
                        <div className={`flex gap-30`}>
                            <label className={`text-14 text-black`}>비밀번호</label>
                            <div className={`relative flex flex-col`}>
                                <WhiteBox className={`w-390`}>
                                    <input className={`w-full outline-none`}
                                           type="password"
                                           {...register('password', {
                                               required: '비밀번호는 필수 입력 항목입니다.',
                                           })}
                                    />
                                </WhiteBox>
                                <span className={`absolute top-40 text-14 text-pointRed`}>{errors.password && errors.password.message}</span>
                            </div>
                        </div>
                    </div>
                    <TayoButton maxWidth={'max-w-477'} height={'h-56'} rounded={'rounded-10'} disabled={isSubmitting === true} onClick={handleSignIn}>로그인</TayoButton>
                    <div className={`w-477 flex justify-between`}>
                        <Link href={'/sign-up'}>
                            <p className="hover:underline hover:duration-300">아이디·비밀번호 찾기</p>
                        </Link>
                        <Link href={'/sign-up'}>
                            <p className="hover:underline hover:duration-300">회원가입</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;