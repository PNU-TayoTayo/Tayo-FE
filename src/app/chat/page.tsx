'use client'
import React, {useEffect, useState} from 'react';
import Layout from "@components/common/Layout";
import ChatItem from "@components/chat/ChatItem";
import User from "@image/dashboard/user-icon.svg"
import Image from "next/image";
import apiCall from "@api/apiCall";
import {getChatList, getPastChats} from "@api/chatApi";

const Chat = () => {
    const [chatList, setChatList] = useState<ChatList[]>([]);
    const [opponentNickName, setOpponentNickName] = useState<string>('');
    const [pastChats, setPastChats] = useState<ChatMessage[]>([]);
    const getMyChatList = async () => {
        const response = await apiCall(getChatList());
        if (response) {
            if (response.result){
                setChatList(response.data.chatRooms);
            }
        } else {
            alert('채팅 목록 조회 실패');
        }
    }
    const getChatMessages = async ({roomId}) => {
        const response = await apiCall(getPastChats({roomId}));
        if (response) {
            if (response.result){
                setPastChats(response.data.chatMessages);
            }
        } else {
            alert('이전 메세지 조회 실패');
        }
    }

    useEffect(()=>{
        getMyChatList();
    },[])
    return (
        <Layout>
            <div className={`flex w-[calc(100%-140px)] h-full ml-140`}>
                <div className={`w-340 h-[calc(100vh-86px)] bg-white drop-shadow-md z-10`}>
                    <p className={`bg-white h-60 font-bold text-22 p-16`}>채팅 목록</p>
                    <div className={`border-t-1 border-lightGrey`} />
                    {
                        chatList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ChatItem img={User} name={item.opponentNickName} text={item.lastMessage} count={item.unreadMessageCount}/>
                                    <div className={`border-t-1 border-lightGrey`} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={``}>
                    <div className={`flex bg-white h-60 w-[calc(100vw-480px)] gap-16 drop-shadow-sm px-16`}>
                        <Image src={User} alt={'user profile'} width={42} height={42}/>
                        <p className={`font-bold text-22 leading-60`}>{opponentNickName}</p>
                    </div>
                {/*TODO: 과거 채팅 조회*/}
                </div>
            </div>
        </Layout>
    );
};

export default Chat;