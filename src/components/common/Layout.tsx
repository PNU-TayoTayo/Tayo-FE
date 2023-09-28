'use client';
import React from 'react';
import Image from "next/image";
import Logo from '@image/layout/tayologo.png'
import User from '@image/layout/user.png'
import UserGreen from '@image/layout/user-green.svg'
import Logout from '@image/layout/logout.png'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {NavData} from "@enumerate/NavData";

const Layout = ({children}) => {
    return (
        <div className="w-full h-full flex flex-col bg-[#f7f8fe]">
            <Header/>
            <div className="flex mt-86">
                <SideBar/>
                <>{children}</>
            </div>
        </div>
    );
};

export default Layout;

const Header = () => {
    const router = useRouter()

    return (
        <header className="fixed w-full h-86 bg-white px-16 drop-shadow-md z-20">
            <Image src={Logo} alt="logo"
                   onClick={()=>router.push('/dashboard')}
                   className="py-16 cursor-pointer"/>
        </header>
    );
}

const SideBar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed z-10 w-140 min-h-[calc(100vh-86px)] flex flex-col justify-between items-center bg-white drop-shadow-md">
            <div className="flex flex-col gap-16">
                {
                    NavData.map(item => {
                        return (
                            <Link key={item.id} href={item.path} className={`items-center w-full h-80 px-24 py-16 text-[#b7b7b7] cursor-pointer`}>
                                <div className={`flex flex-col items-center p-8`}>
                                    <Image src={pathname===item.path?item.colorImg:item.img} alt={item.name}/>
                                    <span className={`text-16 ${pathname===item.path&&'text-mainGreen'}`}>{item.name}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={`flex flex-col gap-16 pb-16`}>
                <Link href={'/my-page'}>
                    <Image src={pathname==='/my-page'?UserGreen:User} alt={'user'}/>
                </Link>
                <Link href={'/sign-in'}>
                    <Image src={Logout} alt={'logout'}/>
                </Link>
            </div>
        </nav>
    );
}