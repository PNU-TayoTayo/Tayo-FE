interface ChatList{
    chatRoomId: number,
    opponentNickName: string;
    lastMessage: string;
    unreadMessageCount: number;
}
interface ChatMessage{
    sentByCarOwner: boolean;
    content: string;
    sentAt: string;
}