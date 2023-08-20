import {useRef} from "react";
import Marker = naver.maps.Marker;
import LatLng = naver.maps.LatLng;
import navBounds = naver.maps.Bounds;
import BoundsLiteral = naver.maps.BoundsLiteral;
import ArrayOfCoords = naver.maps.ArrayOfCoords;
import ArrayOfCoordsLiteral = naver.maps.ArrayOfCoordsLiteral;
import Coord = naver.maps.Coord;
import CoordLiteral = naver.maps.CoordLiteral;
import MapOptions = naver.maps.MapOptions
export default function useNaverMap() {
    const map = useRef(null);
    const myMarker = useRef(null);

    const initMap = (options: MapOptions) => {
        if(map.current) {return}
        map.current = new window.naver.maps.Map("map", options);
    }

    const initMarker = (position: Coord | CoordLiteral, imgUrl: string, width: number, height: number) => {
        const markerOptions = {
            position,
            map: map.current,
            icon: {
                url: '/image' + imgUrl,
                size: new naver.maps.Size(width, height),
                anchor: new naver.maps.Point(width / 2, height)
            },
        };
        return new window.naver.maps.Marker(markerOptions);
    }

    const removeMaker = (marker:naver.maps.Marker) => {
        if(marker) {
            marker.setMap(null);
        }
    }

    const moveMarker = (marker: Marker, position: LatLng) => {
        marker.setPosition(position);
    }

    const fitBounds = (points: navBounds | BoundsLiteral | ArrayOfCoords | ArrayOfCoordsLiteral) => {
        map.current?.fitBounds(points);
    }

    const createLatLngObj = (lat: number, lng: number) => {
        return new window.naver.maps.LatLng(lat, lng);
    }

    const getBounds = () => {
        return map.current?.getBounds();
    }

    const panTo = (mapLatLng: Coord | CoordLiteral) => {
        return map.current?.panTo(mapLatLng);
    }
    const setZoom = (zoomLevel: number) => {
        return map.current?.setZoom(zoomLevel);
    }

    return {
        map, myMarker, initMap, initMarker, removeMaker, moveMarker, fitBounds, createLatLngObj, getBounds, panTo, setZoom
    }
}