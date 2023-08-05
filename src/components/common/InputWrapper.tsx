import {forwardRef} from "react";
interface InputWrapperProps {
    label?: string;
    className?: string;
    isError?: boolean;
    isInputOpen: boolean;
    type: string;
    register: any;
    setValue: any;
    onClick?: () => void;
}
const InputWrapper = forwardRef(({
                                     label = '',
                                     className = '',
                                     type,
                                     register,
                                     isError,
                                     isInputOpen,
                                     setValue,
                                     onClick,
                                 }: InputWrapperProps, ref) => {

    return (
        <div
            onClick={onClick}
            className={`w-full border-lightGray flex p-0 ${className} flex flex-col transition-all duration-500 ease-in-out`}>
            <span className={`mb-8 ${isError ? 'text-[#e10000]' : 'text-[#727272]'}`}>{label}</span>
            <input type={type}
                   {...register}
                   ref={ref}
                   onChange={event => setValue(register.name, event.target.value)}
                   autoComplete="off"
                   className={`h-48 outline-none mb-4 text-[#525252]`}/>
        </div>
    )
})

InputWrapper.displayName = "InputWrapper";
export default InputWrapper;