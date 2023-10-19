'use client'
import React, {createContext, useState} from "react";
import Script from "next/script";

export const MapContext = createContext(null);

export default function NaverMapProvider ({children}) {
    const [isInitMap, setIsInitMap] = useState(true);

    const initMap = () => {
        setIsInitMap(true);
    }

    return (
        <MapContext.Provider value={isInitMap}>
            <Script
                src={"https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" + process.env.NEXT_PUBLIC_NAVER_MAP_KEY}
                onReady={initMap}
                strategy="beforeInteractive"
            />
            {children}
        </MapContext.Provider>)
}

