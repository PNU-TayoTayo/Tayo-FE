'use client'
import React, {useEffect, useRef, useState} from 'react';
import Layout from "@components/common/Layout";
import GrayBox from "@components/common/GrayBox";
import Datepicker from "@components/common/Datepicker";
import Calendar from "@image/car-search/ic-calendar.svg";
import Search from "@image/car-search/search.svg";
import Image from "next/image";
import Carousel from "@components/car-research/Carousel";
import {carMap} from "../../mock/carmap";



const CarSearch = () => {
    const [address, setAddress] = useState('')
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
            <div className={`flex w-full h-full`}>
                <div className={`relative w-[70%] h-[calc(100vh-86px)]`}>
                    <div id={'map'} className={`w-full h-full`}/>
                    <Carousel/>
                </div>
                <div className={`w-[30%] h-[calc(100vh-86px)] p-16 bg-white`}>
                    <div className={`flex flex-col gap-8`}>
                        <GrayBox className={`flex items-center`}>
                            <Datepicker/><Image src={Calendar} alt={'calendar'}/>
                        </GrayBox>
                        <GrayBox className={`flex`}>
                            <input value={address} placeholder={'주소를 입력해주세요.'}
                                   className={`outline-none w-full text-title`}
                                   onChange={(e)=>setAddress(e.target.value)}/>
                            <Image src={Search} alt={'search'}/>
                        </GrayBox>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CarSearch;