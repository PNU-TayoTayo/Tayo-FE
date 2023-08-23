import React from 'react';
import WhiteBox from "@components/common/WhiteBox";
import Image from "next/image";
import Volvo from "@image/car-search/volvo.svg";
import TayoButton from "@components/common/TayoButton";
import Go from "@image/car-search/Arrow_alt_lright_alt.svg";
const CarCard = ({CarData}) => {
    return (
        <WhiteBox className={`relative flex flex-shrink-0 flex-col select-none gap-16`} width={`w-280`} height={`h-300`} padding={'p-16'}>
            <div className={`items-end`}>{starRate(1)}</div>
            <Image src={Volvo} alt={'car'}/>
            <p className={`text-16 font-bold`}>Jeep Wrangler Rubicon</p>
            <p className={`text-13 text-[#9C9C9C]`}>부산광역시 남구 범일5동 두산위브 더제니스 하버시티</p>
            <p>정보들...</p>
            <TayoButton onClick={null} disabled={true} className={`absolute bottom-16 right-16`}
                        maxWidth={'max-w-40'} height={'h-40'} rounded={'rounded-full'}>
                <Image src={Go} alt={'go'}/>
            </TayoButton>
        </WhiteBox>
    );
};

export default CarCard;

const starRate = (rate: number) => {
    return(
        <Image src={`/image/car-search/star-rates-${rate}.svg`} alt={'star-rate'} width={92} height={16}/>
    )
}