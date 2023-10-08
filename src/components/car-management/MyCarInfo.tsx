import React from 'react';
import GrayBox from "@components/common/GrayBox";
import ImageLabel from "@components/common/ImageLabel";
import IcCost from "@image/car-search/cost-icon.svg";
import IcClock from "@image/car-search/time-icon.svg";
import IcFuel from "@image/car-search/fuel-icon.svg";
import IcShipDate from "@image/car-search/ship-date-icon.svg";
import IcDistance from "@image/car-search/distance-icon.svg";
import IcTest from "@image/car-search/test-icon.svg";
import Volvo from "@image/car-search/volvo.svg";
import Image from "next/image";
const MyCarInfo = ({carData}) => {
    return (
        <GrayBox className={`flex flex-col gap-30 w-458 h-full min-h-639 items-center justify-center`}>
            <Image src={Volvo} alt={'volvo'} width={357} height={186}/>
            <p className={`text-24 font-bold`}>Jeep Wrangler Rubicon </p>
            <div className={`flex flex-col gap-16 w-full px-16`}>
                <ImageLabel image={IcCost} label={'대여료'} value={carData.sharingPrice}/>
                <ImageLabel image={IcClock} label={'공유 가능 일자'} value={carData.dateList}/>
                <ImageLabel image={IcFuel} label={'사용 연료'} value={carData.engine}/>
                <ImageLabel image={IcShipDate} label={'최초 등록'} value={carData.deliveryDate}/>
                <ImageLabel image={IcDistance} label={'주행 거리'} value={carData.drivingRecord}/>
                <ImageLabel image={IcTest} label={'검사 이력'} value={carData.inspectionRecord}/>
            </div>
        </GrayBox>
    );
};

export default MyCarInfo;