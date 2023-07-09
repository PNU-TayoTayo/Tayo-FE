'use client';
import React from 'react';
import Logo from '@image/layout/tayologo.png'
import User from '@image/layout/user.png'
import Logout from '@image/layout/logout.png'
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {NavData} from "@enumerate/NavData";

const Layout = ({children}) => {
    return (
        <div className="w-full h-full flex bg-[#F0F0F0]">
            <div className="w-[100vw] h-86 z-20 fixed">
                <Header/>
            </div>
            <div className="flex w-[100vw] mt-86">
                <div className="w-140 h-[calc(100%-86px)] z-10">
                    <SideBar/>
                </div>
                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;

const Header = () => {
    const router = useRouter()

    return (
        <header className="w-full h-86 bg-white px-16 drop-shadow-md">
            <Image src={Logo} alt="logo"
                   onClick={()=>router.push('/dashboard')}
                   className="py-16 cursor-pointer"/>
        </header>
    );
}

const SideBar = () => {
    const pathname = usePathname();

    return (
        <nav className="w-140 h-[100vh] flex flex-col justify-between bg-white drop-shadow-md">
            <div className="flex flex-col gap-16 mt-8">
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
            <div>
                <Link href={'/'}>
                    <Image src={User} alt={'user'}/>
                </Link>
                <Link href={'/'}>
                    <Image src={Logout} alt={'logout'}/>
                </Link>
            </div>
        </nav>
    );
}