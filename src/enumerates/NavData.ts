import Home from '@image/layout/home.svg';
import Location from '@image/layout/driver-icon.svg';
import Car from '@image/layout/sports-car.svg';
import Chat from '@image/layout/chat.svg';
import HomeGreen from '@image/layout/home-green.svg';
import LocationGreen from '@image/layout/drive-green.svg';
import CarGreen from '@image/layout/car-green.svg';
import ChatGreen from '@image/layout/chat-green.svg';

export const NavData = [
    {
        id: 1,
        name: '대시보드',
        img: Home,
        colorImg: HomeGreen,
        path: '/',
    },
    {
        id: 2,
        name: '차량검색',
        img: Location,
        colorImg: LocationGreen,
        path: '/',
    },
    {
        id: 3,
        name: '차량관리',
        img: Car,
        colorImg: CarGreen,
        path: '/',
    },
    {
        id: 4,
        name: '채팅하기',
        img: Chat,
        colorImg: ChatGreen,
        path: '/',
    },
]