'use client'
import React from 'react';
import Layout from "@components/common/Layout";
import ChatItem from "@components/chat/ChatItem";
import User from "@image/dashboard/user-icon.svg"
import Image from "next/image";

const Chat = () => {
    return (
        <Layout>
            <div className={`flex w-full h-full`}>
                <div className={`w-340 h-[calc(100vh-86px)] bg-white drop-shadow-md z-10`}>
                    <p className={`bg-white h-60 font-bold text-22 p-16`}>채팅 목록</p>
                    <div className={`border-t-1 border-lightGrey`} />
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <div className={`border-t-1 border-lightGrey`} />
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <div className={`border-t-1 border-lightGrey`} />
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <div className={`border-t-1 border-lightGrey`} />
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <div className={`border-t-1 border-lightGrey`} />
                </div>
                <div className={``}>
                    <div className={`flex bg-white h-60 w-[calc(100vw-480px)] gap-16 drop-shadow-sm px-16`}>
                        <Image src={User} alt={'user profile'} width={42} height={42}/>
                        <p className={`font-bold text-22 leading-60`}>타요타요</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chat;