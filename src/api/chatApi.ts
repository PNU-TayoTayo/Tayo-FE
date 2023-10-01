import axios from '@utils/customAxios';
export function getChatList() {
    return axios.get('/tayo/chat',{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function getPastChats({roomId}) {
    return axios.get(`/tayo/chat/${roomId}`,{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}