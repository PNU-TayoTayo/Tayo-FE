'use client'
import React, {useRef, useState} from 'react';
import Car from '@image/layout/sports-car.svg'
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

    const onClickInput = (type: string) => {
        setIsInputFocused({...isInputFocused, [type]: true})
        inputRefs.current[type].focus();
    }

    return (
        <div className={`w-full h-full bg-subGreen`}>
            <div className={`flex w-690 h-530 justify-center items-center`}>
                <form className="w-396 flex flex-col items-center gap-y-68">
                    <Image src={Car} alt={'car'}/>
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