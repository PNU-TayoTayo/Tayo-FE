'use client'
import React, {useEffect, useRef, useState} from 'react';
import Layout from "@components/common/Layout";
import GrayBox from "@components/common/GrayBox";
import Datepicker from "@components/common/Datepicker";
import starRate from "@components/car-research/StarRate";
import Carousel from "@components/car-research/Carousel";
import {carMap} from "../../mock/carmap";

import Image from "next/image";
import Calendar from "@image/car-search/ic-calendar.svg";
import Search from "@image/car-search/search.svg";
import User from "@image/dashboard/user-icon.svg";
import Certificated from "@image/car-search/certification-icon.svg"
import Volvo from "@image/car-search/volvo.svg";
import IcCost from "@image/car-search/cost-icon.svg";
import IcClock from "@image/car-search/time-icon.svg";
import IcFuel from "@image/car-search/fuel-icon.svg";
import IcShipDate from "@image/car-search/ship-date-icon.svg";
import IcDistance from "@image/car-search/distance-icon.svg";
import IcTest from "@image/car-search/test-icon.svg";
import ImageLabel from "@components/common/ImageLabel";
import TayoButton from "@components/common/TayoButton";
import {useRecoilValue} from "recoil";
import {userAtom} from "@recoil/auth";

const CarSearch = () => {
    const userInfo = useRecoilValue(userAtom);
    const [address, setAddress] = useState('');
    const mapRef = useRef<HTMLElement | null | any>(null);
    const myMarkerRef = useRef<any | null>(null);
    const carMarkerRef = useRef<any | null>(null);

    const [myLocation, setMyLocation] = useState<
        { latitude: number; longitude: number } | string
    >('');

    useEffect(() => {
        // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMyLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
            setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
        }
    }, []);

    useEffect(() => {
        if (typeof myLocation !== 'string') {
            // 현재 위치 추적
            let currentPosition = [myLocation.latitude, myLocation.longitude];

            // Naver Map 생성
            mapRef.current = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
                zoomControl: false,
                scaleControl: false,
                logoControl: false,
                mapDataControl: false,
            });
            // 현재 위치 마커 생성
            myMarkerRef.current = new naver.maps.Marker({
                position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
                map: mapRef.current,
                icon: {
                    url: '/image/car-search/driver-icon.svg',
                    size: new naver.maps.Size(50, 50),
                    anchor: new naver.maps.Point(25, 50)
                },
            });
            // 주변 차량 마커 생성
            carMap.map((car,index) => {
                carMarkerRef.current = new naver.maps.Marker({
                    position: new naver.maps.LatLng(car.lat[index], car.lng[index]),
                    map: mapRef.current,
                });
            });
        }
    }, [myLocation]);


    return (
        <Layout>
            <div className={`flex w-full h-full ml-140`}>
                <div className={`relative w-[70%] h-[calc(100vh-86px)]`}>
                    <div id={'map'} className={`w-full h-full`}/>
                    <Carousel/>
                </div>
                <div className={`flex flex-col w-[30%] h-[calc(100vh-86px)] bg-white`}>
                    <div className={`flex flex-col p-16 gap-16`}>
                        <GrayBox className={`flex items-center w-full justify-between`}>
                            <Datepicker/>
                            <Image src={Calendar} alt={'calendar'}/>
                        </GrayBox>
                        <GrayBox className={`flex items-center`}>
                            <input value={address} placeholder={'주소를 입력해주세요.'}
                                   className={`outline-none w-full text-title`}
                                   onChange={(e)=>setAddress(e.target.value)}/>
                            <Image src={Search} alt={'search'}/>
                        </GrayBox>
                    </div>
                    <div className={`border-t-1 border-lightGrey`} />
                    <OwnerInfo/>
                    <div className={`border-t-1 border-lightGrey`} />
                    <CarInfo/>
                </div>
            </div>
        </Layout>
    );
};

export default CarSearch;

const OwnerInfo = () => {
    return (
        <div className={`flex w-full p-24 gap-16 justify-between`}>
            <Image src={User} alt={'user'} width={72} height={72}/>
            <div className={`flex flex-col w-[80%]`}>
                <div className={`flex w-full gap-10`}>
                    <Image src={Certificated} alt={'certificated'}/>
                    <div className={`text-28 font-bold text-[#787878]`}>
                        <span className={`text-title`}>{'따요따요'}</span> 님의 차량입니다
                    </div>
                </div>
                <p className={`text-18 text-[#4B4B4B]]`}>편하게 연락주세용</p>
            </div>
        </div>
    )
}

const CarInfo = () => {
    return (
        <div className={`flex flex-col w-full p-24 gap-16`}>
            <div className={`flex justify-between`}>
                <p className={`text-24 font-bold text-[#4B4B4B]`}>Jeep Wrangler Rubicon</p>
                <div>{starRate(1)}</div>
            </div>
            <p className={`text-18 text-[#4B4B4B]`}>부산광역시 남구 범일5동 두산위브 더제니스 하버시티</p>
            <Image src={Volvo} alt={'volvo'} width={300} height={200} className={`m-auto`}/>
            <div>
                <ImageLabel image={IcCost} label={'대여료'} value={'45,000원 / 일'}/>
                <ImageLabel image={IcClock} label={'공유 가능 일자'} value={'2023.06.11'}/>
                <ImageLabel image={IcFuel} label={'사용 연료'} value={'가솔린'}/>
                <ImageLabel image={IcShipDate} label={'최초 등록'} value={'2022.03.09'}/>
                <ImageLabel image={IcDistance} label={'주행 거리'} value={'1,000km'}/>
                <ImageLabel image={IcTest} label={'검사 이력'} value={'2023.04.23'}/>
            </div>
            <TayoButton onClick={()=>{}} className={`text-24 font-bold`}>예약 신청하기</TayoButton>
        </div>
    )
}