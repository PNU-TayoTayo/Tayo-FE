'use client'
import React, {useEffect, useRef, useState} from 'react';
import Car from '@image/layout/car-green.svg'
import InputWrapper from "@components/common/InputWrapper";
import {useForm} from "react-hook-form";
import Image from "next/image";
import TayoButton from "@components/common/TayoButton";
interface LoginForm {
    id: string;
    password: string;
}
const SignIn = () => {
    const {register, handleSubmit, watch, reset, setValue, formState: {errors}, clearErrors} = useForm<LoginForm>()
    const inputRefs = useRef({id: null, password: null})
    const [isInputFocused, setIsInputFocused] = useState({id: false, password: false})
    const [form, setForm] = useState({
        id: watch('id'),
        password: watch('password'),
    });
    const onClickInput = (type: string) => {
        setIsInputFocused({...isInputFocused, [type]: true})
        inputRefs.current[type].focus();
    }

    useEffect(() => {
        if (watch('id')) {
            clearErrors('id')
        }
        if (watch('password')) {
            clearErrors('password')
        }
    }, [form.id, form.password])

    return (
        <div className={`flex w-screen h-screen justify-center items-center bg-subGreen`}>
            <div className={`flex w-690 h-530 justify-center items-center bg-white bg-opacity-50 rounded-20 m-auto`}>
                <form className="w-396 flex flex-col items-center">
                    <Image src={Car} alt={'car'}/>
                    <p>스마트 시티 공유 모빌리티 서비스, <b>타요타요</b></p>
                    <p>진정한 공유로 연결되는 스마트 시티를 함께 만들어가요</p>
                    <div className="w-full mb-50">
                        <InputWrapper
                            register={register('id', {required: true})}
                            isError={errors.id && true} isInputOpen={isInputFocused.id}
                            ref={(ref) => (inputRefs.current.id = ref)}
                            onClick={() => onClickInput('id')}
                            setValue={setValue}
                            label="아이디" className="mb-48" type="text"/>
                        <InputWrapper
                            register={register('password', {required: true})}
                            isError={errors.password && true} isInputOpen={isInputFocused.password}
                            ref={(ref) => (inputRefs.current.password = ref)}
                            onClick={() => onClickInput('password')}
                            setValue={setValue}
                            label="비밀번호" type="passWord"/>
                        {/*서버 에러 메세지 받아와서 처리*/}
                        {/*{*/}
                        {/*    error && (*/}
                        {/*        <div className="mt-10 absolute">*/}
                        {/*            <Image src={warning} className="inline mr-4" alt=""/>*/}
                        {/*            <p className="inline text-14 text-[#e10000]">{error.toString()}</p>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*}*/}
                    </div>
                    <TayoButton maxWidth={'max-w-477'} height={'h-56'} rounded={'rounded-10'} onClick={()=>{}}>로그인</TayoButton>
                </form>
            </div>
        </div>
    );
};

export default SignIn;