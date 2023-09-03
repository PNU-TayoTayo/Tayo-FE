import React from 'react';
import WhiteBox from "@components/common/WhiteBox";
import starRate from "@components/car-research/StarRate";
import ImageLabel from "@components/common/ImageLabel";
import Image from "next/image";
import Volvo from "@image/car-search/volvo.svg";
import TayoButton from "@components/common/TayoButton";
import Go from "@image/car-search/Arrow_alt_lright_alt.svg";
import IcCost from "@image/car-search/cost-icon.svg";

const CarCard = ({CarData}) => {
    return (
        <WhiteBox className={`relative flex flex-shrink-0 flex-col select-none gap-16`} width={`w-280`} height={`h-300`} padding={'p-16'}>
            <div className={`items-end`}>{starRate(1)}</div>
            <Image src={Volvo} alt={'car'}/>
            <p className={`text-16 font-bold`}>Jeep Wrangler Rubicon</p>
            <p className={`text-13 text-[#9C9C9C]`}>부산광역시 남구 범일5동 두산위브 더제니스 하버시티</p>
            <div className={`flex`}>
                <Image src={IcCost} alt={'icon'} className={`mr-10`}/>
                <span className={`text-16 text-[#4B4B4B]`}>45,000원 / 일</span>
            </div>
            <TayoButton onClick={null} disabled={true} className={`absolute bottom-16 right-16 cursor-pointer`}
                        maxWidth={'max-w-40'} height={'h-40'} rounded={'rounded-full'}>
                <Image src={Go} alt={'go'}/>
            </TayoButton>
        </WhiteBox>
    );
};

export default CarCard;

