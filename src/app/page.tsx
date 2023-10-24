'use client';
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Main from "@image/layout/main.png"
export default function Home() {
    const router = useRouter();

    return (
        <div className={`w-screen h-screen bg-subGreen`}>
            <div className={`flex w-full h-full justify-center items-center bg-white bg-opacity-50 m-auto`}>
                <Link href={'/sign-in'}>
                    <Image src={Main} alt={'main'} width={690} height={530}/>
                </Link>
            </div>
        </div>
    )
}
