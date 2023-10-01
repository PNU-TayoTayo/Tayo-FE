'use client'
import React, {useEffect, useState} from 'react';
import Layout from "@components/common/Layout";
import ChatItem from "@components/chat/ChatItem";
import User from "@image/dashboard/user-icon.svg"
import Image from "next/image";
import Send from "@image/chat/send.svg";
import apiCall from "@api/apiCall";
import {getChatList, getPastChats} from "@api/chatApi";
import AcceptModal from "@components/chat/AcceptModal";
import RejectModal from "@components/chat/RejectModal";

const Chat = () => {
    const [chatList, setChatList] = useState<ChatList[]>([]);
    const [opponentNickName, setOpponentNickName] = useState<string>('');
    const [pastChats, setPastChats] = useState<ChatMessage[]>([]);
    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<boolean>(false);
    const [isRejectModalOpen, setIsRejectModalOpen] = useState<boolean>(false);

    const data = {
        carName: 'Jeep Wrangler Rubicon',
        ownerName: '따요따요',
        date: '2023.09.30',
        location: '두산위브 더제니스 하버시티 아파트',
        cost: '45,000',
    }
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
                <div className={`relative`}>
                    <AcceptModal open={isAcceptModalOpen} onClose={()=>{setIsAcceptModalOpen(false)}} info={data} />
                    <RejectModal open={isRejectModalOpen} onClose={()=>{setIsRejectModalOpen(false)}} info={data} />
                    <div className={`flex bg-white h-60 w-[calc(100vw-480px)] justify-between drop-shadow-sm px-16`}>
                        <div className={`flex gap-16`}>
                            <Image src={User} alt={'user profile'} width={42} height={42}/>
                            <p className={`font-bold text-22 leading-60`}>{opponentNickName}</p>
                        </div>
                        <div className={`flex gap-16 items-center`}>
                            <button className={`w-100 h-42 bg-pointRed text-white text-20 font-bold rounded-4`}
                                    onClick={()=>{setIsRejectModalOpen(true)}}>
                                거절
                            </button>
                            <button className={`w-100 h-42 bg-subGreen text-white text-20 font-bold rounded-4`}
                                    onClick={()=>{setIsAcceptModalOpen(true)}}>
                                수락
                            </button>
                        </div>
                    </div>
                    {/*TODO: 과거 채팅 조회*/}
                    <div className={`absolute bottom-16 w-[calc(100%-32px)] h-204 ml-16 bg-white`}>
                        <textarea className={`resize-none w-full h-full outline-none p-16`} placeholder={'메세지를 입력해주세요.'} />
                        <Image src={Send} alt={'send'} width={46} height={46} className={`absolute bottom-24 right-24 cursor-pointer`}
                               onClick={()=>{}}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chat;