import React from 'react';
import WhiteBox from "@components/common/WhiteBox";
import Image from "next/image";
import Volvo from "@image/car-search/volvo.svg";
const CarCard = ({CarData}) => {
    return (
        <WhiteBox className={`flex-shrink-0 flex-col select-none`} width={`w-280`} height={`h-300`}>
                <div className={`items-end`}>★★★★★</div>
                <Image src={Volvo} alt={'car'}/>
                <p>Jeep Wrangler Rubicon</p>
                <p>부산광역시 남구 범일5동 두산위브 더제니스 하버시티</p>
                <p>정보들...</p>
        </WhiteBox>
    );
};

export default CarCard;