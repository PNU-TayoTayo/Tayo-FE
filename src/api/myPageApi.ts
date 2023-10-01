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