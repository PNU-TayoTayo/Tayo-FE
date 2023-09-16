'use client'
import React, {useEffect, useRef, useState} from 'react';
import Car from '@image/layout/car-green.svg'
import InputWrapper from "@components/common/InputWrapper";
import {useForm} from "react-hook-form";
import Image from "next/image";
import TayoButton from "@components/common/TayoButton";
import WhiteBox from "@components/common/WhiteBox";
import {UserLoginInfo} from "@type/UserSignUpInfo";

const SignIn = () => {
    const {register, handleSubmit, watch, reset, setValue, formState: {errors}, clearErrors} = useForm<UserLoginInfo>()
    const inputRefs = useRef({id: null, password: null})
    const [isInputFocused, setIsInputFocused] = useState({id: false, password: false})
    const [form, setForm] = useState({
        id: watch('email'),
        password: watch('password'),
    });
    const onClickInput = (type: string) => {
        setIsInputFocused({...isInputFocused, [type]: true})
        inputRefs.current[type].focus();
    }

    useEffect(() => {
        if (watch('email')) {
            clearErrors('email')
        }
        if (watch('password')) {
            clearErrors('password')
        }
    }, [form.id, form.password])

    return (
        <div className={`flex w-screen h-screen justify-center items-center bg-subGreen`}>
            <div className={`flex w-690 h-530 justify-center items-center bg-white bg-opacity-50 rounded-20 m-auto`}>
                <form className="w-500 h-full flex flex-col items-center justify-between py-100">
                    <div className={`flex flex-col gap-16 text-center`}>
                        <Image src={Car} alt={'car'} width={48} height={48} className={`m-auto`}/>
                        <div>
                            <p className={`text-16`}>스마트 시티 공유 모빌리티 서비스, <b>타요타요</b></p>
                            <p className={`text-16`}>진정한 공유로 연결되는 스마트 시티를 함께 만들어가요</p>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-16`}>
                        <div className={`flex justify-between`}>
                            <label className={`text-14 text-black`}>이메일</label>
                            <div className={`flex flex-col`}>
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
                                <span>{errors.email && errors.email.message}</span>
                            </div>
                        </div>
                        <div className={`flex gap-30`}>
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
                                <span>{errors.password && errors.password.message}</span>
                            </div>
                        </div>
                    </div>
                    <TayoButton maxWidth={'max-w-477'} height={'h-56'} rounded={'rounded-10'} onClick={()=>{}}>로그인</TayoButton>
                </form>
            </div>
        </div>
    );
};

export default SignIn;