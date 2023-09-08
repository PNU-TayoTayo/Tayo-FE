'use client'
import React from 'react';
import Layout from "@components/common/Layout";
import ChatItem from "@components/chat/ChatItem";
import User from "@image/layout/user.png"

const Chat = () => {
    return (
        <Layout>
            <div className={`flex w-full h-full`}>
                <div className={`w-340 h-[calc(100vh-86px)] bg-white`}>
                    <p>채팅 목록</p>
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                    <ChatItem img={User} name={'타요타요'} text={'안녕하세요 ㅎㅇㅎㅇ'} count={3}/>
                </div>
                <div className={`bg-`}>
                    <p>채팅 내용</p>
                </div>
            </div>
        </Layout>
    );
};

export default Chat;