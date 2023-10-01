import axios from '@utils/customAxios';
import {NewPassword} from "@type/UserInfo";
export function getMyInfo() {
    return axios.get('/tayo/my',{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function changePassword({currentPassword, newPassword, checkNewPassword}:NewPassword) {
    return axios.patch('/tayo/my/password', {
        currentPassword,
        newPassword,
        checkNewPassword
    },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function changeIntroduce({newIntroduce}: {newIntroduce: string}) {
    return axios.patch('/tayo/my/introduce', {
        newIntroduce
    },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function getMyBalance() {
    return axios.get('/tayo/my/money',{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}
export function deposit({amount}: {amount: number}) {
    return axios.post('/tayo/my/deposit',{
        amount,
    },{
        headers: {
            Authorization: localStorage.getItem('accessToken'),
        }
    });
}