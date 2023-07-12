'use client'
import React, {useEffect, useRef, useState} from 'react';
import Layout from "@components/common/Layout";

const CarSearch = () => {
    const mapRef = useRef<HTMLElement | null | any>(null);
    const markerRef = useRef<any | null>(null);

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
        }
    }, [myLocation]);

    useEffect(() => {
        if (typeof myLocation !== "string") {
            // let currentPosition = [myLocation.latitude, myLocation.longitude];

            markerRef.current = new naver.maps.Marker({
                position: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
                map: mapRef.current,
                icon: {
                    url: '/image/car-search/driver-icon.svg',
                    size: new naver.maps.Size(50, 50),
                    anchor: new naver.maps.Point(25, 16)
                },
            });
        }
    }, [])

    return (
        <Layout>
            <div className={`flex w-full h-full`}>
                <div id="map" className={`w-[70%] h-full`}></div>
                <div className={`w-[30%] h-full bg-white`}></div>
            </div>
        </Layout>
    );
};

export default CarSearch;